-- =====================================================
-- Migration 012: Figure Image Storage + Research Stage
-- =====================================================
-- Creates Supabase Storage bucket for self-hosted figure images
-- and adds research_stage tracking column to figures table.

-- =====================================================
-- 1. CREATE STORAGE BUCKET
-- =====================================================
-- Create a public bucket for figure images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'figure-images',
  'figure-images',
  true,
  5242880, -- 5MB limit
  ARRAY['image/webp', 'image/jpeg', 'image/png', 'image/gif', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- 2. RLS POLICIES FOR STORAGE
-- =====================================================
-- Public read access for all users (images are public game assets)
CREATE POLICY "Public read access for figure images"
ON storage.objects FOR SELECT
USING (bucket_id = 'figure-images');

-- Service role only write access (scripts use service role key)
CREATE POLICY "Service role insert for figure images"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'figure-images'
  AND auth.role() = 'service_role'
);

CREATE POLICY "Service role update for figure images"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'figure-images'
  AND auth.role() = 'service_role'
);

CREATE POLICY "Service role delete for figure images"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'figure-images'
  AND auth.role() = 'service_role'
);

-- =====================================================
-- 3. ADD RESEARCH STAGE COLUMN
-- =====================================================
-- Tracks the provenance/quality stage of each figure
-- Values: 'seed' (original 30), 'ai_generated', 'validated', 'reviewed'
ALTER TABLE figures
ADD COLUMN IF NOT EXISTS research_stage TEXT DEFAULT 'seed';

-- Add check constraint for valid values
ALTER TABLE figures
ADD CONSTRAINT figures_research_stage_check
CHECK (research_stage IN ('seed', 'ai_generated', 'validated', 'reviewed'));

-- =====================================================
-- 4. BACKFILL EXISTING FIGURES
-- =====================================================
-- All existing figures are original seed data
UPDATE figures SET research_stage = 'seed' WHERE research_stage IS NULL;

-- =====================================================
-- 5. CREATE INDEX
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_figures_research_stage ON figures(research_stage);
