# **HistoGuesser - Comprehensive Development Progress Report**

**Last Updated:** February 13, 2026
**Current Branch:** `feature/more-figures-and-game-modes`
**Current Status:** MVP Functional (with significant known issues) - Not production-ready

---

## **Executive Summary**

**HistoGuesser** is a web-based geography and history guessing game built with Vue 3 + TypeScript + Supabase. Players identify historical figures by guessing their **name**, **birth location**, and **birth year** through an interactive map, timeline slider, and text input.

**What Works:**
- Free Play Mode: Full 10-round single-player games (no auth required)
- Daily Challenge: Competitive daily games with leaderboards and streaks (auth required)
- Multiplayer (2-player): Real-time lobbies with synchronized gameplay (auth required)
- User Authentication: Registration, login, profile management
- Film Noir themed UI across all components

**What Doesn't Work or Is Incomplete:**
- LobbyView.vue is a stub ("Coming Soon")
- Multiplayer UI has debug panels permanently visible
- No toast rendering system (toasts are managed in state but never displayed)
- 3+ player multiplayer is untested and likely broken
- No test suite of any kind

---

## **Technical Architecture**

### **Frontend Stack**
```
Vue 3.5.22           - Progressive framework (Composition API)
TypeScript 5.6.3     - Type safety (heavily suppressed in Supabase layer)
Vite 7.1.12          - Build tool & dev server
TailwindCSS 3.4.0    - Utility-first styling
Zustand 5.0.8        - State management (auth, game, UI stores)
Pinia 3.0.4          - State management (lobby/multiplayer store)
Leaflet.js 1.9.4     - Interactive maps
Day.js 1.11.19       - Date/time utilities
vue-router 4.6.3     - Client-side routing
```

### **Backend Infrastructure**
```
Supabase 2.78.0       - PostgreSQL database + Auth + Realtime
Vercel                - Frontend hosting & deployment (configured)
```

### **Notable DevDependencies**
```
react 18.3.1          - Listed as devDependency (legacy Zustand requirement, unused)
tsx 4.7.1             - TypeScript execution for scripts
dotenv 17.2.3         - Environment variable loading for scripts
```

---

## **Database Schema**

### **Core Tables**
- **figures** - 130+ historical figures with images, coordinates, birth years, aliases, tags
- **users** - User profiles linked to Supabase auth.users
- **player_stats** - Aggregated stats per user (games played, best score, streak)
- **daily_scores** - One-per-day challenge scores with leaderboard support

### **Multiplayer Tables**
- **lobbies** - Game rooms with room codes, host, status, figure selection
- **lobby_players** - Players in each lobby with ready state and scores
- **lobby_submissions** - Per-round guess submissions with scoring data

### **Migration Files (14 total, with naming conflicts)**
```
001_initial_schema.sql
002_multiplayer_tables.sql
003_row_level_security.sql
004_seed_figures.sql (original 30 figures)
005_anonymous_freeplay_access.sql
006_daily_challenge_tables.sql
007_enhance_image_fallback_support.sql    ← DUPLICATE NUMBER
007_fix_anonymous_figure_access.sql       ← DUPLICATE NUMBER
008_add_100_more_figures.sql              ← DUPLICATE NUMBER
008_complete_fix.sql                      ← DUPLICATE NUMBER
009_test_rls_policies.sql
010_fix_ambiguous_columns.sql
011_fix_get_or_create_daily_challenge.sql
```

### **RLS Policies**
Row Level Security is enabled on all tables with the following strategy:
- **figures**: Read access for authenticated users; anonymous access added via migration 005/007
- **users**: Read all, insert/update own only
- **player_stats**: Read all, insert/update own only
- **daily_scores**: Read all, insert own only, updates blocked (immutable)
- **lobbies**: Read all, create own, update/delete host-only
- **lobby_players**: Read all, insert/update/delete own only
- **lobby_submissions**: Read by lobby participants, insert own only, update/delete blocked

---

## **State Management Architecture**

### **Hybrid Approach (Zustand + Pinia)**
The project uses two different state management libraries:

