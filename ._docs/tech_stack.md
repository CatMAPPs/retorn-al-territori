# HistoGuesser — Tech Stack Guidelines

This document captures best practices, conventions, limitations, and common pitfalls for each technology named in the PRD. It is intended as a reference for engineers building the MVP and for future contributors.

---

## 1. Frontend

### 1.1 Vite 7 + Vue 3.5 + TypeScript 5.6

**Overview & Why**
- Vite 7 provides fast dev server and HMR with improved performance. Vue 3.5 gives a component-first approach and Composition API to organize logic. TypeScript 5.6 adds type-safety across components and stores with enhanced inference.

**Best practices**
- Use the Composition API with clear `setup()` separation of concerns (hooks/composables for shared logic).
- Keep components small and focused: 1 responsibility per component.
- Use `defineComponent` + exported `props` interfaces for strict typing.
- Prefer `script setup` syntax for succinct components and better TS inference.
- Centralize global types (e.g., `types/figure.ts`, `types/lobby.ts`) and reuse them in frontend and backend codegen when possible.
- Use Vite's aliasing (`@/`) for imports and keep path lengths short.
- Enable `esbuild`/`tsconfig` paths so type checking and editor tooling work correctly.

**Conventions**
- File naming: `PascalCase.vue` for components; `kebab-case` for utility files and composables (`useMap.ts`).
- CSS scope: Use Tailwind for layout and small utility CSS, but keep component-scoped CSS only for highly specific visual tweaks.
- Prop validation: Always declare prop types and defaults. Use `readonly` where appropriate in TypeScript.

**Performance**
- Lazy-load heavy components (map, multiplayer lobby) with dynamic imports.
- Use Vite’s `build.rollupOptions` to separate vendor chunks if needed.
- Avoid large inline images; use Supabase image transformation (or a CDN) to serve optimized formats and sizes.

**Pitfalls**
- Mixing Options API and Composition API inconsistently — pick one style per project. Prefer Composition API.
- Relying on implicit `any` from TypeScript config. Use `noImplicitAny` in `tsconfig` and fix issues.
- Large single-file components: split into presentational + container components.

---

### 1.2 TailwindCSS

**Overview & Why**
- Utility-first approach enables rapid UI iteration and consistent spacing/design system without heavy CSS files.

**Best practices**
- Create design tokens (Tailwind config) for colors, fonts, radii, and breakpoints to keep the look consistent.
- Use component classes (e.g., `class="btn btn-primary"`) via a small application CSS file to avoid repeating long utility lists.
- Keep responsive variants consistent: prefer mobile-first utilities and explicitly test `sm`, `md`, `lg`, `xl` breakpoints mentioned in the PRD.

**Conventions**
- Use `@apply` sparingly for shared component styling.
- Document common utility patterns in a `UI.md` or style guide file (e.g., card sizes, spacing rules).

**Performance**
- Purge unused CSS via Tailwind’s `content` option; ensure any dynamic class names are whitelisted.

**Pitfalls**
- Dynamic class names (string concatenation) can be removed by Purge. Use a small class map or safelist.
- Overuse of `!important` via `!` modifier hides layout bugs.

---

### 1.3 Zustand 5 (State Management)

**Overview & Why**
- A lightweight state solution (v5 with improved TypeScript support). Works well with small-to-medium scale apps and avoids Redux complexity.

**Best practices**
- Organize stores by domain: `useAuthStore`, `useGameStore`, `useLobbyStore`, `useUIStore`.
- Keep store state serializable. Avoid storing DOM nodes, complex class instances, or functions in state.
- Use selectors to avoid unnecessary re-renders in components.
- Type the store with TypeScript interfaces. Export typed hooks to ensure consistent use.

**Conventions**
- Names: use `useXStore` prefix. Each store file should export hooks and typed action helpers.
- Keep side-effects (async calls) in action functions within the store, or in a separate `services/` layer that the store calls.

**Pitfalls**
- Overloading a single global store with unrelated concerns — split stores early.
- Mutating nested objects without immutable patterns can cause updates to be missed. Always replace objects/arrays immutably.

