-- Allow anonymous users to read figures for Free Play mode
-- This enables Free Play to work without authentication as specified in the PRD

-- =====================================================
-- FIGURES TABLE: ANONYMOUS READ ACCESS
-- =====================================================

-- Allow anonymous users to read figures (for Free Play mode)
CREATE POLICY "Figures are viewable by anonymous users"
  ON figures FOR SELECT
  TO anon
  USING (true);

-- Update comment for documentation
COMMENT ON POLICY "Figures are viewable by anonymous users" ON figures IS
  'Anonymous users can read historical figures data for Free Play mode';