| Store | Library | Purpose |
|-------|---------|---------|
| `authStore` | Zustand (vanilla) | Authentication state, user session |
| `gameStore` | Zustand (vanilla) | Single-player game state |
| `uiStore` | Zustand (vanilla) | Toasts, modals, loading, sidebar |
| `lobbyStore` | Pinia | Multiplayer lobby state |

Zustand stores are bridged to Vue reactivity via the custom `useStore` composable that subscribes to store changes and wraps state in a Vue `ref`.

---

## **Project Structure**

```
src/
├── components/
│   ├── ui/              # Reusable UI components (5)
│   │   ├── Button.vue, Card.vue, Modal.vue, Input.vue, MainMenu.vue
│   ├── game/            # Game-specific components (8)
│   │   ├── InteractiveMap.vue, TimelineSlider.vue, FigureCarousel.vue
│   │   ├── GameplayView.vue, RevealPhase.vue, ScoreBreakdown.vue
│   │   ├── NameInput.vue, ResultsScreen.vue
│   └── lobby/           # Multiplayer components (4)
│       ├── LobbyCreateJoin.vue, LobbyWaitingRoom.vue
│       ├── LobbyGameplay.vue, LobbyResults.vue
├── composables/         # Vue composition functions (5)
│   ├── useAuth.ts, useMap.ts, useRoundTimer.ts, useLobby.ts, useStore.ts
├── lib/                 # Core business logic
│   ├── scoring/         # calculateScore.ts, spatialScore.ts, temporalScore.ts,
│   │                    # nameScore.ts, speedBonus.ts
│   ├── matching/        # fuzzyMatch.ts (Levenshtein distance)
│   ├── geography/       # haversine.ts
│   ├── utils/           # validation.ts, constants.ts, dateTime.ts, imageValidator.ts
│   └── supabase/        # client.ts, auth.ts, queries.ts, realtime.ts, test-connection.ts
├── stores/              # State management
│   ├── authStore.ts     # Zustand - authentication
│   ├── gameStore.ts     # Zustand - single-player games
│   ├── lobbyStore.ts    # Pinia - multiplayer state
│   └── uiStore.ts       # Zustand - UI state
├── views/               # Page-level components (9)
│   ├── HomeView.vue, LoginView.vue, FreePlayView.vue
│   ├── DailyChallengeView.vue, LeaderboardView.vue
│   ├── MultiplayerView.vue, LobbyView.vue (stub)
│   ├── ProfileView.vue, ResultsView.vue, NotFoundView.vue
├── types/               # TypeScript definitions (6)
│   ├── figure.ts, user.ts, game.ts, lobby.ts, score.ts, database.ts
├── router/              # Vue Router config
│   ├── index.ts, guards.ts
├── styles/              # Global styles
│   ├── main.css, components.css
├── main.ts              # App entry point
└── App.vue              # Root component

scripts/                 # Development/maintenance scripts (10)
├── validate-figures-images.ts
├── find-figure-images.ts
├── get-wiki-images.ts
├── fix_figure_tags.ts
├── ensure_first_tag_category.ts
├── clean_migration_duplicates.ts
├── add_image_metadata.ts
├── fix_migration_images.ts
├── update_migration_urls.ts
└── 100-new-links.json

supabase/migrations/     # Database migrations (14 files)
._docs/                  # Documentation (extensive, partially outdated)
```

---

## **Scoring System (Max 2,500 points per round)**

```
Spatial Score:  max(0, round(800 - distanceKm / 10))     → 0-800 pts
Temporal Score: max(0, round(800 - abs(yearDiff) / 2))    → 0-800 pts
Name Score:     Tiered fuzzy match (Levenshtein distance)  → 0/200/400/600/800 pts
Speed Bonus:    max(0, min(100, 110 - floor(t/2) * 10))   → 0-100 pts (daily/multiplayer only)
```

Total possible per game (10 rounds): **25,000 points**

---

## **Routing**