---

## 2. Mapping

### 2.1 Leaflet.js + OpenStreetMap tiles

**Overview & Why**
- Leaflet is lightweight and provides lat/lon precision and good mobile performance. OpenStreetMap is free and avoids licensing issues for MVP.

**Best practices**
- Use vector tiles or a performant tile host; prefer raster tiles with proper caching headers for MVP.
- Debounce map events (e.g., clicks) to prevent accidental double-sets.
- Use a controlled map component: centralize map state in a composable (e.g., `useMap`) and sync with Zustand store.
- Provide a small inset map or mini-map on mobile if space allows for better UX when placing pins.

**Conventions**
- Map coordinate model: always use `{ lat: number; lon: number }` consistently.
- Store figure coordinates as floats with 6 decimal places to ensure precision across the stack.

**Performance**
- Lazy-load Leaflet and map tiles only when entering gameplay screens. De-initialize map on leaving screen to free memory on mobile.
- Use minimal controls and avoid heavy overlays.

**Pitfalls**
- Leaflet and SSR: if any server-side rendering path exists, ensure Leaflet is only used in client-side hooks.
- Tile rate limiting: free tile servers sometimes throttle; have a fallback or use Supabase + CDN for images where possible.

---

## 3. Backend & Realtime

### 3.1 Supabase (Postgres, Auth, Realtime, Storage)

**Overview & Why**
- Supabase bundles auth, Postgres, realtime, and storage which accelerates MVP development and reduces infra complexity.

**Best practices**
- Use Supabase Auth for email/password and store user metadata in a `users` table that syncs with Auth user IDs.
- Use row-level security (RLS) policies early even in MVP to avoid data leakage.
- Keep heavy logic in Postgres (SQL functions) where it makes sense (e.g., leaderboard aggregation) for performance.
- Use Supabase Realtime for lobby events but wrap it with server-side validation where necessary to prevent cheating.

**Database design & queries**
- Index commonly queried columns: `figure_id`, `user_id`, `challenge_date`, `room_code`.
- Use materialized views for expensive leaderboard queries updated on a schedule or via triggers.
- Store computed scoring snapshots (per round) in `lobby_submissions` and `daily_scores` to keep historical answers immutable.

**Security**
- Use RLS policies that default to deny and then explicitly allow needed operations.
- Never rely on client-side checks for score validation. Validate scoring server-side before writing leaderboard entries.
- Sanitize/validate all user inputs server-side (names, coordinates, years).

**Realtime & Multiplayer**
- Supabase Realtime is good for MVP but has limits on throughput. Keep message sizes small and send only diffs where possible.
- For fairness and anti-cheat, make the server authoritative for timers, round progression, and final score calculation.
- Implement server-side timeouts to remove stale lobbies and disconnected players.

**Storage (Images)**
- Use Supabase Storage or a CDN in front of it. Store image metadata and license info in the DB.
- For licensing compliance, require an ingestion process with manual approval for each figure image.

**Pitfalls**
- Supabase free tier limits connections and realtime messages. For scale, plan a migration path to dedicated realtime (WebSocket) servers.
- Overuse of client-side stored credentials/tokens without refresh handling.

---

## 4. Hosting & CDN

### 4.1 Vercel (Frontend)

**Why**
- Vercel offers fast deployments, CDN, and static hosting ideal for Vite-built SPAs.

**Best practices**
- Use edge headers and caching for static assets. Keep HTML responses short and dynamic.
- Configure environment variables securely via Vercel project settings.
- Use Preview Deploys (PR previews) for QA and design review.

**Pitfalls**
- Relying on serverless functions for heavy realtime logic — offload to Supabase or dedicated backend.

---

## 5. Utilities, Libraries & Tooling

### 5.1 Levenshtein / Fuse.js (Fuzzy Matching)

**Usage**
- Use for name matching with alias tables to produce the tiered scoring described in the PRD.

**Best practices**
- Normalize strings (lowercase, strip punctuation, normalize diacritics) before fuzzy comparison.
- Precompute aliases and canonical forms on figure ingestion; store them in DB to avoid recomputing expensive operations in real time.

