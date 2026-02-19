-- Migration: 006_daily_challenge_tables.sql
-- Description: Add daily challenge functionality and enhance existing tables
-- Date: November 4, 2025

-- Add missing columns to existing daily_scores table
ALTER TABLE daily_scores ADD COLUMN IF NOT EXISTS created_at TIMESTAMPTZ DEFAULT NOW();
ALTER TABLE daily_scores ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Add additional indexes for better leaderboard performance
CREATE INDEX IF NOT EXISTS idx_daily_scores_challenge_date ON daily_scores (challenge_date);
CREATE INDEX IF NOT EXISTS idx_daily_scores_score ON daily_scores (score DESC);
CREATE INDEX IF NOT EXISTS idx_daily_scores_completed_at ON daily_scores (completed_at ASC);
-- Note: idx_daily_scores_user_date already exists from initial migration

-- Create daily_challenges table to cache the figure selection for each day
CREATE TABLE daily_challenges (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  challenge_date DATE NOT NULL UNIQUE,
  figure_ids UUID[] NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create index on challenge_date for fast lookups
CREATE INDEX idx_daily_challenges_date ON daily_challenges (challenge_date);

-- Enable Row Level Security for new table
ALTER TABLE daily_challenges ENABLE ROW LEVEL SECURITY;

-- RLS Policies for daily_challenges (new table)
-- Allow authenticated users to view daily challenges
CREATE POLICY "Daily challenges are viewable by authenticated users"
  ON daily_challenges FOR SELECT
  TO authenticated
  USING (true);

-- Allow anonymous users to view daily challenges (for guest play)
CREATE POLICY "Daily challenges are viewable by anonymous users"
  ON daily_challenges FOR SELECT
  TO anon
  USING (true);

-- Function to get or create daily challenge for a given date
-- Uses deterministic seed based on date to ensure same figures for all players
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
  FROM daily_challenges
  WHERE challenge_date = target_date;

  IF FOUND THEN
    -- Return existing challenge
    RETURN QUERY SELECT challenge_record.challenge_date, challenge_record.figure_ids;
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
          substring(md5(target_date::text || '-' || id::text), 1, 8)::bit(32)::int
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

-- Create updated_at trigger for daily_scores (if it doesn't exist)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_trigger
        WHERE tgname = 'update_daily_scores_updated_at'
    ) THEN
        CREATE TRIGGER update_daily_scores_updated_at
            BEFORE UPDATE ON daily_scores
            FOR EACH ROW
            EXECUTE FUNCTION update_updated_at_column();
    END IF;
END $$;

-- Function to get user's daily challenge completion status
CREATE OR REPLACE FUNCTION get_daily_challenge_status(user_uuid UUID, target_date DATE DEFAULT CURRENT_DATE)
RETURNS TABLE (
  has_completed BOOLEAN,
  score INTEGER,
  completed_at TIMESTAMPTZ,
  current_streak INTEGER,
  best_score INTEGER
) AS $$
DECLARE
  completion_record RECORD;
  streak_count INTEGER;
  best_score_val INTEGER;
BEGIN
  -- Check if user completed today's challenge
  SELECT ds.score, ds.completed_at INTO completion_record
  FROM daily_scores ds
  WHERE ds.user_id = user_uuid AND ds.challenge_date = target_date;

  -- Calculate current streak
  SELECT calculate_streak(user_uuid, target_date) INTO streak_count;

  -- Get best daily score
  SELECT COALESCE(MAX(score), 0) INTO best_score_val
  FROM daily_scores
  WHERE user_id = user_uuid;

  -- Return results
  RETURN QUERY SELECT
    (completion_record.score IS NOT NULL) as has_completed,
    COALESCE(completion_record.score, 0) as score,
    completion_record.completed_at,
    COALESCE(streak_count, 0) as current_streak,
    best_score_val as best_score;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to calculate streak (consecutive days played)
-- Resets at 12am Eastern Time (EST/EDT)
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
      SELECT 1 FROM daily_scores ds
      WHERE ds.user_id = user_uuid AND ds.challenge_date = check_date
    ) THEN
      streak_days := streak_days + 1;
    ELSE
      EXIT;
    END IF;
  END LOOP;

  RETURN streak_days;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to submit daily challenge score with validation
CREATE OR REPLACE FUNCTION submit_daily_score(
  user_uuid UUID,
  target_date DATE,
  submitted_score INTEGER
)
RETURNS TABLE (
  success BOOLEAN,
  message TEXT,
  final_score INTEGER
) AS $$
DECLARE
  existing_score INTEGER;
  validated_score INTEGER;
  max_possible_score INTEGER := 25000; -- 10 rounds × 2500 max per round
BEGIN
  -- Validate score range
  IF submitted_score < 0 OR submitted_score > max_possible_score THEN
    RETURN QUERY SELECT false, 'Score must be between 0 and ' || max_possible_score, 0;
    RETURN;
  END IF;

  -- Check if user already submitted for this date
  SELECT score INTO existing_score
  FROM daily_scores
  WHERE user_id = user_uuid AND challenge_date = target_date;

  IF FOUND THEN
    RETURN QUERY SELECT false, 'Daily challenge already completed for ' || target_date, existing_score;
    RETURN;
  END IF;

  -- Insert the score
  INSERT INTO daily_scores (user_id, challenge_date, score)
  VALUES (user_uuid, target_date, submitted_score);

  -- Update player stats (streak, best score, etc.)
  UPDATE player_stats
  SET
    total_games = total_games + 1,
    best_score = GREATEST(best_score, submitted_score),
    daily_streak = calculate_streak(user_uuid, target_date),
    last_daily_date = target_date,
    updated_at = NOW()
  WHERE user_id = user_uuid;

  -- If no player_stats record exists, create one
  INSERT INTO player_stats (user_id, total_games, best_score, daily_streak, last_daily_date)
  SELECT user_uuid, 1, submitted_score, 1, target_date
  WHERE NOT EXISTS (SELECT 1 FROM player_stats WHERE user_id = user_uuid);

  RETURN QUERY SELECT true, 'Score submitted successfully', submitted_score;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create updated_at trigger for daily_scores
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;