| Path | View | Auth Required |
|------|------|--------------|
| `/` | HomeView (MainMenu) | No |
| `/login` | LoginView | No |
| `/play/free` | FreePlayView | No |
| `/play/daily` | DailyChallengeView | Yes |
| `/multiplayer` | MultiplayerView | Yes |
| `/lobby/:code` | LobbyView (stub) | Yes |
| `/results` | ResultsView | No |
| `/leaderboard` | LeaderboardView | No |
| `/profile` | ProfileView | Yes |
| `*` | NotFoundView | No |

---

## **Development Phases Completed**

### Phase 0: Infrastructure Setup
- Vue 3 + TypeScript + Vite project scaffolding
- Film Noir TailwindCSS theme
- Supabase integration
- Core directory structure
- Database schema with RLS
- Scoring algorithms
- Initial 30 historical figures

### Phase 1: Free Play Mode
- Complete gameplay flow (10-round games)
- Interactive map (Leaflet.js)
- Timeline slider with BCE/CE
- Figure carousel with image fallbacks
- Name input with fuzzy matching
- Reveal phase with score breakdowns
- Results screen

### Phase 1.5: Auth System
- `useAuth` composable
- Profile management
- Player stats tracking
- Guest-to-user conversion prompts

### Phase 2: Daily Challenge & Leaderboards
- Deterministic daily figure selection (server-side RPC)
- 45-second timer with speed bonus
- Leaderboard (top 100 + user ranking)
- Streak tracking
- Server-side score submission via RPC

### Phase 3: Multiplayer (2-Player)
- Real-time lobby system with room codes
- Player synchronization via Supabase Realtime
- Broadcast + postgres_changes dual-channel strategy
- Round timers with auto-submit on timeout
- Player-ready system for round progression
- Pinia store for multiplayer state

### Current Branch: Feature/More-Figures-and-Game-Modes
- Added 100 new historical figures (migration 008)
- Image validation and management scripts
- Figure tagging system for future category-based game modes
- Image fallback support enhancement
- Planning docs for new game modes

---

## **Where We Currently Stand**

### Functional and Tested
- Free Play: Works end-to-end for anonymous and authenticated users
- Daily Challenge: Works for authenticated users with leaderboard integration
- Multiplayer: Works for 2-player games with real-time sync (tested manually)
- Auth: Login, signup, profile management all functional

### In Progress / Incomplete
- **New game modes** (category-based): Planning stage only, no code implementation
- **3+ player multiplayer**: Code theoretically supports up to 8, but untested
- **Image management**: Scripts built for validation and finding replacements, partially integrated
- **Figure pool expansion**: 130+ figures in DB but image URLs may be broken (Wikipedia hotlinks)

### Not Started
- Automated testing (unit, integration, e2e)
- Production deployment optimization
- Performance monitoring / error tracking
- Password reset / email verification
- Mobile-specific optimization for multiplayer
- Lobby chat
- Player disconnect/reconnect handling
- Social features

### Known Bugs
- Debug UI panels permanently visible in MultiplayerView
- Toast notifications managed in state but never rendered (no Toast component)
- FigureCarousel references undefined `imageCache` variable
- LobbyView.vue is a stub (routes exist but page says "Coming Soon")
- Duplicate SQL migration numbers (007 and 008) will break migration runners
- 370+ console.log statements throughout production code

---

## **Environment & Build**

### Environment Variables
```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Build Commands
```bash
npm run dev              # Development server (port 3000)
npm run build            # vue-tsc && vite build
npm run preview          # Preview production build
npm run lint             # ESLint with auto-fix
npm run format           # Prettier formatting
npm run validate-images  # Validate figure image URLs
npm run find-images      # Find replacement images for broken ones
```

### Build Configuration
- Manual chunk splitting: vue-vendor, map-vendor, supabase-vendor, utils-vendor
- Path alias: `@` → `./src`
- Lazy-loaded routes for code splitting

---

**Report Updated:** February 13, 2026
**Project Status:** MVP Functional with significant technical debt
**Current Focus:** Figure pool expansion and game mode planning
**Next Priority:** Address technical debt before scaling to production