**Pitfalls**
- Relying on fuzzy matching exclusively for malicious or ambiguous names — combine with alias table and human-reviewed aliases.

---

### 5.2 Day.js

**Usage**
- Lightweight date handling for challenge rollovers (midnight UTC), streak calculations, and timestamps.

**Best practices**
- Always operate in UTC for challenge boundaries and leaderboard tie-breakers.
- Convert to user local timezone only for display.

**Pitfalls**
- Mistaking client local time for server time when enforcing daily limits.

---

### 5.3 Chart.js (optional for stats)

**Guidance**
- Use only for non-critical stats panels (profile, progress charts). Keep charts lightweight and lazy-loaded.

---

## 6. Testing & CI/CD

**Unit tests**
- Test scoring functions thoroughly (boundary values, negative years/BCE handling, distance formulas).
- Mock map interactions for UI tests; focus on the data path rather than Leaflet internals.

**Integration tests**
- Test end-to-end flows: Free Play guest flow, signup flow, Daily Challenge submission and leaderboard write.
- Simulate multiplayer with automated clients to validate timing and race conditions.

**CI/CD**
- Run type checks (`tsc --noEmit`), linting, unit tests, and e2e tests on PRs.
- Use Vercel previews for manual QA before merging to `main`.

**Quality gates**
- Enforce `noImplicitAny` and code formatting (Prettier + ESLint). Include a Tailwind linter if useful.

---

## 7. DevOps & Observability

**Monitoring**
- Track key metrics: concurrent lobbies, daily challenge takers, API error rates, image load failures.
- Instrument Supabase function logs and Vercel serverless logs.

**Error handling**
- Centralize error messages and show user-friendly messages for network failures ("Reconnecting..." for lobby state).

**Rate limits & quotas**
- Protect heavy endpoints with rate limits (e.g., leaderboard requests, image ingestion). Cache frequently requested data.

**Backups**
- Regular backups of Postgres data and exports of the `figures` table with associated images and license metadata.

---

## 8. Accessibility & Internationalization

**Accessibility**
- Even if MVP deprioritizes full accessibility, ensure keyboard navigation for core gameplay controls and focus states on inputs.
- Use semantic HTML and aria labels for map controls and submit buttons.

**Internationalization**
- Keep UI strings in a single i18n catalog from day one. Day.js supports locale formatting for date display.

---

## 9. Migration & Scaling Considerations

**Realtime scaling**
- If Supabase realtime becomes bottleneck, plan to move to a dedicated WebSocket service (Node + Redis pub/sub) while keeping Postgres as the source of truth.

**Leaderboard scale**
- Use materialized views or sharded leaderboards (by region) if global leaderboard queries become expensive.

**Image scale**
- Move image serving to a CDN with signed URLs for large-scale traffic.

---

## 10. Common Pitfalls & How to Avoid Them

1. **Client-trusted scoring**: Always validate scores server-side before persisting to leaderboards. Use the same scoring logic on the server and mark all client-side scores as tentative until verified.
2. **Token expiration surprises**: Implement silent refresh or fallback to the login modal to avoid losing a user mid-game.
3. **Map drift on mobile**: Disable map gestures that interfere with UI scrolling; require a clear "Place pin" mode on small screens.
4. **Purge/CSS mismatch**: Whitelist dynamic Tailwind classes to avoid missing UI styles in production.
5. **Realtime message bloat**: Send only minimal state diffs; batch broadcasts where possible.

---

## 11. Conventions Checklist (Quick Reference)

- `tsconfig`: `noImplicitAny: true`, `strict: true` where feasible.
- `eslint` + `prettier` enforced in CI.
- `tailwind.config` tokens for colors, sizes, spacing.
- `stores/` folder contains small, focused Zustand stores.
- `composables/` or `hooks/` for map and audio logic.
- `services/` for Supabase API wrappers and server validation functions.
- `types/` shared type definitions used across frontend + backend where possible.
- `images/` ingestion pipeline requires manual review and license metadata.

---

**End of Document — `tech-stack.md`**

