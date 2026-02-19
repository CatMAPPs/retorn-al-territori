-- Migration: 011_fix_get_or_create_daily_challenge.sql
-- Description: Fix ambiguous column reference in get_or_create_daily_challenge function
-- Date: November 6, 2025

-- =====================================================
-- FIX AMBIGUOUS COLUMN REFERENCE IN get_or_create_daily_challenge
-- =====================================================

-- The issue is that challenge_record.challenge_date conflicts with the target_date parameter
-- We need to be explicit about which challenge_date we're referencing

CREATE OR REPLACE FUNCTION get_or_create_daily_challenge(target_date DATE DEFAULT CURRENT_DATE)
RETURNS TABLE (
  challenge_date DATE,
  figure_ids UUID[]
) AS $$
DECLARE
  challenge_record daily_challenges%ROWTYPE;
  selected_figure_ids UUID[];
  figures_count INTEGER;
BEGIN
  -- Check if challenge already exists for this date
  SELECT * INTO challenge_record
  FROM daily_challenges dc
  WHERE dc.challenge_date = target_date;

  IF FOUND THEN
    -- Return existing challenge (use table alias to avoid ambiguity)
    RETURN QUERY SELECT dc.challenge_date, dc.figure_ids
                 FROM daily_challenges dc
                 WHERE dc.challenge_date = target_date;
    RETURN;
  END IF;

  -- Count available figures
  SELECT COUNT(*) INTO figures_count FROM figures;

  -- Ensure we have enough figures (at least 10)
  IF figures_count < 10 THEN
    RAISE EXCEPTION 'Not enough figures in database. Need at least 10, found %', figures_count;
  END IF;

  -- Use date as seed for deterministic selection
  -- Convert date to integer and use it to select figures
  WITH seeded_figures AS (
    SELECT
      id,
      ROW_NUMBER() OVER (
        ORDER BY (
          -- Create deterministic ordering based on date
          -- Convert first 16 chars of md5 hash to a bigint for sorting
          ('x' || substring(md5(target_date::text || '-' || id::text), 1, 16))::bit(64)::bigint
        )
      ) as rn
    FROM figures
  )
  SELECT array_agg(id ORDER BY rn) INTO selected_figure_ids
  FROM seeded_figures
  WHERE rn <= 10;

  -- Insert new challenge
  INSERT INTO daily_challenges (challenge_date, figure_ids)
  VALUES (target_date, selected_figure_ids);

  -- Return the new challenge
  RETURN QUERY SELECT target_date, selected_figure_ids;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- VERIFICATION
-- =====================================================

-- Test that the function works without ambiguous column errors
-- This should return a challenge for today
SELECT * FROM get_or_create_daily_challenge(CURRENT_DATE);

-- Log completion
SELECT 'Migration 011: Fixed ambiguous column reference in get_or_create_daily_challenge function' as migration_complete;
