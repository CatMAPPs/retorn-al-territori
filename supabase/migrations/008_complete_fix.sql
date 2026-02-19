-- Migration: 008_complete_fix.sql
-- Description: Complete fix for all RLS and access issues
-- Date: November 4, 2025

-- =====================================================
-- ENSURE ANONYMOUS ACCESS TO FIGURES
-- =====================================================

-- Drop any existing anonymous policy to avoid conflicts
DROP POLICY IF EXISTS "Figures are viewable by anonymous users" ON figures;

-- Create anonymous access policy for figures
CREATE POLICY "Figures are viewable by anonymous users"
  ON figures FOR SELECT
  TO anon
  USING (true);

-- =====================================================
-- ENSURE ANONYMOUS ACCESS TO DAILY CHALLENGES
-- =====================================================

-- Drop any existing anonymous policy to avoid conflicts
DROP POLICY IF EXISTS "Daily challenges are viewable by anonymous users" ON daily_challenges;

-- Create anonymous access policy for daily challenges
CREATE POLICY "Daily challenges are viewable by anonymous users"
  ON daily_challenges FOR SELECT
  TO anon
  USING (true);

-- =====================================================
-- FIX PLAYER STATS RLS FOR AUTH USERS ONLY
-- =====================================================

-- Ensure player_stats has proper policies for authenticated users
DROP POLICY IF EXISTS "Player stats are viewable by authenticated users" ON player_stats;
DROP POLICY IF EXISTS "Users can update their own stats" ON player_stats;
DROP POLICY IF EXISTS "Users can insert their own stats" ON player_stats;

-- Recreate policies
CREATE POLICY "Player stats are viewable by authenticated users"
  ON player_stats FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can update their own stats"
  ON player_stats FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can insert their own stats"
  ON player_stats FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- VERIFY ALL TABLES HAVE PROPER RLS
-- =====================================================

-- Ensure all tables have RLS enabled
ALTER TABLE figures ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_challenges ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- TEST THE POLICIES
-- =====================================================

-- This should work for anonymous users (no auth context)
-- SELECT COUNT(*) FROM figures;

-- This should work for authenticated users only
-- SELECT COUNT(*) FROM player_stats;