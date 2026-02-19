-- Migration: 007_fix_anonymous_figure_access.sql
-- Description: Ensure anonymous users can access figures for Free Play mode
-- Date: November 4, 2025

-- Check if anonymous figures policy exists, if not create it
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'figures'
        AND policyname = 'Figures are viewable by anonymous users'
    ) THEN
        CREATE POLICY "Figures are viewable by anonymous users"
          ON figures FOR SELECT
          TO anon
          USING (true);
    END IF;
END $$;

-- Also ensure daily_challenges is accessible to anonymous users (for guest play)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_policies
        WHERE tablename = 'daily_challenges'
        AND policyname = 'Daily challenges are viewable by anonymous users'
    ) THEN
        CREATE POLICY "Daily challenges are viewable by anonymous users"
          ON daily_challenges FOR SELECT
          TO anon
          USING (true);
    END IF;
END $$;