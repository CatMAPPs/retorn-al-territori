# HistoGuesser Architecture & Development Rules

**Project:** HistoGuesser  
**Version:** 1.0.0  
**Last Updated:** November 2025  
**Purpose:** Definitive system architecture and development standards for AI-first, maintainable codebase

---

## Table of Contents

1. [System Architecture Overview](#1-system-architecture-overview)
2. [Project Directory Structure](#2-project-directory-structure)
3. [File Naming Conventions](#3-file-naming-conventions)
4. [Code Organization Standards](#4-code-organization-standards)
5. [Documentation Requirements](#5-documentation-requirements)
6. [Backend Database Schema](#6-backend-database-schema)
7. [Development Rules & Constraints](#7-development-rules--constraints)

---

## 1. System Architecture Overview

### 1.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT (Browser)                         │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Vue 3 + TypeScript SPA                   │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │   │
│  │  │  Gameplay  │  │  Lobby     │  │  Profile   │     │   │
│  │  │  Views     │  │  Views     │  │  Views     │     │   │
│  │  └────────────┘  └────────────┘  └────────────┘     │   │
│  │                                                        │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │         State Management (Zustand)             │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  │                                                        │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │   │
│  │  │  Supabase  │  │  Leaflet   │  │  Game      │     │   │
│  │  │  Client    │  │  Maps      │  │  Logic     │     │   │
│  │  └────────────┘  └────────────┘  └────────────┘     │   │
│  └──────────────────────────────────────────────────────┘   │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTPS / WebSocket
                       ▼
┌─────────────────────────────────────────────────────────────┐
│                    SUPABASE (Backend)                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Supabase Auth Service                    │   │
│  │         (Email/Password, JWT Tokens)                  │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │          PostgreSQL Database (13+)                    │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐     │   │
│  │  │  figures   │  │   users    │  │  lobbies   │     │   │
│  │  │            │  │            │  │            │     │   │
│  │  │  daily_    │  │  player_   │  │  lobby_    │     │   │
│  │  │  scores    │  │  stats     │  │  players   │     │   │
│  │  └────────────┘  └────────────┘  └────────────┘     │   │
│  │                                                        │   │
│  │  Row Level Security (RLS) Policies                    │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Supabase Realtime Service                   │   │
│  │    (WebSocket connections for multiplayer)            │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           Supabase Storage Service                    │   │
│  │      (Figure images with CDN delivery)                │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────┐
│              EXTERNAL SERVICES                               │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         OpenStreetMap Tile Servers                    │   │
│  │            (Map rendering via CDN)                    │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### 1.2 Technology Stack Justification

**Frontend:**
- **Vue 3 + Composition API:** Component-based architecture with better TypeScript support and performance vs Vue 2
- **TypeScript:** Type safety catches bugs at compile-time, improves IDE autocomplete, self-documenting code
- **Vite:** 10x faster HMR than Webpack, optimized production builds, native ESM support
- **Tailwind CSS:** Utility-first approach enables rapid prototyping, small bundle size with PurgeCSS
- **Zustand:** Lightweight (1KB), simpler than Redux/Pinia, perfect for moderate state complexity

**Backend (Supabase):**
- **PostgreSQL:** ACID compliance, rich data types (JSONB, arrays), proven scalability
- **Supabase Auth:** Built-in JWT handling, secure by default, no custom auth server needed
- **Supabase Realtime:** WebSocket abstraction over PostgreSQL, handles connection pooling
- **Supabase Storage:** Integrated CDN, automatic image optimization, access control via RLS

**Mapping:**
- **Leaflet.js:** Lightweight (39KB), mobile-optimized, supports custom map interactions
- **OpenStreetMap:** Free tile provider, no API key required, global coverage

**Rationale for Supabase over Custom Backend:**
- Eliminates need for custom Node.js/Express server
- RLS provides database-level security (defense in depth)
- Realtime subscriptions for multiplayer without WebSocket server management
- Reduces DevOps overhead (no server deployment/scaling)
- Free tier supports MVP traffic (50GB database, 2GB storage, 2GB bandwidth)

### 1.3 Data Flow Patterns

**Game Session Flow:**
```
1. User navigates to /play/daily
2. Vue router loads DailyChallenge.vue
3. Component mounts → useGameStore() initializes
4. Store fetches today's figures from Supabase (cached if available)
5. Game state hydrates → renders Round 1
6. User submits guess → calculateScore() runs client-side
7. Final score saved to Supabase daily_scores table
8. Leaderboard query triggers to show rank
```

**Multiplayer Realtime Flow:**
```
1. Host creates lobby → INSERT into lobbies table
2. Supabase generates room_code, returns lobby_id
3. Client subscribes to lobby realtime channel
4. Players join → INSERT into lobby_players
5. Realtime broadcasts new player to all subscribers
6. Host starts game → UPDATE lobbies.status = 'in_progress'
7. All clients receive broadcast, load first figure
8. Submissions → INSERT into lobby_submissions
9. Server-side function calculates scores (prevents cheating)
10. Realtime broadcasts scores after each round
```

### 1.4 Security Architecture

**Authentication Flow:**
```
1. User signs up/logs in via Supabase Auth
2. Supabase returns JWT access token (1hr expiry)
3. Client stores token in memory (no localStorage for security)
4. All API requests include Authorization: Bearer <token>
5. Supabase verifies JWT signature before executing queries
6. RLS policies enforce user-level data access
```

**RLS Security Model:**
- Users can only read/write their own scores and stats
- Lobby data readable by all participants, writable only by host
- Figure data is public (read-only)
- Prevent score manipulation via database-side calculations

---

## 2. Project Directory Structure

```
histoguesser/
├── .github/
│   └── workflows/
│       ├── ci.yml                    # Automated tests on PR
│       └── deploy.yml                # Vercel deployment
│
├── docs/                             # Project documentation
│   ├── architecture-and-rules.md     # This file
│   ├── design-system.md              # UI design tokens
│   ├── PRD.md                        # Product requirements
│   ├── tech-stack.md                 # Technology decisions
│   ├── user-flow.md                  # User journey maps
│   └── ui-theme-rules.md             # Visual design rules
│
├── public/                           # Static assets (not processed by Vite)
│   ├── favicon.ico
│   ├── robots.txt
│   └── og-image.png                  # Social media preview
│
├── src/
│   ├── assets/                       # Processed assets
│   │   ├── images/
│   │   │   ├── logo.svg
│   │   │   └── textures/             # Subtle noir textures
│   │   └── fonts/                    # Local font files (if needed)
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── ui/                       # Design system primitives
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Input.vue
│   │   │   ├── Modal.vue
│   │   │   ├── Badge.vue
│   │   │   └── Spinner.vue
│   │   │
│   │   ├── game/                     # Game-specific components
│   │   │   ├── FigureCarousel.vue    # Image display with navigation
│   │   │   ├── InteractiveMap.vue    # Leaflet wrapper
│   │   │   ├── TimelineSlider.vue    # Year selection
│   │   │   ├── NameInput.vue         # Text input with validation
│   │   │   ├── ScoreDisplay.vue      # Points breakdown
│   │   │   ├── RoundIndicator.vue    # Round X/10
│   │   │   └── Timer.vue             # Countdown display
│   │   │
│   │   ├── lobby/                    # Multiplayer components
│   │   │   ├── LobbyList.vue         # Player list
│   │   │   ├── RoomCodeDisplay.vue   # Join code UI
│   │   │   └── PlayerCard.vue        # Individual player item
│   │   │
│   │   └── leaderboard/
│   │       ├── LeaderboardTable.vue  # Ranked list
│   │       └── LeaderboardRow.vue    # Single entry
│   │
│   ├── composables/                  # Vue 3 composition functions
│   │   ├── useAuth.ts                # Authentication logic
│   │   ├── useGame.ts                # Game state management
│   │   ├── useLeaderboard.ts         # Leaderboard queries
│   │   ├── useLobby.ts               # Multiplayer lobby logic
│   │   ├── useRealtime.ts            # Supabase realtime subscriptions
│   │   └── useToast.ts               # Toast notifications
│   │
│   ├── lib/                          # Core business logic (framework-agnostic)
│   │   ├── scoring/
│   │   │   ├── calculateScore.ts     # Main scoring algorithm
│   │   │   ├── spatialScore.ts       # Distance calculation
│   │   │   ├── temporalScore.ts      # Year difference
│   │   │   ├── nameScore.ts          # Fuzzy matching
│   │   │   └── speedBonus.ts         # Time-based bonus
│   │   │
│   │   ├── matching/
│   │   │   ├── fuzzyMatch.ts         # Levenshtein implementation
│   │   │   └── aliasResolver.ts      # Name alias handling
│   │   │
│   │   ├── geography/
│   │   │   ├── haversine.ts          # Distance calculation
│   │   │   └── mapUtils.ts           # Leaflet helpers
│   │   │
│   │   ├── supabase/
│   │   │   ├── client.ts             # Supabase initialization
│   │   │   ├── auth.ts               # Auth helpers
│   │   │   ├── queries.ts            # Database queries
│   │   │   └── realtime.ts           # Realtime setup
│   │   │
│   │   └── utils/
│   │       ├── dateTime.ts           # Date formatting
│   │       ├── validation.ts         # Input validation
│   │       └── constants.ts          # App-wide constants
│   │
│   ├── stores/                       # Zustand global state
│   │   ├── authStore.ts              # User authentication state
│   │   ├── gameStore.ts              # Active game session
│   │   ├── lobbyStore.ts             # Multiplayer lobby state
│   │   └── uiStore.ts                # UI state (modals, toasts)
│   │
│   ├── views/                        # Page-level components (routes)
│   │   ├── HomeView.vue              # Main menu
│   │   ├── DailyChallengeView.vue    # Daily challenge game
│   │   ├── FreePlayView.vue          # Casual mode
│   │   ├── MultiplayerView.vue       # Multiplayer hub
│   │   ├── LobbyView.vue             # Waiting room
│   │   ├── GameplayView.vue          # Shared gameplay UI
│   │   ├── ResultsView.vue           # End-game results
│   │   ├── LeaderboardView.vue       # Global rankings
│   │   ├── ProfileView.vue           # User profile
│   │   ├── LoginView.vue             # Authentication
│   │   └── NotFoundView.vue          # 404 page
│   │
│   ├── router/
│   │   ├── index.ts                  # Vue Router setup
│   │   └── guards.ts                 # Navigation guards (auth)
│   │
│   ├── types/                        # TypeScript type definitions
│   │   ├── figure.ts                 # Figure data structure
│   │   ├── game.ts                   # Game session types
│   │   ├── user.ts                   # User and auth types
│   │   ├── lobby.ts                  # Multiplayer types
│   │   ├── score.ts                  # Scoring types
│   │   └── database.ts               # Supabase schema types
│   │
│   ├── styles/
│   │   ├── main.css                  # Global styles + Tailwind imports
│   │   └── components.css            # Component-specific overrides
│   │
│   ├── App.vue                       # Root component
│   └── main.ts                       # Application entry point
│
├── supabase/                         # Supabase configuration
│   ├── migrations/                   # Database migrations
│   │   ├── 001_initial_schema.sql
│   │   ├── 002_add_multiplayer.sql
│   │   └── 003_add_indexes.sql
│   │
│   ├── functions/                    # Edge functions (optional)
│   │   └── calculate-round-score/
│   │       └── index.ts
│   │
│   └── seed.sql                      # Initial data (sample figures)
│
├── tests/
│   ├── unit/                         # Unit tests (Vitest)
│   │   ├── scoring.test.ts
│   │   ├── fuzzyMatch.test.ts
│   │   └── haversine.test.ts
│   │
│   ├── integration/                  # Integration tests
│   │   ├── auth.test.ts
│   │   └── gameplay.test.ts
│   │
│   └── e2e/                          # End-to-end tests (Playwright)
│       ├── daily-challenge.spec.ts
│       └── multiplayer.spec.ts
│
├── .env.example                      # Environment variables template
├── .env.local                        # Local environment (gitignored)
├── .eslintrc.cjs                     # ESLint configuration
├── .prettierrc.json                  # Prettier configuration
├── .gitignore
├── index.html                        # HTML entry point
├── package.json
├── tailwind.config.js                # Tailwind configuration
├── tsconfig.json                     # TypeScript configuration
├── vite.config.ts                    # Vite configuration
└── README.md                         # Project setup instructions
```

### 2.1 Directory Organization Principles

**Separation of Concerns:**
- **`/components`** - Pure presentational components (UI only)
- **`/composables`** - Vue-specific reactive logic
- **`/lib`** - Framework-agnostic business logic (portable)
- **`/stores`** - Global state management
- **`/views`** - Page-level orchestration components

**Modularity:**
- Each directory should be self-contained where possible
- Components import from `lib/` for logic, not vice versa
- Avoid circular dependencies (enforced by ESLint)

**Scalability:**
- Group by feature/domain, not by file type
- Example: `game/` contains all game-related components
- Allows easy extraction to separate package if needed

---

## 3. File Naming Conventions

### 3.1 General Rules

**Consistency:** All names use consistent casing per file type  
**Descriptiveness:** Names should clearly indicate purpose  
**Length:** Balance between clarity and brevity (max 40 chars)

### 3.2 File Type Conventions

| File Type | Convention | Example |
|-----------|-----------|---------|
| Vue Components | PascalCase.vue | `FigureCarousel.vue` |
| TypeScript Files | camelCase.ts | `calculateScore.ts` |
| Type Definitions | camelCase.ts | `figure.ts` |
| Stores | camelCase + Store.ts | `gameStore.ts` |
| Composables | camelCase + use prefix | `useAuth.ts` |
| Test Files | [name].test.ts | `scoring.test.ts` |
| CSS Files | kebab-case.css | `main.css` |
| Config Files | kebab-case.[ext] | `tailwind.config.js` |
| SQL Migrations | [number]_[description].sql | `001_initial_schema.sql` |

### 3.3 Component Naming

**Single File Components (SFC):**
- Always PascalCase
- Multi-word names (avoid single-word to prevent HTML conflicts)
- Descriptive of functionality

```
✅ Good: FigureCarousel.vue, InteractiveMap.vue, ScoreDisplay.vue
❌ Bad: Carousel.vue, Map.vue, Score.vue
```

**Component File Organization:**
```vue
<!-- FigureCarousel.vue -->
<script setup lang="ts">
// Imports
// Props/Emits
// Composables
// Local state
// Computed properties
// Methods
// Lifecycle hooks
</script>

<template>
  <!-- Markup -->
</template>

<style scoped>
/* Component-specific styles */
</style>
```

### 3.4 Directory Naming

- Always lowercase with hyphens
- Plural for collections: `components/`, `stores/`, `views/`
- Singular for utilities: `lib/`, `router/`

### 3.5 Function Naming

**Exported Functions:**
```typescript
// Verb-first, camelCase
export function calculateScore(guess: Guess, answer: Figure): Score {}
export function validateEmail(email: string): boolean {}
export async function fetchDailyFigures(): Promise<Figure[]> {}
```

**Composables:**
```typescript
// Always start with 'use'
export function useAuth() {}
export function useGame() {}
export function useLobby() {}
```

**Event Handlers:**
```typescript
// on[Event] pattern
const onSubmitGuess = () => {}
const onJoinLobby = () => {}
```

### 3.6 Variable Naming

```typescript
// Boolean: is/has/should prefix
const isAuthenticated = true;
const hasSubmitted = false;
const shouldShowModal = computed(() => ...);

// Arrays: plural nouns
const figures = [];
const players = [];

// Objects: singular nouns
const currentFigure = {};
const activePlayer = {};

// Constants: UPPER_SNAKE_CASE
const MAX_ROUNDS = 10;
const API_BASE_URL = 'https://api.example.com';
```

---

## 4. Code Organization Standards

### 4.1 File Structure Template

**TypeScript Module:**
```typescript
/**
 * @file Brief description of file purpose
 * @module lib/scoring/calculateScore
 */

// External imports (third-party libraries)
import { LevenshteinDistance } from 'some-library';

// Internal imports (project files)
import type { Guess, Figure, Score } from '@/types';
import { haversineDistance } from '@/lib/geography/haversine';

// Constants
const MAX_SPATIAL_SCORE = 800;
const MAX_TEMPORAL_SCORE = 800;

// Types (file-local)
interface ScoreComponents {
  spatial: number;
  temporal: number;
  name: number;
  speed: number;
}

// Main exported function(s)
export function calculateScore(
  guess: Guess,
  answer: Figure,
  timeSeconds: number
): Score {
  // Implementation
}

// Helper functions (not exported)
function normalizeScore(raw: number, max: number): number {
  return Math.max(0, Math.min(max, raw));
}
```

**Vue Component (Composition API):**
```vue
<script setup lang="ts">
/**
 * @component FigureCarousel
 * @description Displays figure images with navigation controls
 */

// Imports
import { ref, computed, onMounted } from 'vue';
import type { Figure } from '@/types';
import Button from '@/components/ui/Button.vue';

// Props
interface Props {
  figure: Figure;
  showControls?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  showControls: true,
});

// Emits
interface Emits {
  (e: 'image-change', index: number): void;
}
const emit = defineEmits<Emits>();

// Composables
// (none in this example)

// Local state
const currentImageIndex = ref(0);
const isLoading = ref(true);

// Computed properties
const currentImage = computed(() => props.figure.images[currentImageIndex.value]);
const hasMultipleImages = computed(() => props.figure.images.length > 1);

// Methods
function nextImage() {
  if (currentImageIndex.value < props.figure.images.length - 1) {
    currentImageIndex.value++;
    emit('image-change', currentImageIndex.value);
  }
}

function previousImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
    emit('image-change', currentImageIndex.value);
  }
}

// Lifecycle
onMounted(() => {
  // Preload images
  isLoading.value = false;
});
</script>

<template>
  <div class="figure-carousel">
    <img :src="currentImage.url" :alt="figure.name" />
    <div v-if="hasMultipleImages && showControls" class="controls">
      <Button @click="previousImage">Previous</Button>
      <Button @click="nextImage">Next</Button>
    </div>
  </div>
</template>

<style scoped>
/* Component styles */
</style>
```

### 4.2 Import Organization

**Order:**
1. Vue/Framework imports
2. Third-party libraries
3. Types/Interfaces
4. Internal modules (by depth)
5. Components
6. Assets/Styles

**Example:**
```typescript
// 1. Vue
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// 2. Third-party
import dayjs from 'dayjs';
import L from 'leaflet';

// 3. Types
import type { Figure, Guess, Score } from '@/types';

// 4. Internal modules
import { calculateScore } from '@/lib/scoring/calculateScore';
import { useAuth } from '@/composables/useAuth';

// 5. Components
import Button from '@/components/ui/Button.vue';
import Card from '@/components/ui/Card.vue';

// 6. Assets
import logo from '@/assets/images/logo.svg';
```

**Path Aliases:**
```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@lib/*": ["./src/lib/*"],
      "@types/*": ["./src/types/*"]
    }
  }
}
```

### 4.3 Export Conventions

**Named Exports (Preferred):**
```typescript
// Good: Easy to tree-shake, explicit imports
export function calculateScore() {}
export function validateGuess() {}

// Usage
import { calculateScore, validateGuess } from '@/lib/scoring';
```

**Default Exports (Components Only):**
```vue
<!-- Only for Vue SFCs -->
<script setup lang="ts">
// Component definition
</script>
```

**Barrel Exports (Index Files):**
```typescript
// lib/scoring/index.ts
export { calculateScore } from './calculateScore';
export { spatialScore } from './spatialScore';
export { temporalScore } from './temporalScore';
export { nameScore } from './nameScore';

// Usage: import { calculateScore } from '@/lib/scoring';
```

### 4.4 Type Definitions

**Interface vs Type:**
```typescript
// Use interface for object shapes (extendable)
interface Figure {
  id: string;
  name: string;
  birthYear: number;
}

// Use type for unions, intersections, primitives
type GameMode = 'daily' | 'freeplay' | 'multiplayer';
type ScoreComponent = 'spatial' | 'temporal' | 'name' | 'speed';
```

**Type Location:**
```typescript
// If used across files → /types directory
// If file-local → define at top of file
// If props-only → inline with component
```

---

## 5. Documentation Requirements

### 5.1 File Header Documentation

**Every file must have a header comment:**

```typescript
/**
 * @file calculateScore.ts
 * @description Core scoring algorithm for HistoGuesser game rounds.
 * Calculates spatial, temporal, name, and speed bonus components.
 * 
 * @module lib/scoring
 * @author Team HistoGuesser
 * @created 2025-11-02
 */
```

**Minimum Requirements:**
- `@file` - Filename
- `@description` - 1-3 sentence purpose
- `@module` - Path from src/

**Optional:**
- `@author` - Creator (for critical modules)
- `@created` - Creation date
- `@see` - Related files/docs

### 5.2 Function Documentation (TSDoc)

**Public Functions (Always Required):**

```typescript
/**
 * Calculates the total score for a game round based on user guess accuracy.
 * 
 * @param guess - User's submitted guess containing name, location, and year
 * @param answer - Correct figure data from database
 * @param timeSeconds - Time taken to submit (for speed bonus)
 * @returns Score object with component breakdown and total
 * 
 * @example
 * ```ts
 * const score = calculateScore(
 *   { name: 'Einstein', lat: 48.4, lon: 9.9, year: 1879 },
 *   einsteinFigure,
 *   15.5
 * );
 * console.log(score.total); // 2450
 * ```
 * 
 * @throws {Error} If guess or answer is invalid
 * @see {@link spatialScore} for distance calculation details
 */
export function calculateScore(
  guess: Guess,
  answer: Figure,
  timeSeconds: number
): Score {
  // Implementation
}
```

**Required TSDoc Tags:**
- `@param` - Each parameter with type and description
- `@returns` - Return value description
- `@example` - Usage example (for complex functions)

**Optional Tags:**
- `@throws` - Exceptions thrown
- `@see` - Related functions/docs
- `@deprecated` - If function is being phased out

**Private/Helper Functions (Minimal):**
```typescript
/**
 * Normalizes a raw score to ensure it's within valid range.
 * Internal helper function.
 */
function normalizeScore(raw: number, max: number): number {
  return Math.max(0, Math.min(max, raw));
}
```

### 5.3 Inline Comments

**When to Comment:**
✅ Complex algorithms or formulas
✅ Non-obvious business logic
✅ Workarounds or hacks
✅ Performance optimizations
✅ Security considerations

**When NOT to Comment:**
❌ Self-explanatory code
❌ Restating the code in English
❌ Obvious variable names

**Examples:**

```typescript
// ✅ Good: Explains "why"
// Use Haversine formula instead of Euclidean to account for Earth's curvature
const distance = haversineDistance(guess.lat, guess.lon, figure.lat, figure.lon);

// ❌ Bad: Explains "what" (already obvious)
// Calculate the distance
const distance = haversineDistance(guess.lat, guess.lon, figure.lat, figure.lon);

// ✅ Good: Explains non-obvious logic
// Divide by 10 to convert km → decameters for gentler score decay
const spatialScore = Math.max(0, 800 - (distance / 10));

// ✅ Good: Documents workaround
// HACK: Leaflet requires manual tile layer reload on window resize
// TODO: Remove once upstream bug is fixed (issue #1234)
window.addEventListener('resize', () => map.invalidateSize());
```

### 5.4 Component Documentation

**Vue Component:**
```vue
<script setup lang="ts">
/**
 * @component InteractiveMap
 * @description Leaflet-based map component for location guessing.
 * Allows users to click/tap to place a pin representing their guess.
 * 
 * @fires pin-placed - Emitted when user places/moves guess pin
 * @requires leaflet@^1.9.0
 * 
 * @example
 * ```vue
 * <InteractiveMap
 *   :initial-center="[40, -3]"
 *   @pin-placed="handlePinPlaced"
 * />
 * ```
 */
</script>
```

### 5.5 TODO Comments

**Standard Format:**
```typescript
// TODO: [Priority] Description - @author (YYYY-MM-DD)
// TODO: [HIGH] Implement fuzzy matching with Levenshtein - @danlopez (2025-11-02)
// TODO: [MEDIUM] Add caching for figure queries - @team (2025-11-05)
// TODO: [LOW] Refactor to use composition API - @team (2025-11-10)
```

**Priorities:**
- **[CRITICAL]** - Blocks release
- **[HIGH]** - Important for MVP
- **[MEDIUM]** - Nice to have
- **[LOW]** - Future enhancement

---

## 6. Backend Database Schema

### 6.1 Complete Table Definitions

#### **figures**
```sql
CREATE TABLE figures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Identity
  name TEXT NOT NULL,
  aliases TEXT[] DEFAULT '{}',
  
  -- Images (JSONB array for flexibility)
  images JSONB NOT NULL DEFAULT '[]',
  -- Each object: { url, license, credit, source_url }
  
  -- Temporal data
  birth_year INTEGER NOT NULL,
  death_year INTEGER,
  active_year INTEGER,
  
  -- Spatial data
  hometown TEXT,
  lat FLOAT NOT NULL CHECK (lat >= -90 AND lat <= 90),
  lon FLOAT NOT NULL CHECK (lon >= -180 AND lon <= 180),
  
  -- Metadata
  description TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  
  -- Housekeeping
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  -- Constraints
  CONSTRAINT valid_images CHECK (jsonb_array_length(images) > 0),
  CONSTRAINT valid_birth_year CHECK (birth_year >= -3000 AND birth_year <= 2025)
);

-- Indexes
CREATE INDEX idx_figures_tags ON figures USING GIN (tags);
CREATE INDEX idx_figures_birth_year ON figures (birth_year);
CREATE INDEX idx_figures_spatial ON figures (lat, lon);

-- Full-text search (for name matching)
CREATE INDEX idx_figures_name_trgm ON figures USING GIN (name gin_trgm_ops);
CREATE INDEX idx_figures_aliases_trgm ON figures USING GIN (aliases gin_trgm_ops);
```

#### **users**
```sql
-- Managed by Supabase Auth, but we add profile extension
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  
  CONSTRAINT valid_username CHECK (username ~ '^[a-zA-Z0-9_-]{3,20})
);

-- Indexes
CREATE INDEX idx_users_username ON users (username);
CREATE INDEX idx_users_email ON users (email);
```

#### **player_stats**
```sql
CREATE TABLE player_stats (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  
  -- Aggregate stats
  total_games INTEGER DEFAULT 0 CHECK (total_games >= 0),
  best_score INTEGER DEFAULT 0 CHECK (best_score >= 0 AND best_score <= 25000),
  
  -- Daily challenge tracking
  daily_streak INTEGER DEFAULT 0 CHECK (daily_streak >= 0),
  last_daily_date DATE,
  longest_streak INTEGER DEFAULT 0 CHECK (longest_streak >= 0),
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX idx_player_stats_best_score ON player_stats (best_score DESC);
CREATE INDEX idx_player_stats_streak ON player_stats (daily_streak DESC);
```

#### **daily_scores**
```sql
CREATE TABLE daily_scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  challenge_date DATE NOT NULL,
  
  -- Score data
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 25000),
  
  -- Breakdown (for transparency)
  spatial_score INTEGER NOT NULL,
  temporal_score INTEGER NOT NULL,
  name_score INTEGER NOT NULL,
  speed_bonus INTEGER NOT NULL,
  
  -- Metadata
  completed_at TIMESTAMPTZ DEFAULT now(),
  
  -- Prevent duplicate entries
  UNIQUE (user_id, challenge_date)
);

-- Indexes (critical for leaderboard performance)
CREATE INDEX idx_daily_scores_date_score ON daily_scores (challenge_date, score DESC, completed_at ASC);
CREATE INDEX idx_daily_scores_user ON daily_scores (user_id, challenge_date DESC);
```

#### **lobbies**
```sql
CREATE TABLE lobbies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Identification
  room_code TEXT UNIQUE NOT NULL,
  
  -- Host
  host_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- State
  status TEXT NOT NULL DEFAULT 'waiting' 
    CHECK (status IN ('waiting', 'in_progress', 'finished')),
  current_round INTEGER DEFAULT 0 CHECK (current_round >= 0 AND current_round <= 10),
  
  -- Game data
  figure_ids UUID[] NOT NULL,
  
  -- Lifecycle
  created_at TIMESTAMPTZ DEFAULT now(),
  expires_at TIMESTAMPTZ DEFAULT (now() + INTERVAL '24 hours'),
  
  CONSTRAINT valid_figure_count CHECK (array_length(figure_ids, 1) = 10)
);

-- Indexes
CREATE INDEX idx_lobbies_room_code ON lobbies (room_code);
CREATE INDEX idx_lobbies_status ON lobbies (status) WHERE status != 'finished';
CREATE INDEX idx_lobbies_expires ON lobbies (expires_at) WHERE status != 'finished';

-- Auto-cleanup expired lobbies
CREATE OR REPLACE FUNCTION cleanup_expired_lobbies()
RETURNS void AS $
BEGIN
  DELETE FROM lobbies WHERE expires_at < now() AND status = 'finished';
END;
$ LANGUAGE plpgsql;

-- Schedule cleanup (requires pg_cron extension)
-- SELECT cron.schedule('cleanup-lobbies', '0 * * * *', 'SELECT cleanup_expired_lobbies()');
```

#### **lobby_players**
```sql
CREATE TABLE lobby_players (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lobby_id UUID NOT NULL REFERENCES lobbies(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  
  -- Display data (denormalized for performance)
  username TEXT NOT NULL,
  avatar_url TEXT,
  
  -- State
  score INTEGER DEFAULT 0 CHECK (score >= 0 AND score <= 25000),
  ready BOOLEAN DEFAULT false,
  connected BOOLEAN DEFAULT true,
  
  -- Timestamps
  joined_at TIMESTAMPTZ DEFAULT now(),
  
  UNIQUE (lobby_id, user_id)
);

-- Indexes
CREATE INDEX idx_lobby_players_lobby ON lobby_players (lobby_id);
CREATE INDEX idx_lobby_players_user ON lobby_players (user_id);
```

#### **lobby_submissions**
```sql
CREATE TABLE lobby_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  lobby_id UUID NOT NULL REFERENCES lobbies(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  round_number INTEGER NOT NULL CHECK (round_number >= 1 AND round_number <= 10),
  figure_id UUID NOT NULL REFERENCES figures(id),
  
  -- Guess data
  guessed_name TEXT,
  guessed_lat FLOAT NOT NULL CHECK (guessed_lat >= -90 AND guessed_lat <= 90),
  guessed_lon FLOAT NOT NULL CHECK (guessed_lon >= -180 AND guessed_lon <= 180),
  guessed_year INTEGER NOT NULL CHECK (guessed_year >= -3000 AND guessed_year <= 2025),
  
  -- Timing
  submission_time FLOAT NOT NULL CHECK (submission_time >= 0 AND submission_time <= 45),
  
  -- Result (calculated server-side)
  score INTEGER NOT NULL CHECK (score >= 0 AND score <= 2500),
  spatial_score INTEGER NOT NULL,
  temporal_score INTEGER NOT NULL,
  name_score INTEGER NOT NULL,
  speed_bonus INTEGER NOT NULL,
  
  submitted_at TIMESTAMPTZ DEFAULT now(),
  
  UNIQUE (lobby_id, user_id, round_number)
);

-- Indexes
CREATE INDEX idx_lobby_submissions_lobby_round ON lobby_submissions (lobby_id, round_number);
CREATE INDEX idx_lobby_submissions_user ON lobby_submissions (user_id, lobby_id);
```

### 6.2 Relationship Diagram

```
users (1) ──┬── (∞) daily_scores
            │
            ├── (1) player_stats
            │
            ├── (∞) lobbies (as host)
            │
            ├── (∞) lobby_players (as participant)
            │
            └── (∞) lobby_submissions

lobbies (1) ──┬── (∞) lobby_players
              │
              └── (∞) lobby_submissions

figures (1) ──┬── (∞) lobby_submissions
              │
              └── [Referenced in lobbies.figure_ids array]
```

### 6.3 Row Level Security (RLS) Policies

**Enable RLS on all tables:**
```sql
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE player_stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE daily_scores ENABLE ROW LEVEL SECURITY;
ALTER TABLE lobbies ENABLE ROW LEVEL SECURITY;
ALTER TABLE lobby_players ENABLE ROW LEVEL SECURITY;
ALTER TABLE lobby_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE figures ENABLE ROW LEVEL SECURITY;
```

#### **figures** (Public Read-Only)
```sql
-- Anyone can read figures
CREATE POLICY "Figures are publicly readable"
  ON figures FOR SELECT
  USING (true);

-- Only admins can modify (via Supabase dashboard)
CREATE POLICY "Only admins can modify figures"
  ON figures FOR ALL
  USING (auth.jwt() ->> 'role' = 'service_role');
```

#### **users** (User Profile Management)
```sql
-- Users can read all profiles (for leaderboards, lobbies)
CREATE POLICY "Profiles are publicly readable"
  ON users FOR SELECT
  USING (true);

-- Users can update only their own profile
CREATE POLICY "Users can update own profile"
  ON users FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- Users can insert their own profile on signup
CREATE POLICY "Users can insert own profile"
  ON users FOR INSERT
  WITH CHECK (auth.uid() = id);
```

#### **player_stats** (Read Own, System Updates)
```sql
-- Users can read all stats (for leaderboards)
CREATE POLICY "Stats are publicly readable"
  ON player_stats FOR SELECT
  USING (true);

-- Users can update only their own stats
CREATE POLICY "Users can update own stats"
  ON player_stats FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Auto-insert on user creation (via trigger)
CREATE POLICY "Users can insert own stats"
  ON player_stats FOR INSERT
  WITH CHECK (auth.uid() = user_id);
```

#### **daily_scores** (Submit Once Per Day)
```sql
-- Users can read all scores (for leaderboards)
CREATE POLICY "Daily scores are publicly readable"
  ON daily_scores FOR SELECT
  USING (true);

-- Users can insert their own score once per day
CREATE POLICY "Users can submit daily score"
  ON daily_scores FOR INSERT
  WITH CHECK (
    auth.uid() = user_id 
    AND challenge_date = CURRENT_DATE
  );

-- Prevent updates (immutable)
CREATE POLICY "Daily scores cannot be updated"
  ON daily_scores FOR UPDATE
  USING (false);
```

#### **lobbies** (Host Control)
```sql
-- Anyone can read lobbies (for join via code)
CREATE POLICY "Lobbies are publicly readable"
  ON lobbies FOR SELECT
  USING (true);

-- Any authenticated user can create lobby
CREATE POLICY "Authenticated users can create lobbies"
  ON lobbies FOR INSERT
  WITH CHECK (auth.uid() = host_id);

-- Only host can update lobby
CREATE POLICY "Only host can update lobby"
  ON lobbies FOR UPDATE
  USING (auth.uid() = host_id)
  WITH CHECK (auth.uid() = host_id);

-- Only host can delete lobby
CREATE POLICY "Only host can delete lobby"
  ON lobbies FOR DELETE
  USING (auth.uid() = host_id);
```

#### **lobby_players** (Participant Management)
```sql
-- Lobby participants can read all players in their lobby
CREATE POLICY "Lobby players are readable by participants"
  ON lobby_players FOR SELECT
  USING (
    lobby_id IN (
      SELECT lobby_id FROM lobby_players WHERE user_id = auth.uid()
    )
  );

-- Users can join lobbies
CREATE POLICY "Users can join lobbies"
  ON lobby_players FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own player state
CREATE POLICY "Users can update own player state"
  ON lobby_players FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Host or self can remove player
CREATE POLICY "Host or self can remove player"
  ON lobby_players FOR DELETE
  USING (
    auth.uid() = user_id 
    OR auth.uid() = (SELECT host_id FROM lobbies WHERE id = lobby_id)
  );
```

#### **lobby_submissions** (Round Submissions)
```sql
-- Lobby participants can read all submissions in their lobby
CREATE POLICY "Submissions readable by lobby participants"
  ON lobby_submissions FOR SELECT
  USING (
    lobby_id IN (
      SELECT lobby_id FROM lobby_players WHERE user_id = auth.uid()
    )
  );

-- Users can submit their own guesses
CREATE POLICY "Users can submit own guesses"
  ON lobby_submissions FOR INSERT
  WITH CHECK (
    auth.uid() = user_id
    AND lobby_id IN (
      SELECT lobby_id FROM lobby_players WHERE user_id = auth.uid()
    )
  );

-- Submissions are immutable
CREATE POLICY "Submissions cannot be updated"
  ON lobby_submissions FOR UPDATE
  USING (false);
```

### 6.4 Database Functions

#### **Calculate Round Score (Server-Side)**
```sql
CREATE OR REPLACE FUNCTION calculate_round_score(
  p_guessed_name TEXT,
  p_guessed_lat FLOAT,
  p_guessed_lon FLOAT,
  p_guessed_year INTEGER,
  p_figure_id UUID,
  p_submission_time FLOAT
)
RETURNS TABLE (
  total_score INTEGER,
  spatial_score INTEGER,
  temporal_score INTEGER,
  name_score INTEGER,
  speed_bonus INTEGER
) AS $
DECLARE
  v_figure RECORD;
  v_distance_km FLOAT;
  v_year_diff INTEGER;
  v_spatial INTEGER;
  v_temporal INTEGER;
  v_name INTEGER;
  v_speed INTEGER;
BEGIN
  -- Fetch figure data
  SELECT * INTO v_figure FROM figures WHERE id = p_figure_id;
  
  -- Calculate spatial score (Haversine distance)
  v_distance_km := (
    6371 * acos(
      cos(radians(p_guessed_lat)) * cos(radians(v_figure.lat)) *
      cos(radians(v_figure.lon) - radians(p_guessed_lon)) +
      sin(radians(p_guessed_lat)) * sin(radians(v_figure.lat))
    )
  );
  v_spatial := GREATEST(0, 800 - ROUND(v_distance_km / 10));
  
  -- Calculate temporal score
  v_year_diff := ABS(p_guessed_year - v_figure.birth_year);
  v_temporal := GREATEST(0, 800 - ROUND(v_year_diff / 2.0));
  
  -- Calculate name score (fuzzy matching via trigram similarity)
  v_name := CASE
    WHEN similarity(lower(p_guessed_name), lower(v_figure.name)) >= 0.9 THEN 800
    WHEN similarity(lower(p_guessed_name), lower(v_figure.name)) >= 0.7 THEN 600
    WHEN similarity(lower(p_guessed_name), lower(v_figure.name)) >= 0.5 THEN 400
    WHEN similarity(lower(p_guessed_name), lower(v_figure.name)) >= 0.3 THEN 200
    ELSE 0
  END;
  
  -- Calculate speed bonus
  v_speed := CASE
    WHEN p_submission_time <= 10 THEN 100
    WHEN p_submission_time <= 28 THEN GREATEST(0, 110 - FLOOR(p_submission_time / 2) * 10)
    ELSE 0
  END;
  
  -- Return breakdown
  RETURN QUERY SELECT
    (v_spatial + v_temporal + v_name + v_speed),
    v_spatial,
    v_temporal,
    v_name,
    v_speed;
END;
$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable trigram extension for similarity
CREATE EXTENSION IF NOT EXISTS pg_trgm;
```

#### **Update Player Stats (Trigger)**
```sql
CREATE OR REPLACE FUNCTION update_player_stats()
RETURNS TRIGGER AS $
BEGIN
  -- Update total games and best score
  INSERT INTO player_stats (user_id, total_games, best_score, last_daily_date)
  VALUES (NEW.user_id, 1, NEW.score, NEW.challenge_date)
  ON CONFLICT (user_id) DO UPDATE SET
    total_games = player_stats.total_games + 1,
    best_score = GREATEST(player_stats.best_score, NEW.score),
    last_daily_date = NEW.challenge_date,
    daily_streak = CASE
      WHEN player_stats.last_daily_date = NEW.challenge_date - INTERVAL '1 day'
        THEN player_stats.daily_streak + 1
      WHEN player_stats.last_daily_date = NEW.challenge_date
        THEN player_stats.daily_streak
      ELSE 1
    END,
    longest_streak = GREATEST(
      player_stats.longest_streak,
      CASE
        WHEN player_stats.last_daily_date = NEW.challenge_date - INTERVAL '1 day'
          THEN player_stats.daily_streak + 1
        ELSE 1
      END
    ),
    updated_at = now();
    
  RETURN NEW;
END;
$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_player_stats
  AFTER INSERT ON daily_scores
  FOR EACH ROW
  EXECUTE FUNCTION update_player_stats();
```

### 6.5 Index Strategy

**Leaderboard Queries (Most Critical):**
```sql
-- Daily leaderboard: Sort by score DESC, then completion time ASC
CREATE INDEX idx_daily_leaderboard ON daily_scores (
  challenge_date, 
  score DESC, 
  completed_at ASC
);

-- Global leaderboard: All-time best scores
CREATE INDEX idx_global_leaderboard ON player_stats (
  best_score DESC
);
```

**Search & Filtering:**
```sql
-- Figure search by name
CREATE INDEX idx_figures_name_search ON figures USING GIN (
  to_tsvector('english', name)
);

-- Figure filtering by tags
CREATE INDEX idx_figures_tags_search ON figures USING GIN (tags);
```

**Multiplayer Performance:**
```sql
-- Find active lobbies by room code
CREATE INDEX idx_active_lobbies ON lobbies (room_code)
  WHERE status IN ('waiting', 'in_progress');

-- Lobby participant lookups
CREATE INDEX idx_lobby_participants ON lobby_players (lobby_id, user_id);
```

---

## 7. Development Rules & Constraints

### 7.1 File Length Limit

**Hard Rule: Maximum 500 lines per file**

**Rationale:**
- Improves AI comprehension and code generation
- Forces modular design
- Easier code reviews
- Reduces merge conflicts

**Enforcement:**
```javascript
// .eslintrc.cjs
module.exports = {
  rules: {
    'max-lines': ['error', {
      max: 500,
      skipBlankLines: true,
      skipComments: true
    }]
  }
}
```

**Exceeding Limit:**
If a file reaches 500 lines, immediately refactor by:
1. Extracting helper functions to separate files
2. Splitting component into sub-components
3. Moving types to dedicated type files
4. Extracting constants to a constants file

**Example Refactoring:**
```
❌ Before: GameplayView.vue (650 lines)

✅ After:
  - GameplayView.vue (200 lines) - orchestration only
  - components/game/FigureDisplay.vue (150 lines)
  - components/game/GuessInputs.vue (180 lines)
  - lib/gameplay/gameLogic.ts (120 lines)
```

### 7.2 Modularity Requirements

**Principle: One Responsibility Per File**

**Component Rules:**
- Max 3 computed properties before extraction
- Max 5 methods before extraction
- Props/emits should be strongly typed
- No business logic in components (delegate to composables/lib)

**Composable Rules:**
- Single concern (auth, game, lobby)
- Return only necessary state/methods
- No side effects in getters
- Document lifecycle behavior

**Lib Module Rules:**
- Pure functions preferred (no side effects)
- Framework-agnostic (can be extracted to npm package)
- Comprehensive unit tests required
- Type-safe inputs/outputs

### 7.3 Code Quality Standards

**TypeScript Strict Mode:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

**Linting:**
```javascript
// .eslintrc.cjs
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier'
  ],
  rules: {
    // Enforce
    'no-console': 'warn',
    'no-debugger': 'error',
    'vue/multi-word-component-names': 'error',
    'vue/no-v-html': 'error',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    
    // Prevent circular dependencies
    'import/no-cycle': 'error',
    
    // Consistent naming
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase']
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase']
      }
    ]
  }
}
```

**Formatting:**
```json
// .prettierrc.json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 2,
  "printWidth": 100
}
```

### 7.4 Testing Requirements

**Coverage Targets:**
- Unit tests: 80% coverage minimum
- Integration tests: Critical paths (auth, gameplay, scoring)
- E2E tests: Happy path for each game mode

**Test Structure:**
```typescript
// tests/unit/scoring.test.ts
import { describe, it, expect } from 'vitest';
import { calculateScore } from '@/lib/scoring/calculateScore';

describe('calculateScore', () => {
  describe('spatial accuracy', () => {
    it('should award full points for exact location', () => {
      const score = calculateScore(
        { name: 'Einstein', lat: 48.4, lon: 9.9, year: 1879 },
        mockEinstein,
        10
      );
      expect(score.spatial).toBe(800);
    });
    
    it('should decrease linearly with distance', () => {
      // Test implementation
    });
  });
  
  describe('temporal accuracy', () => {
    // Tests for year scoring
  });
  
  describe('name matching', () => {
    // Tests for fuzzy matching
  });
});
```

**Test File Location:**
- Unit tests: `tests/unit/[module].test.ts`
- Integration: `tests/integration/[feature].test.ts`
- E2E: `tests/e2e/[flow].spec.ts`

### 7.5 Git Workflow

**Branch Naming:**
```
feature/[ticket-id]-short-description
bugfix/[ticket-id]-short-description
hotfix/[ticket-id]-short-description
refactor/[ticket-id]-short-description
```

**Commit Messages (Conventional Commits):**
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons
- `refactor`: Code change that neither fixes nor adds feature
- `test`: Adding tests
- `chore`: Maintain tasks (deps, config)

**Examples:**
```
feat(gameplay): implement timeline slider component
fix(scoring): correct speed bonus calculation for edge case
docs(architecture): add database schema section
refactor(auth): extract login logic to composable
```

### 7.6 Code Review Checklist

**Before Submitting PR:**
- [ ] All tests pass (`npm run test`)
- [ ] No ESLint errors (`npm run lint`)
- [ ] Code formatted (`npm run format`)
- [ ] No files exceed 500 lines
- [ ] All functions documented
- [ ] Type safety verified (no `any` types)
- [ ] Responsive design tested (mobile + desktop)
- [ ] Accessibility checks passed (contrast, focus states)

**Reviewer Checks:**
- [ ] Code follows architecture patterns
- [ ] File naming conventions followed
- [ ] Documentation is clear and complete
- [ ] No security vulnerabilities introduced
- [ ] Performance implications considered
- [ ] Edge cases handled
- [ ] Tests cover new functionality

### 7.7 Performance Budgets

**Bundle Size:**
- Initial JS: < 250KB gzipped
- Initial CSS: < 50KB gzipped
- Route chunks: < 100KB each

**Runtime:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Largest Contentful Paint: < 2.5s

**Database:**
- Leaderboard query: < 100ms
- Figure fetch: < 50ms (cached)
- Real-time latency: < 200ms

**Monitoring:**
```javascript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'map': ['leaflet'],
          'db': ['@supabase/supabase-js']
        }
      }
    },
    reportCompressedSize: true,
    chunkSizeWarningLimit: 100
  }
});
```

### 7.8 Security Guidelines

**Environment Variables:**
```bash
# .env.example (committed)
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=

# .env.local (gitignored)
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

**Never Commit:**
- API keys or secrets
- Private keys
- Database credentials
- User data

**Input Validation:**
```typescript
// Always validate user input
function validateGuess(guess: Guess): boolean {
  if (guess.lat < -90 || guess.lat > 90) return false;
  if (guess.lon < -180 || guess.lon > 180) return false;
  if (guess.year < -3000 || guess.year > 2025) return false;
  if (!guess.name || guess.name.length > 100) return false;
  return true;
}
```

**XSS Prevention:**
```vue
<!-- Never use v-html with user input -->
<div v-html="userInput"></div> ❌

<!-- Use text interpolation -->
<div>{{ userInput }}</div> ✅
```

---

## 8. Deployment & CI/CD

### 8.1 Deployment Targets

**Frontend (Vercel):**
- Production: `main` branch auto-deploys
- Preview: All PRs get preview URL
- Environment: Node 18+, automatic HTTPS

**Backend (Supabase):**
- Production: Managed by Supabase
- Staging: Separate Supabase project (optional for MVP)
- Database migrations: Manual via Supabase dashboard

### 8.2 CI/CD Pipeline

**GitHub Actions Workflow:**
```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main, develop]
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test:unit
      - run: npm run build
  
  e2e:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npx playwright install
      - run: npm run test:e2e
```

---

## 9. Quick Reference

### 9.1 Command Cheat Sheet

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run preview          # Preview production build

# Testing
npm run test             # Run all tests
npm run test:unit        # Unit tests only
npm run test:e2e         # E2E tests only
npm run test:coverage    # Coverage report

# Code Quality
npm run lint             # ESLint check
npm run lint:fix         # Auto-fix issues
npm run format           # Prettier format
npm run type-check       # TypeScript check

# Database
npm run db:reset         # Reset local Supabase
npm run db:seed          # Seed sample data
npm run db:migrate       # Run pending migrations
```

### 9.2 File
