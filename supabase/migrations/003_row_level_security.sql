-- HistoGuesser Row Level Security Policies
-- Implements security policies for all tables

-- =====================================================
-- ENABLE RLS ON ALL TABLES
-- =====================================================
ALTER TABLE figures ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE lobbies ENABLE ROW LEVEL SECURITY;
ALTER TABLE lobby_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE lobby_submissions ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- FIGURES TABLE POLICIES (Public Read)
-- =====================================================
-- Allow all authenticated users to read figures
CREATE POLICY "Figures are viewable by authenticated users"
  ON figures FOR SELECT
  TO authenticated
  USING (true);

-- Allow service role to insert/update/delete figures
CREATE POLICY "Figures are manageable by service role"
  ON figures FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

-- =====================================================
-- USERS TABLE POLICIES
-- =====================================================
-- Users can read all user profiles
CREATE POLICY "User profiles are viewable by authenticated users"
  ON users FOR SELECT
  TO authenticated
  USING (true);

-- Users can only update their own profile
CREATE POLICY "Users can update their own profile"
  ON users FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Users can insert their own profile (during signup)
CREATE POLICY "Users can insert their own profile"
  ON users FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- =====================================================
-- PLAYER STATS TABLE POLICIES
-- =====================================================
-- Users can read all player stats (for leaderboards)
CREATE POLICY "Player stats are viewable by authenticated users"
  ON player_stats FOR SELECT
  TO authenticated
  USING (true);

-- Users can only update their own stats
CREATE POLICY "Users can update their own stats"
  ON player_stats FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can insert their own stats
CREATE POLICY "Users can insert their own stats"
  ON player_stats FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- DAILY SCORES TABLE POLICIES
-- =====================================================
-- Users can read all daily scores (for leaderboards)
CREATE POLICY "Daily scores are viewable by authenticated users"
  ON daily_scores FOR SELECT
  TO authenticated
  USING (true);

-- Users can only insert their own scores
CREATE POLICY "Users can insert their own daily scores"
  ON daily_scores FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Prevent score updates (immutable after submission)
CREATE POLICY "Daily scores cannot be updated"
  ON daily_scores FOR UPDATE
  TO authenticated
  USING (false);

-- =====================================================
-- LOBBIES TABLE POLICIES
-- =====================================================
-- All authenticated users can view lobbies
CREATE POLICY "Lobbies are viewable by authenticated users"
  ON lobbies FOR SELECT
  TO authenticated
  USING (true);

-- Authenticated users can create lobbies
CREATE POLICY "Users can create lobbies"
  ON lobbies FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = host_id);

-- Only host can update lobby
CREATE POLICY "Host can update their lobby"
  ON lobbies FOR UPDATE
  TO authenticated
  USING (auth.uid() = host_id)
  WITH CHECK (auth.uid() = host_id);

-- Only host can delete lobby
CREATE POLICY "Host can delete their lobby"
  ON lobbies FOR DELETE
  TO authenticated
  USING (auth.uid() = host_id);

-- =====================================================
-- LOBBY PLAYERS TABLE POLICIES
-- =====================================================
-- All authenticated users can view lobby players
CREATE POLICY "Lobby players are viewable by authenticated users"
  ON lobby_players FOR SELECT
  TO authenticated
  USING (true);

-- Users can join a lobby (insert themselves)
CREATE POLICY "Users can join lobbies"
  ON lobby_players FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own lobby player record
CREATE POLICY "Users can update their own lobby player record"
  ON lobby_players FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Users can leave a lobby (delete themselves)
CREATE POLICY "Users can leave lobbies"
  ON lobby_players FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- =====================================================
-- LOBBY SUBMISSIONS TABLE POLICIES
-- =====================================================
-- All players in a lobby can view submissions
CREATE POLICY "Lobby submissions are viewable by lobby participants"
  ON lobby_submissions FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM lobby_players
      WHERE lobby_players.lobby_id = lobby_submissions.lobby_id
      AND lobby_players.user_id = auth.uid()
    )
  );

-- Users can only insert their own submissions
CREATE POLICY "Users can insert their own submissions"
  ON lobby_submissions FOR INSERT
  TO authenticated
  WITH CHECK (
    auth.uid() = user_id
    AND EXISTS (
      SELECT 1 FROM lobby_players
      WHERE lobby_players.lobby_id = lobby_submissions.lobby_id
      AND lobby_players.user_id = auth.uid()
    )
  );

-- Submissions cannot be updated or deleted
CREATE POLICY "Submissions are immutable"
  ON lobby_submissions FOR UPDATE
  TO authenticated
  USING (false);

CREATE POLICY "Submissions cannot be deleted"
  ON lobby_submissions FOR DELETE
  TO authenticated
  USING (false);

-- =====================================================
-- COMMENTS FOR DOCUMENTATION
-- =====================================================
COMMENT ON POLICY "Figures are viewable by authenticated users" ON figures IS
  'All authenticated users can read historical figures data';

COMMENT ON POLICY "Users can update their own profile" ON users IS
  'Users can only modify their own profile information';

COMMENT ON POLICY "Daily scores cannot be updated" ON daily_scores IS
  'Daily challenge scores are immutable once submitted';

COMMENT ON POLICY "Host can update their lobby" ON lobbies IS
  'Only the lobby host can modify lobby settings and status';

COMMENT ON POLICY "Submissions are immutable" ON lobby_submissions IS
  'Player submissions cannot be changed after submission to prevent cheating';

