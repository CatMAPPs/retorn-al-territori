-- HistoGuesser Migration: Enhanced Image Fallback Support
-- Phase 1: Enhance database schema to support multiple image sources with priority and status tracking

-- =====================================================
-- ADD IMAGE FALLBACK SUPPORT TO FIGURES TABLE
-- =====================================================

-- First, add a temporary column to store the enhanced image data
ALTER TABLE figures ADD COLUMN images_enhanced JSONB;

-- Update existing figures to use the enhanced image structure
-- Convert current single-image format to multi-source format with priority and status
UPDATE figures SET images_enhanced = (
  SELECT jsonb_agg(
    jsonb_build_object(
      'url', img->>'url',
      'license', COALESCE(img->>'license', 'Unknown'),
      'credit', COALESCE(img->>'credit', 'Unknown'),
      'source_url', COALESCE(img->>'source_url', ''),
      'priority', 1,
      'status', 'active'
    )
  )
  FROM jsonb_array_elements(images) AS img
);

-- Replace the old images column with the enhanced one
ALTER TABLE figures DROP COLUMN images;
ALTER TABLE figures RENAME COLUMN images_enhanced TO images;

-- Add constraint to ensure images array is not empty and has valid structure
ALTER TABLE figures ADD CONSTRAINT figures_images_not_empty
  CHECK (jsonb_array_length(images) > 0);

-- Add constraint to ensure each image has required fields
ALTER TABLE figures ADD CONSTRAINT figures_images_valid_structure
  CHECK (
    jsonb_typeof(images) = 'array' AND
    NOT EXISTS (
      SELECT 1 FROM jsonb_array_elements(images) AS img
      WHERE NOT (
        img ? 'url' AND
        jsonb_typeof(img->'url') = 'string' AND
        img ? 'priority' AND
        jsonb_typeof(img->'priority') = 'number' AND
        (img->>'priority')::int BETWEEN 1 AND 3 AND
        img ? 'status' AND
        (img->>'status') IN ('active', 'fallback', 'broken')
      )
    )
  );

-- =====================================================
-- CREATE INDEXES FOR IMAGE FALLBACK QUERIES
-- =====================================================

-- Index for priority-based image selection
CREATE INDEX idx_figures_images_priority ON figures USING GIN (
  (
    SELECT jsonb_agg(
      jsonb_build_object('priority', (img->>'priority')::int, 'status', img->>'status')
      ORDER BY (img->>'priority')::int ASC
    )
    FROM jsonb_array_elements(images) AS img
    WHERE img->>'status' IN ('active', 'fallback')
  )
);

-- Index for finding figures with broken images
CREATE INDEX idx_figures_broken_images ON figures USING GIN (
  (
    SELECT jsonb_agg(img->>'status')
    FROM jsonb_array_elements(images) AS img
    WHERE img->>'status' = 'broken'
  )
);

-- =====================================================
-- ADD FUNCTION FOR IMAGE FALLBACK SELECTION
-- =====================================================

CREATE OR REPLACE FUNCTION get_figure_images_with_fallback(figure_id UUID)
RETURNS TABLE (
  url TEXT,
  license TEXT,
  credit TEXT,
  source_url TEXT,
  priority INTEGER,
  status TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    (img->>'url')::TEXT,
    COALESCE(img->>'license', 'Unknown')::TEXT,
    COALESCE(img->>'credit', 'Unknown')::TEXT,
    COALESCE(img->>'source_url', '')::TEXT,
    (img->>'priority')::INTEGER,
    img->>'status'
  FROM figures f,
       jsonb_array_elements(f.images) AS img
  WHERE f.id = figure_id
    AND img->>'status' IN ('active', 'fallback')
  ORDER BY (img->>'priority')::INTEGER ASC;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- ADD FUNCTION TO UPDATE IMAGE STATUS
-- =====================================================

CREATE OR REPLACE FUNCTION update_image_status(
  figure_id UUID,
  image_url TEXT,
  new_status TEXT
) RETURNS BOOLEAN AS $$
DECLARE
  updated_count INTEGER;
BEGIN
  -- Validate status
  IF new_status NOT IN ('active', 'fallback', 'broken') THEN
    RAISE EXCEPTION 'Invalid status: %. Must be active, fallback, or broken', new_status;
  END IF;

  -- Update the specific image status
  UPDATE figures
  SET images = (
    SELECT jsonb_agg(
      CASE
        WHEN img->>'url' = image_url THEN
          jsonb_set(img, '{status}', jsonb_build_string(new_status))
        ELSE img
      END
    )
    FROM jsonb_array_elements(images) AS img
  )
  WHERE id = figure_id;

  GET DIAGNOSTICS updated_count = ROW_COUNT;
  RETURN updated_count > 0;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- ADD FUNCTION TO ADD FALLBACK IMAGE
-- =====================================================

CREATE OR REPLACE FUNCTION add_fallback_image(
  figure_id UUID,
  image_url TEXT,
  license TEXT DEFAULT 'Unknown',
  credit TEXT DEFAULT 'Unknown',
  source_url TEXT DEFAULT '',
  priority INTEGER DEFAULT 2
) RETURNS BOOLEAN AS $$
DECLARE
  current_images JSONB;
  new_image JSONB;
BEGIN
  -- Validate priority
  IF priority NOT IN (1, 2, 3) THEN
    RAISE EXCEPTION 'Invalid priority: %. Must be 1, 2, or 3', priority;
  END IF;

  -- Get current images
  SELECT images INTO current_images FROM figures WHERE id = figure_id;

  -- Create new image object
  new_image := jsonb_build_object(
    'url', image_url,
    'license', license,
    'credit', credit,
    'source_url', source_url,
    'priority', priority,
    'status', 'fallback'
  );

  -- Add to images array
  UPDATE figures
  SET images = images || jsonb_build_array(new_image)
  WHERE id = figure_id;

  RETURN FOUND;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- UPDATE COMMENTS
-- =====================================================

COMMENT ON TABLE figures IS 'Historical figures with enhanced image fallback support. Images stored as JSONB with priority and status tracking';
COMMENT ON FUNCTION get_figure_images_with_fallback(UUID) IS 'Returns images for a figure ordered by priority, excluding broken images';
COMMENT ON FUNCTION update_image_status(UUID, TEXT, TEXT) IS 'Updates the status of a specific image URL for a figure';
COMMENT ON FUNCTION add_fallback_image(UUID, TEXT, TEXT, TEXT, TEXT, INTEGER) IS 'Adds a fallback image to a figure with specified priority';

-- =====================================================
-- VERIFY MIGRATION SUCCESS
-- =====================================================

-- Check that all figures have enhanced image structure
DO $$
DECLARE
  invalid_count INTEGER;
BEGIN
  SELECT COUNT(*) INTO invalid_count
  FROM figures
  WHERE NOT (
    jsonb_typeof(images) = 'array' AND
    jsonb_array_length(images) > 0
  );

  IF invalid_count > 0 THEN
    RAISE EXCEPTION 'Migration failed: % figures have invalid image structure', invalid_count;
  END IF;

  RAISE NOTICE 'Migration successful: Enhanced image fallback support added to all figures';
END $$;
