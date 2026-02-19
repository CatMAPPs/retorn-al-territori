-- HistoGuesser Initial Schema Migration
-- Creates core tables: figures, users, player_stats, daily_scores

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- FIGURES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS figures (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  aliases TEXT[] DEFAULT '{}',
  images JSONB NOT NULL,
  birth_year INTEGER NOT NULL,
  death_year INTEGER,
  active_year INTEGER,
  hometown TEXT NOT NULL,
  lat DOUBLE PRECISION NOT NULL CHECK (lat >= -90 AND lat <= 90),
  lon DOUBLE PRECISION NOT NULL CHECK (lon >= -180 AND lon <= 180),
  description TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for figures table
CREATE INDEX idx_figures_tags ON figures USING GIN(tags);
CREATE INDEX idx_figures_birth_year ON figures(birth_year);
CREATE INDEX idx_figures_created_at ON figures(created_at);

-- =====================================================
-- USERS TABLE (synced with Supabase Auth)
-- =====================================================
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for users table
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);

-- =====================================================
-- PLAYER STATS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS player_stats (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  total_games INTEGER DEFAULT 0 CHECK (total_games >= 0),
  best_score INTEGER DEFAULT 0 CHECK (best_score >= 0 AND best_score <= 25000),
  daily_streak INTEGER DEFAULT 0 CHECK (daily_streak >= 0),
  last_daily_date DATE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for player_stats
CREATE INDEX idx_player_stats_best_score ON player_stats(best_score DESC);
CREATE INDEX idx_player_stats_daily_streak ON player_stats(daily_streak DESC);

-- =====================================================
-- DAILY SCORES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS daily_scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  challenge_date DATE NOT NULL,
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 25000),
  completed_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, challenge_date)
);

-- Create indexes for daily_scores table
CREATE INDEX idx_daily_scores_date_score ON daily_scores(challenge_date, score DESC, completed_at ASC);
CREATE INDEX idx_daily_scores_user_date ON daily_scores(user_id, challenge_date);

-- =====================================================
-- FUNCTIONS FOR AUTO-UPDATING TIMESTAMPS
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_figures_updated_at
  BEFORE UPDATE ON figures
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_player_stats_updated_at
  BEFORE UPDATE ON player_stats
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- COMMENTS FOR DOCUMENTATION
-- =====================================================
COMMENT ON TABLE figures IS 'Historical figures database with images, birth location, and metadata';
COMMENT ON TABLE users IS 'User profiles synced with Supabase Auth';
COMMENT ON TABLE player_stats IS 'Player statistics including games played, best score, and streaks';
COMMENT ON TABLE daily_scores IS 'Daily challenge scores with unique constraint per user per day';

