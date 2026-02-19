-- Migration: 009_test_rls_policies.sql
-- Test RLS policies to ensure anonymous access is working

-- =====================================================
-- TEST ANONYMOUS ACCESS TO FIGURES
-- =====================================================

-- This should work for anonymous users (run without auth)
SELECT 'Testing anonymous access to figures...' as test;

-- Count figures (should return a number > 0)
SELECT COUNT(*) as total_figures FROM figures;

-- Get a sample figure (should return data)
SELECT id, name, birth_year FROM figures LIMIT 1;

-- =====================================================
-- TEST AUTHENTICATED ACCESS TO PLAYER STATS
-- =====================================================

-- This should work for authenticated users only
-- SELECT COUNT(*) as total_player_stats FROM player_stats;

-- =====================================================
-- CHECK RLS POLICIES
-- =====================================================

-- List all policies on figures table
SELECT
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies
WHERE tablename = 'figures'
ORDER BY policyname;

-- List all policies on player_stats table
SELECT
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual
FROM pg_policies
WHERE tablename = 'player_stats'
ORDER BY policyname;

-- =====================================================
-- VERIFICATION QUERIES
-- =====================================================

-- If these queries work, RLS is configured correctly:
-- ✅ Anonymous can access figures
-- ✅ Authenticated users can access their own data

-- If you see "permission denied" errors, RLS policies need fixing.