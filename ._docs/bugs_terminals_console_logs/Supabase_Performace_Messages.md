[
  {
    "name": "unindexed_foreign_keys",
    "title": "Unindexed foreign keys",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Identifies foreign key constraints without a covering index, which can impact database performance.",
    "detail": "Table \\`public.lobby_submissions\\` has a foreign key \\`lobby_submissions_figure_id_fkey\\` without a covering index. This can lead to suboptimal query performance.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0001_unindexed_foreign_keys",
    "metadata": {
      "name": "lobby_submissions",
      "type": "table",
      "schema": "public",
      "fkey_name": "lobby_submissions_figure_id_fkey",
      "fkey_columns": [
        5
      ]
    },
    "cache_key": "unindexed_foreign_keys_public_lobby_submissions_lobby_submissions_figure_id_fkey"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_lobby_players_lobby_id\\` on table \\`public.lobby_players\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "lobby_players",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_lobby_players_idx_lobby_players_lobby_id"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_daily_challenges_date\\` on table \\`public.daily_challenges\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "daily_challenges",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_daily_challenges_idx_daily_challenges_date"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_lobby_players_user_id\\` on table \\`public.lobby_players\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "lobby_players",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_lobby_players_idx_lobby_players_user_id"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_lobby_submissions_lobby_round\\` on table \\`public.lobby_submissions\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "lobby_submissions",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_lobby_submissions_idx_lobby_submissions_lobby_round"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_lobby_submissions_user_id\\` on table \\`public.lobby_submissions\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "lobby_submissions",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_lobby_submissions_idx_lobby_submissions_user_id"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_daily_scores_challenge_date\\` on table \\`public.daily_scores\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "daily_scores",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_daily_scores_idx_daily_scores_challenge_date"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_daily_scores_score\\` on table \\`public.daily_scores\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "daily_scores",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_daily_scores_idx_daily_scores_score"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_daily_scores_completed_at\\` on table \\`public.daily_scores\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "daily_scores",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_daily_scores_idx_daily_scores_completed_at"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_figures_tags\\` on table \\`public.figures\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "figures",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_figures_idx_figures_tags"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_figures_birth_year\\` on table \\`public.figures\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "figures",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_figures_idx_figures_birth_year"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_figures_created_at\\` on table \\`public.figures\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "figures",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_figures_idx_figures_created_at"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_users_email\\` on table \\`public.users\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "users",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_users_idx_users_email"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_users_username\\` on table \\`public.users\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "users",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_users_idx_users_username"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_player_stats_best_score\\` on table \\`public.player_stats\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "player_stats",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_player_stats_idx_player_stats_best_score"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_player_stats_daily_streak\\` on table \\`public.player_stats\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "player_stats",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_player_stats_idx_player_stats_daily_streak"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_daily_scores_date_score\\` on table \\`public.daily_scores\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "daily_scores",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_daily_scores_idx_daily_scores_date_score"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_daily_scores_user_date\\` on table \\`public.daily_scores\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "daily_scores",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_daily_scores_idx_daily_scores_user_date"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_lobbies_room_code\\` on table \\`public.lobbies\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "lobbies",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_lobbies_idx_lobbies_room_code"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_lobbies_host_id\\` on table \\`public.lobbies\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "lobbies",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_lobbies_idx_lobbies_host_id"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_lobbies_status\\` on table \\`public.lobbies\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "lobbies",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_lobbies_idx_lobbies_status"
  },
  {
    "name": "unused_index",
    "title": "Unused Index",
    "level": "INFO",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if an index has never been used and may be a candidate for removal.",
    "detail": "Index \\`idx_lobbies_expires_at\\` on table \\`public.lobbies\\` has not been used",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0005_unused_index",
    "metadata": {
      "name": "lobbies",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "unused_index_public_lobbies_idx_lobbies_expires_at"
  }
]

-----------------------------------------------

[
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.users\\` has a row level security policy \\`Users can update their own profile\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "users",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_users_Users can update their own profile"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.users\\` has a row level security policy \\`Users can insert their own profile\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "users",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_users_Users can insert their own profile"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.daily_scores\\` has a row level security policy \\`Users can insert their own daily scores\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "daily_scores",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_daily_scores_Users can insert their own daily scores"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.lobbies\\` has a row level security policy \\`Users can create lobbies\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "lobbies",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_lobbies_Users can create lobbies"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.lobbies\\` has a row level security policy \\`Host can update their lobby\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "lobbies",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_lobbies_Host can update their lobby"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.lobbies\\` has a row level security policy \\`Host can delete their lobby\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "lobbies",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_lobbies_Host can delete their lobby"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.lobby_players\\` has a row level security policy \\`Users can join lobbies\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "lobby_players",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_lobby_players_Users can join lobbies"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.lobby_players\\` has a row level security policy \\`Users can update their own lobby player record\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "lobby_players",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_lobby_players_Users can update their own lobby player record"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.lobby_players\\` has a row level security policy \\`Users can leave lobbies\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "lobby_players",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_lobby_players_Users can leave lobbies"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.lobby_submissions\\` has a row level security policy \\`Lobby submissions are viewable by lobby participants\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "lobby_submissions",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_lobby_submissions_Lobby submissions are viewable by lobby participants"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.lobby_submissions\\` has a row level security policy \\`Users can insert their own submissions\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "lobby_submissions",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_lobby_submissions_Users can insert their own submissions"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.player_stats\\` has a row level security policy \\`Users can update their own stats\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "player_stats",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_player_stats_Users can update their own stats"
  },
  {
    "name": "auth_rls_initplan",
    "title": "Auth RLS Initialization Plan",
    "level": "WARN",
    "facing": "EXTERNAL",
    "categories": [
      "PERFORMANCE"
    ],
    "description": "Detects if calls to \\`current_setting()\\` and \\`auth.<function>()\\` in RLS policies are being unnecessarily re-evaluated for each row",
    "detail": "Table \\`public.player_stats\\` has a row level security policy \\`Users can insert their own stats\\` that re-evaluates current_setting() or auth.<function>() for each row. This produces suboptimal query performance at scale. Resolve the issue by replacing \\`auth.<function>()\\` with \\`(select auth.<function>())\\`. See [docs](https://supabase.com/docs/guides/database/postgres/row-level-security#call-functions-with-select) for more info.",
    "remediation": "https://supabase.com/docs/guides/database/database-linter?lint=0003_auth_rls_initplan",
    "metadata": {
      "name": "player_stats",
      "type": "table",
      "schema": "public"
    },
    "cache_key": "auth_rls_init_plan_public_player_stats_Users can insert their own stats"
  }
]