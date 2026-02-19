# HistoGuesser - Glaring Issues Analysis

**Date:** February 13, 2026
**Analyst Role:** Senior Software Engineer - Brutal Honest Assessment
**Verdict:** This codebase is not production-ready. Deploying it to hundreds of users in its current state would result in cheating, data integrity issues, broken features, and a poor user experience. Here is every significant issue, categorized by severity.

---

## CRITICAL - Will cause real problems with real users

### 1. Client-Side Score Calculation is Trivially Exploitable
**Files:** `src/components/lobby/LobbyGameplay.vue`, `src/views/DailyChallengeView.vue`, `src/views/FreePlayView.vue`

All scoring happens in the browser. In multiplayer, the client calculates the score locally and sends it to the server as a plain number:

```typescript
// LobbyGameplay.vue - the client just sends whatever score it wants
const totalScore = spatialResult.score + temporalResult.score + nameScore + speedBonus
const submission = await submitGuess(guessedName.value, lat, lon, year, totalScore)
```

The server blindly inserts this score into `lobby_submissions` with zero validation. Any user can open DevTools, intercept the network request, change `score` to `25000`, and the server will accept it. This applies to both multiplayer and daily challenge modes. The daily challenge uses an RPC function (`submit_daily_score`) which is slightly better, but the multiplayer mode has absolutely no server-side validation.

**Impact:** Any technically literate user can cheat their way to #1 on every leaderboard and win every multiplayer game. This is a game - if cheating is easy, the game is worthless.

**Fix:** All scoring must be recalculated server-side. The client should only submit the raw guess (name, lat, lon, year, timestamp), and a PostgreSQL function should compute the score from the correct answer.

---

### 2. TypeScript is Effectively Disabled for All Database Operations
**Files:** `src/lib/supabase/auth.ts`, `src/lib/supabase/queries.ts`

Both critical Supabase files start with `// @ts-nocheck`, which completely disables TypeScript checking. Additionally, there are **29 instances** of `@ts-expect-error` / `@ts-ignore` / `@ts-nocheck` across the codebase, concentrated in the database and auth layers.

There's also a second Supabase client (`supabaseUntyped`) created specifically to bypass type checking:

```typescript
// client.ts
export const supabaseUntyped = createClient(supabaseUrl, supabaseAnonKey, { ... })
```

ALL lobby/multiplayer operations use this untyped client.

**Impact:** The entire data layer has no compile-time type safety. Misspelled column names, wrong data types, missing fields - none of these will be caught until runtime. This is the most dangerous place to disable type checking because it's where your data integrity lives.

**Fix:** Generate proper Supabase types using `supabase gen types typescript`, update the `Database` interface in `types/database.ts` to include RPC functions, and remove every `@ts-nocheck` and `@ts-expect-error`.

---

### 3. No Automated Tests of Any Kind
There is not a single test file in this entire repository. No unit tests, no integration tests, no end-to-end tests. The project's only testing strategy is "manual testing with console.log."

**Impact:** Every code change is a gamble. Refactoring is terrifying. Regression bugs are inevitable. You cannot confidently deploy anything.

**Fix:** At minimum: unit tests for scoring functions and fuzzy matching (pure functions, easy to test), integration tests for the Supabase query layer, and a few e2e tests for critical paths (free play game, daily challenge submission, multiplayer lobby flow).

---

### 4. 370+ Console.log Statements in Production Code
**Every file is littered with debug logging.** Some highlights:

- `useLobby.ts`: **122** console statements
- `realtime.ts`: **46** console statements
- `queries.ts`: **41** console statements
- `MultiplayerView.vue`: **29** console statements

Many contain emoji-heavy messages like:
```typescript
console.log('🏪 STORE: setLobby called with:', { lobby, player })
console.log('🎯 MultiplayerView mounted - cleaning up any existing lobby state')
console.log('📢 REALTIME: Player ready for next round via broadcast:', payload.payload)
```

**Impact:** Every user who opens DevTools will see hundreds of debug messages flooding their console. This is unprofessional, leaks implementation details, and impacts performance in hot paths (some of these are inside `computed` properties that run frequently).

**Fix:** Remove all console.log statements or replace with a proper logging library that can be disabled in production. At minimum, wrap everything in `if (import.meta.env.DEV)` checks.

---

### 5. Debug UI Permanently Visible in Multiplayer
**File:** `src/views/MultiplayerView.vue`

The multiplayer view includes a permanent debug panel and colored debug borders:

