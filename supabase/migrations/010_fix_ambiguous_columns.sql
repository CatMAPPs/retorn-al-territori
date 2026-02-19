-- Migration: 010_fix_ambiguous_columns.sql
-- Description: Fix ambiguous column references in calculate_streak function
-- Date: November 5, 2025

-- =====================================================
-- FIX AMBIGUOUS COLUMN REFERENCES IN CALCULATE_STREAK
-- =====================================================

-- Recreate the calculate_streak function with proper table aliases
-- to fix "column reference 'challenge_date' is ambiguous" error

CREATE OR REPLACE FUNCTION calculate_streak(user_uuid UUID, target_date DATE DEFAULT CURRENT_DATE)
RETURNS INTEGER AS $$
DECLARE
  current_date DATE := target_date;
  streak_days INTEGER := 0;
  check_date DATE;
  last_daily_date DATE;
BEGIN
  -- Get the last daily challenge date for this user
  SELECT MAX(ds.challenge_date) INTO last_daily_date
  FROM daily_scores ds
  WHERE ds.user_id = user_uuid;

  -- If no games played, streak is 0
  IF last_daily_date IS NULL THEN
    RETURN 0;
  END IF;

  -- If last game was more than 1 day ago, streak is 0
  IF last_daily_date < target_date - INTERVAL '1 day' THEN
    RETURN 0;
  END IF;

  -- Count consecutive days backward from target_date
  WHILE streak_days < 365 LOOP  -- Safety limit
    check_date := target_date - (streak_days || ' days')::INTERVAL;

    -- Check if user has a score for this date
    IF EXISTS (
      SELECT 1 FROM daily_scores ds2
      WHERE ds2.user_id = user_uuid AND ds2.challenge_date = check_date
    ) THEN
      streak_days := streak_days + 1;
    ELSE
      EXIT;
    END IF;
  END LOOP;

  RETURN streak_days;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- =====================================================
-- VERIFICATION
-- =====================================================

-- Test that the function works without ambiguous column errors
-- This should return 0 for a non-existent user
SELECT calculate_streak('00000000-0000-0000-0000-000000000000'::UUID, CURRENT_DATE) as test_streak;

-- Log completion
SELECT 'Migration 010: Fixed ambiguous column references in calculate_streak function' as migration_complete;
