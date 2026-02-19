-- HistoGuesser Multiplayer Tables Migration
-- Creates tables for multiplayer lobbies, players, and submissions

-- =====================================================
-- LOBBIES TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS lobbies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  room_code TEXT UNIQUE NOT NULL CHECK (length(room_code) = 6),
  host_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'waiting' CHECK (status IN ('waiting', 'in_progress', 'finished')),
  current_round INTEGER DEFAULT 0 CHECK (current_round >= 0 AND current_round <= 10),
  figure_ids UUID[] NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ NOT NULL
);

-- Create indexes for lobbies table
CREATE INDEX idx_lobbies_room_code ON lobbies(room_code);
CREATE INDEX idx_lobbies_host_id ON lobbies(host_id);
CREATE INDEX idx_lobbies_status ON lobbies(status);
CREATE INDEX idx_lobbies_expires_at ON lobbies(expires_at);

-- =====================================================
-- LOBBY PLAYERS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS lobby_players (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lobby_id UUID NOT NULL REFERENCES lobbies(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  score INTEGER DEFAULT 0 CHECK (score >= 0 AND score <= 25000),
  ready BOOLEAN DEFAULT FALSE,
  connected BOOLEAN DEFAULT TRUE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(lobby_id, user_id)
);

-- Create indexes for lobby_players table
CREATE INDEX idx_lobby_players_lobby_id ON lobby_players(lobby_id);
CREATE INDEX idx_lobby_players_user_id ON lobby_players(user_id);

-- =====================================================
-- LOBBY SUBMISSIONS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS lobby_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  lobby_id UUID NOT NULL REFERENCES lobbies(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  round_number INTEGER NOT NULL CHECK (round_number >= 1 AND round_number <= 10),
  figure_id UUID NOT NULL REFERENCES figures(id),
  guessed_name TEXT NOT NULL,
  guessed_lat DOUBLE PRECISION NOT NULL CHECK (guessed_lat >= -90 AND guessed_lat <= 90),
  guessed_lon DOUBLE PRECISION NOT NULL CHECK (guessed_lon >= -180 AND guessed_lon <= 180),
  guessed_year INTEGER NOT NULL,
  submission_time DOUBLE PRECISION NOT NULL CHECK (submission_time >= 0),
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 2500),
  submitted_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(lobby_id, user_id, round_number)
);

-- Create indexes for lobby_submissions table
CREATE INDEX idx_lobby_submissions_lobby_round ON lobby_submissions(lobby_id, round_number);
CREATE INDEX idx_lobby_submissions_user_id ON lobby_submissions(user_id);

-- =====================================================
-- FUNCTION TO GENERATE RANDOM ROOM CODE
-- =====================================================
CREATE OR REPLACE FUNCTION generate_room_code()
RETURNS TEXT AS $$
DECLARE
  chars TEXT := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; -- Exclude ambiguous chars
  result TEXT := '';
  i INTEGER;
BEGIN
  FOR i IN 1..6 LOOP
    result := result || substr(chars, floor(random() * length(chars) + 1)::int, 1);
  END LOOP;
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- FUNCTION TO AUTO-DELETE EXPIRED LOBBIES
-- =====================================================
CREATE OR REPLACE FUNCTION delete_expired_lobbies()
RETURNS void AS $$
BEGIN
  DELETE FROM lobbies WHERE expires_at < NOW();
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- COMMENTS FOR DOCUMENTATION
-- =====================================================
COMMENT ON TABLE lobbies IS 'Multiplayer game lobbies with room codes and game state';
COMMENT ON TABLE lobby_players IS 'Players in multiplayer lobbies with scores and connection status';
COMMENT ON TABLE lobby_submissions IS 'Player submissions for each round in multiplayer games';
COMMENT ON FUNCTION generate_room_code() IS 'Generates a random 6-character room code';
COMMENT ON FUNCTION delete_expired_lobbies() IS 'Deletes lobbies that have expired (call via cron)';