```html
<div class="mb-4 p-4 bg-noir-gold/10 border border-noir-gold/20 rounded">
  <h3 class="text-noir-gold font-bold mb-2">Debug Info</h3>
  <p><strong>Lobby:</strong> {{ lobby ? 'EXISTS' : 'NULL' }}</p>
  ...
  <button @click="debugSetLobby">Test State Management</button>
</div>

<div v-if="!lobby" class="border-2 border-red-500 p-4">
  <p class="text-red-400 mb-2">RENDERING: Create/Join Screen</p>
```

Every multiplayer section is wrapped in colored debug borders (red, green, blue, purple, yellow) with rendering state labels.

**Impact:** Real users see "RENDERING: Create/Join Screen" in red, a "Debug Info" panel, and a "Test State Management" button. This is embarrassing in production.

**Fix:** Remove all debug UI elements. Use Vue DevTools for development debugging instead.

---

## HIGH - Architectural problems that will cause pain at scale

### 6. Two State Management Libraries (Zustand + Pinia)
The project uses **both** Zustand (for auth, game, UI) and Pinia (for lobby). This was the result of a migration that was never completed:

- Zustand stores require a custom `useStore` composable to bridge to Vue reactivity
- Pinia stores work natively with Vue's reactivity system
- Components importing from both systems use different patterns
- Zustand's React dependency is still in `package.json`

**Impact:** Developers must learn two different state management patterns. The Zustand bridge composable adds complexity and potential for reactivity bugs. React is a devDependency in a Vue project, which is confusing and adds to install size.

**Fix:** Complete the migration to Pinia for all stores. Remove Zustand and React entirely.

---

### 7. React Listed as a Dependency
**File:** `package.json`

```json
"devDependencies": {
  "react": "^18.3.1",
```

React is listed as a devDependency in a Vue project. This was originally needed for Zustand but persists even after Zustand was configured for vanilla mode.

**Impact:** Confuses developers, wastes disk space on install, and may cause confusion with build tools or linters.

**Fix:** Remove React from dependencies entirely since Zustand is used in vanilla mode.

---

### 8. No Rate Limiting or Abuse Prevention
There is zero rate limiting on any operation:
- Lobby creation: A user can create thousands of lobbies
- Score submission: No throttling on daily score or multiplayer submissions
- Auth attempts: No brute-force protection beyond what Supabase provides
- Figure fetching: No caching, fetches `count * 3` figures every game start

**Impact:** A single malicious user can create thousands of stale lobbies, spam the leaderboard (via the client-side scoring exploit), or DDoS the Supabase instance by hammering the API.

**Fix:** Implement rate limiting via Supabase Edge Functions or PostgreSQL functions. Add client-side debouncing for API calls.

---

### 9. Figure Images Are Hotlinked from Wikipedia
All 130+ figure images are direct URLs to Wikipedia/Wikimedia Commons:

```sql
'[{"url": "https://upload.wikimedia.org/wikipedia/commons/...", ...}]'
```

**Impact:**
- **Violates Wikipedia's terms of service** for hotlinking at scale
- Wikipedia can change or remove these URLs at any time, breaking all images
- No CDN caching - every image load hits Wikipedia's servers
- CORS issues may arise depending on Wikimedia's headers
- Multiple scripts were already built to handle broken image URLs (evidence this is already a problem)

**Fix:** Download and self-host images (respecting licenses), serve via a CDN (Supabase Storage, Cloudflare R2, etc.), and store local URLs in the database.

---

### 10. Lobby Cleanup is Non-Functional
Lobbies have an `expires_at` field and there's a `cleanupFinishedLobbies` function:

```typescript
export async function cleanupFinishedLobbies(): Promise<void> {
  const { error } = await supabase.rpc('delete_expired_lobbies')
  if (error) throw error
}
```

But:
- The `delete_expired_lobbies` RPC function may not exist (not in any migration file)
- This function is never called anywhere in the app
- There's no cron job configured
- There's no Supabase Edge Function to trigger cleanup

**Impact:** Stale lobbies accumulate forever. The `lobbies` and `lobby_players` tables will grow unbounded.

**Fix:** Create the RPC function, set up a Supabase pg_cron job or Edge Function to run it periodically.

---

### 11. Auth Guard Race Condition
**File:** `src/router/guards.ts`

```typescript
export function authGuard(to, _from, next) {
  const auth = authStore.getState()
  if (!auth.user && !auth.loading) {
    next({ name: 'login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
}
```

When `loading` is `true`, the guard calls `next()` (allows access). During the initial app load, auth state is initializing (`loading: true`), so ALL protected routes are briefly accessible to unauthenticated users.

**Impact:** A fast page reload on `/multiplayer` or `/profile` will briefly render the page before the auth check completes and potentially redirects. In the worst case, the auth check completes and confirms the user IS authenticated, so the race condition doesn't redirect at all - but during that window, the page renders with `null` user data.

**Fix:** The guard should wait for auth initialization to complete before making a decision. Use a Promise that resolves once `loading` becomes `false`.

---

### 12. No Error Boundaries
The previous report claimed "comprehensive error boundaries" but there are none. The only error handling pattern in the app is try/catch blocks that `console.error` and sometimes show a toast (that is never rendered - see issue #4).

If any component throws during render, the entire app crashes with no recovery.

**Impact:** A single broken image URL, a Supabase timeout, or a malformed API response can crash the entire application.

**Fix:** Add a Vue error handler via `app.config.errorHandler` and consider component-level error boundaries using `<Suspense>` and `onErrorCaptured`.

---

### 13. Player Disconnect Not Detected
The `connected` field on `lobby_players` is set to `true` on join but **never updated**. There is no heartbeat, no presence tracking, and no disconnect detection:

```typescript
// lobbyStore.ts
const connectedPlayers = computed(() => {
  return players.value.filter(player => player.connected)
})
```

This computed property will always return all players because `connected` never changes.

**Impact:** If a player closes their browser during a multiplayer game, everyone else waits forever for their submission. The auto-submit on timeout partially mitigates this for the disconnected player's client, but the server has no way to know a player left.

**Fix:** Use Supabase Presence to track online status. Implement a server-side timeout that auto-submits (with score 0) for disconnected players.

---

## MEDIUM - Code quality issues that increase maintenance burden

### 14. Duplicate Type Definitions for RoundScore
There are TWO different `RoundScore` interfaces:

**`types/game.ts`** (snake_case):
```typescript
interface RoundScore {
  spatial_score: number
  temporal_score: number
  name_score: number
  speed_bonus: number
  total: number
  distance_km: number
  year_diff: number
}
```

**`types/score.ts`** (camelCase):
```typescript
interface RoundScore {
  spatial: number
  temporal: number
  name: number
  speed: number
  total: number
  distanceKm?: number
  yearDiff?: number
}
```

The code manually maps between them in `FreePlayView.vue` and `DailyChallengeView.vue`:
```typescript
const roundScore: RoundScore = {
  spatial: currentRound.score.spatial_score,
  temporal: currentRound.score.temporal_score,
  ...
}
```

**Impact:** Confusing, error-prone, and requires manual mapping everywhere scores are passed between layers.

**Fix:** Consolidate to a single `RoundScore` type.

---

### 15. Biased Random Shuffle Algorithm
**File:** `src/lib/supabase/queries.ts`

```typescript
const shuffled = data.sort(() => Math.random() - 0.5)
```

This is a well-documented incorrect shuffle. `Array.sort` with a random comparator does NOT produce a uniform distribution - some permutations are significantly more likely than others.

**Impact:** Some figures will appear more frequently than others in Free Play mode. Players may notice they keep seeing the same figures.

**Fix:** Use the Fisher-Yates shuffle algorithm.

---

### 16. Duplicate SQL Migration Numbers
```
007_enhance_image_fallback_support.sql
007_fix_anonymous_figure_access.sql
008_add_100_more_figures.sql
008_complete_fix.sql
```

Two pairs of migrations share the same prefix number.

**Impact:** Any migration runner that depends on sequential numbering will either skip one or error out. Manual execution requires knowing the correct order.

**Fix:** Renumber migrations to have unique sequential prefixes.

---

### 17. FigureCarousel References Undefined Variable
**File:** `src/components/game/FigureCarousel.vue`

```typescript
onUnmounted(() => {
  // ...
  imageCache.clear(); // imageCache is never declared!
});
```

`imageCache` is referenced in `onUnmounted` but is never declared anywhere in the component. This will throw a `ReferenceError` when the component unmounts.

**Impact:** JavaScript error on every round transition and page navigation away from gameplay. May silently fail or may cause visible errors depending on the browser.

**Fix:** Either declare `imageCache` as a `Map` or `Set`, or remove the `.clear()` call.

---

### 18. FigureCarousel Has Duplicate Image Watchers
**File:** `src/components/game/FigureCarousel.vue`

Two separate `watch` calls on `props.images`:

```typescript
// First watcher (line ~156)
watch(() => props.images, (newImages) => {
  if (newImages && newImages.length > 0) {
    currentIndex.value = 0;
    loadImageWithFallback();
  }
}, { immediate: true });

// Second watcher (line ~219)
watch(() => props.images, () => {
  currentIndex.value = 0;
  loading.value = true;
  imageError.value = false;
}, );
```

Both reset `currentIndex` to 0 when images change, but they set different state. The execution order is non-deterministic and they may conflict.

**Impact:** Potential race condition causing image flicker between rounds (which is a known bug in the existing report).

**Fix:** Consolidate into a single watcher.

---

### 19. Keyboard Event Listener Added at Module Level
**File:** `src/components/game/FigureCarousel.vue`

```typescript
// This runs when the module is evaluated, NOT when the component mounts
if (typeof window !== 'undefined') {
  window.addEventListener('keydown', handleKeydown);
}
```

This code runs at the top level of the `<script setup>` block, which means it executes when the component's module is first imported. If the component is used multiple times (e.g., in multiplayer where FigureCarousel could be instantiated per round), listeners stack up.

**Impact:** Memory leak and duplicate event handling. Arrow key presses trigger multiple carousel navigations.

**Fix:** Move the `addEventListener` into `onMounted` (it's already cleaned up in `onUnmounted`, but the add needs to be there too).

---

### 20. Toast System is Invisible
**Files:** `src/stores/uiStore.ts`, `src/App.vue`

The uiStore has a complete toast management system:
```typescript
showToast: (type, message, duration = 3000) => { ... }
removeToast: (id) => { ... }
```

And it's called throughout the app:
```typescript
uiStore.getState().showToast('success', 'Successfully signed in!')
uiStore.getState().showToast('error', 'Failed to load user profile')
```

But `App.vue` has no toast rendering component:
```vue
<template>
  <div id="app" class="min-h-screen bg-noir-bg noir-texture">
    <router-view />
    <!-- No toast component here -->
  </div>
</template>
```

**Impact:** Users never see success/error feedback. Sign-in confirmations, error messages, and all toast notifications silently go nowhere.

**Fix:** Create a `ToastContainer` component and add it to `App.vue`.

---

### 21. `any` Types Everywhere
The codebase is riddled with explicit `any` types:

- `src/views/DailyChallengeView.vue`: `const scores = ref<any[]>([])`; `const finalResults = ref<any>(null)`
- `src/lib/supabase/queries.ts`: `data?.map((entry: any, ...)`
- `src/lib/supabase/realtime.ts`: Every callback parameter is `any`
- `src/types/database.ts`: `images: any // JSONB`
- `src/stores/lobbyStore.ts`: multiple `any` in event handlers

**Impact:** Defeats the purpose of TypeScript. Type errors propagate silently through the `any` escape hatches.

---

### 22. LobbyView.vue is a Dead Route
**File:** `src/views/LobbyView.vue`

```vue
<script setup lang="ts">
const message = ref('Lobby - Coming Soon')
</script>
<template>
  <div>{{ message }}</div>
</template>
```

This is a registered route (`/lobby/:code`) with an auth guard, meaning authenticated users can navigate here and see "Coming Soon."

**Impact:** Broken user experience if any link or redirect points to this route.

**Fix:** Either implement it or remove the route entirely. The multiplayer flow uses `MultiplayerView.vue` directly.

---

### 23. No Content Security Policy or Security Headers
There is no CSP configuration, no security headers in the Vite config, and no `vercel.json` with security headers. The app loads external resources (Wikipedia images, OpenStreetMap tiles) without any CSP whitelist.

**Impact:** Vulnerable to XSS attacks. No protection against script injection. External image sources could be vectors for content injection.

**Fix:** Configure CSP headers in the Vercel deployment config. At minimum: `default-src 'self'; img-src 'self' https://*.wikimedia.org https://*.openstreetmap.org; script-src 'self'`

---

### 24. No Password Reset or Email Verification
Despite Supabase supporting both out of the box, neither is implemented:
- No "Forgot Password" link or flow
- The signup disclaimer says "No email verification required" as a feature
- No email verification enforcement in Supabase Auth config

**Impact:** Users who forget passwords are locked out. Fake email addresses can be used to create accounts.

---

### 25. Speed Bonus Formula Documentation is Wrong
**File:** `src/lib/scoring/speedBonus.ts`

The comment says:
```
 * - 0-10s: 100 points
```

But the actual formula `110 - floor(timeSeconds / 2) * 10`:
- 0-1s: `110 - 0 = 110` → clamped to 100
- 2-3s: `110 - 10 = 100`
- 4-5s: `110 - 20 = 90`

So 0-3s gives 100 points, not 0-10s. The documented brackets are all wrong.

**Impact:** Misleading for any developer working on scoring.

---

### 26. Multiplayer Score Persistence Race Condition
**File:** `src/views/MultiplayerView.vue`

Round scores are updated both locally and in the database in sequence, but the database update is fire-and-forget with a try/catch:

```typescript
for (const [userId, additionalScore] of Object.entries(scoreUpdates)) {
  lobbyStore.updatePlayerScore(userId, newScore)  // local update
  try {
    await updatePlayerScore(lobby.value!.id, userId, newScore)  // DB update
  } catch (error) {
    console.error('Failed to persist score to database:', error)
    // Continue with local state update even if DB fails
  }
}
```

If the DB update fails, the local state shows a score that doesn't exist in the database. When `LobbyResults` loads, it re-fetches from the DB and shows the real (lower) score.

**Impact:** Players might see their score drop on the results screen. The "winner" could change between the last round reveal and the final results.

---

### 27. `useLobby` Composable Creates Multiple Supabase Channels
**File:** `src/composables/useLobby.ts`

Every component that calls `useLobby()` gets its own instance. `LobbyCreateJoin`, `LobbyWaitingRoom`, `LobbyGameplay`, and `MultiplayerView` all call `useLobby()`. Each instance sets up its own realtime subscription.

In `broadcastLobbyEvent`:
```typescript
const channel = supabase.channel(`lobby:${lobbyId}`)
```

This creates a NEW channel object every time a broadcast is sent (it doesn't reuse the subscription channel). Supabase channels are multiplexed by name, but creating fresh channel instances for one-off broadcasts is wasteful.

**Impact:** Multiple overlapping subscriptions, duplicate event handlers, and potential for receiving events multiple times (which is why there are deduplication checks in the submission handler).

---

### 28. No Graceful Degradation for Missing Supabase
**File:** `src/lib/supabase/client.ts`

```typescript
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables.')
}
```

This throws during module evaluation, which crashes the entire application before Vue even mounts.

**Impact:** If env vars are missing (common during CI, testing, or local setup), the user sees a blank white page with a console error. No helpful message is displayed.

---

## LOW - Polish issues and minor concerns

### 29. Development Test Connection Loaded in Dev Mode
**File:** `src/main.ts`

```typescript
if (import.meta.env.DEV) {
  import('./lib/supabase/test-connection')
}
```

This imports and evaluates the test connection script every time the dev server starts. It runs queries against the database automatically.

### 30. `getRandomFigures` Fetches 3x Then Discards
**File:** `src/lib/supabase/queries.ts`

```typescript
const { data } = await supabase.from('figures').select('...').limit(count * 3)
const shuffled = data.sort(() => Math.random() - 0.5)
const selected = shuffled.slice(0, Math.min(count, shuffled.length))
```

To get 10 random figures, it fetches 30 from the database, shuffles them client-side, and throws away 20. This is wasteful - Supabase/PostgreSQL can do random selection server-side.

### 31. Multiple `useLobby()` Calls Per Component Tree
Components deep in the multiplayer tree (`LobbyCreateJoin`, `LobbyWaitingRoom`, `LobbyGameplay`) each independently call `useLobby()`, which creates independent composable instances. Each registers its own `onUnmounted` cleanup handler. When components unmount, the cleanup may interfere with still-active sibling components' subscriptions.

### 32. `handleNext` in RevealPhase Has Inconsistent Auto-Advance
The RevealPhase component starts a countdown timer that calls `handleNext()` when it reaches zero. But `handleNext()` in multiplayer mode only marks the player as ready - it doesn't actually advance. So the auto-advance countdown fires, marks the player ready, and... nothing visible happens. The countdown message disappears but the player is still waiting.

---

## Summary of Fixes by Priority

### Do Before Any Production Deploy
1. Move score calculation to the server
2. Remove all debug UI from MultiplayerView
3. Remove or gate all 370+ console.log statements
4. Fix the `imageCache` ReferenceError in FigureCarousel
5. Implement toast rendering in App.vue
6. Fix auth guard race condition
7. Renumber duplicate SQL migrations

### Do Before Scaling to Many Users
8. Self-host images instead of hotlinking Wikipedia
9. Add rate limiting on lobby creation and submissions
10. Implement player disconnect detection
11. Add automated testing
12. Complete Pinia migration (remove Zustand + React)
13. Fix TypeScript (`@ts-nocheck` removal, proper Supabase types)
14. Add error boundaries
15. Implement lobby cleanup cron job

### Do When You Have Time
16. Consolidate duplicate RoundScore types
17. Fix biased shuffle algorithm
18. Remove LobbyView stub route
19. Add CSP headers
20. Implement password reset
21. Fix speed bonus documentation
