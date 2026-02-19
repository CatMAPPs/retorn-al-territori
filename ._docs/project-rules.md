# **HistoGuesser — AI-First Project Codebase Rules (v1.0)**

This document synthesizes core requirements from the Product Requirements Document (PRD), Technical Stack Guidelines (`tech-stack.md`), User Flow (`user-flow.md`), and UI/Theme Rules (`ui-theme-rules.md`) into a single source of truth for all engineering and design conventions.

The primary goal is an **AI-first codebase** that is modular, highly navigable, and maintainable, with **all files limited to a maximum of 500 lines.**

## **1\. Directory Structure and Modularity**

The codebase must follow a clear, domain-driven structure, prioritizing small, focused files that adhere to the 500-line limit.

### **1.1 Root Structure**

/src  
  /assets                   \# Static files (images, fonts, initial map tiles)  
  /components               \# Reusable Vue components (PascalCase.vue)  
    /gameplay               \# Components related to core game loop (Map, Timeline, Input)  
    /layout                 \# Structural components (Header, MainMenu, Footer)  
    /ui                     \# Design system atoms/molecules (Button, Card, Modal)  
  /composables              \# Vue Composition API functions (useX.ts)  
    /game                   \# Game logic, scoring, round timers  
    /map                    \# Leaflet initialization, pin placement logic  
    /system                 \# Auth, state syncing with Zustand  
  /services                 \# Backend integration and heavy utility logic (XService.ts)  
    /api                    \# Supabase API wrappers  
    /scoring                \# Core scoring functions (Haversine, fuzzy name matching)  
  /stores                   \# Zustand global state management (useXStore.ts)  
  /types                    \# Shared TypeScript interfaces and utility types  
  /views                    \# Top-level route components (MainMenuView.vue, GameplayView.vue)  
  App.vue  
  main.ts

### **1.2 File Naming Conventions**

| Category | Convention | Example | Notes |
| ----- | ----- | ----- | ----- |
| **Components** | `PascalCase.vue` | `TimerDisplay.vue`, `MainMenu.vue` | Must use `<script setup>` and Composition API. |
| **Composables/Hooks** | `camelCase.ts` or `useCamelCase.ts` | `useRoundTimer.ts`, `scoringLogic.ts` | Functions should be small and single-purpose. |
| **Stores (Zustand)** | `useXStore.ts` | `useGameStore.ts`, `useLobbyStore.ts` | Export typed state accessors/actions. |
| **Services/API** | `XService.ts` | `SupabaseService.ts`, `NameMatcherService.ts` | Encapsulate side-effects and backend interactions. |
| **Types** | `kebab-case.d.ts` or `kebab-case.ts` | `figure-types.ts`, `lobby-interface.ts` | Centralized type definitions. |

## **2\. AI-First Coding Standards**

These rules ensure code is modular, well-documented, and easy for large language models to analyze, refactor, and extend.

### **2.1 Documentation and Commentation**

* **File Headers:** Every file must begin with a descriptive block explaining its purpose, dependencies, and high-level role in the system.  
* **Function/Method Comments:** All exported functions, component methods, and composable functions **must** use JSDoc-style comments (or Vue/TypeScript equivalents) clearly stating:  
  * **Purpose:** What the function does.  
  * **`@param`:** The name, type, and description of every input parameter.  
  * **`@returns`:** The type and description of the return value.

/\*\*  
 \* Calculates the total score for a round based on accuracy components.  
 \* @param distanceKm \- Haversine distance from guess to true location (km).  
 \* @param yearDiff \- Absolute difference between guessed and true birth year.  
 \* @param nameMatchTier \- The name accuracy tier (0, 200, 400, 600, 800).  
 \* @param timeSeconds \- Time taken to submit the guess (for speed bonus).  
 \* @returns The final round score (max 2500).  
 \*/  
export function calculateRoundScore(...) { ... }

### **2.2 Code Structure and Limits**

* **Line Count Limit:** **No single file shall exceed 500 lines of executable code** (excluding comments, blank lines, and imports). If a file approaches this limit, it must be split into smaller, domain-specific components, stores, or utility functions.  
* **Small Components:** Components must maintain a single responsibility (`1 responsibility per component` \- tech-stack.md). For example, a map component should delegate pin placement logic to a `useMap` composable.  
* **Separation of Concerns:** Keep presentation logic (`.vue` templates) separate from state management (`/stores`) and side-effects (`/services`).

## **3\. Technical Stack Constraints and Conventions**

(Derived from `tech-stack.md` and `PRD.md`)

### **3.1 Frontend (Vue 3 / TypeScript)**

* **API:** Exclusive use of the **Composition API** and `script setup`.  
* **Typing:** Must use `noImplicitAny: true` in `tsconfig`. Centralize complex types in `/types` and reuse them.  
* **Component Logic:** Use composables (`/composables`) for shared, reusable logic (e.g., `useAuth`, `useGame`).

### **3.2 State Management (Zustand)**

* **Structure:** Stores must be organized by domain (`useGameStore`, `useLobbyStore`).  
* **Immutability:** Always ensure state is updated immutably, especially for nested objects and arrays.  
* **Side Effects:** Async calls (Supabase API) should be managed within store actions or in the `/services` layer.

### **3.3 Backend (Supabase)**

* **Security (RLS):** Row-Level Security policies must be implemented from the start (`Use RLS policies early...` \- tech-stack.md).  
* **Validation:** Scoring logic must be validated server-side before writing to leaderboards (`Client-trusted scoring: Always validate scores server-side...` \- tech-stack.md).  
* **Timing Authority:** Server-side (Supabase/Postgres functions) must be authoritative for game timers and round progression to prevent cheating.

## **4\. Design and UI/UX Rules**

(Derived from `ui-theme-rules.md` and `user-flow.md`)

### **4.1 Visual Theme**

* **Theme:** **Film Noir Skeuomorphism** (`ui-theme-rules.md`).  
* **Palette:** Strict adherence to defined color tokens (e.g., `noir-bg: #3B3A3A`, `noir-surface: #000000`, `noir-text: #F1E6D6`).  
* **Aesthetics:** Use subtle shadows, borders (`gold micro-border`), and inner bevels to imply depth and tactile feel. Avoid pure white and bright saturated colors.

### **4.2 Gameplay Layout (Critical Constraint)**

* **Single-Screen Guarantee:** The interactive map, figure image, name input, and timeline slider **MUST all be visible on the same screen simultaneously** for `md` (tablet) and larger breakpoints. No hidden tabs or panels are allowed for these core elements.  
* **Responsiveness:** Mobile layout (`sm`) must be a clean vertical stack. Desktop layout (`md`/`lg`/`xl`) should use a two-column, center-focused design.

### **4.3 User Flow and Navigation**

* **SPA Behavior:** All screen changes (menu, gameplay, results, modals) must occur **without full page reloads** (`Continuous flow` \- user-flow.md).  
* **Modals:** Sign-up, login, leaderboards, and settings must appear as non-blocking overlays/modals.  
* **Guest Conversion:** Free Play results screens for guests **must** trigger a soft prompt (modal) to sign up.

## **5\. Game Logic and Scoring Conventions**

(Derived from `PRD.md`)

### **5.1 Data Modeling**

* **Coordinates:** All map coordinates must use the consistent model `{ lat: number; lon: number }` and be stored as floats with 6 decimal places.  
* **Year Storage:** Birth years must be stored as integers, using **negative values for BCE** (e.g., 100 BCE is stored as \-100).

### **5.2 Scoring Implementation**

* **Scoring Service:** All scoring calculations (Location, Temporal, Name, Speed Bonus) must be encapsulated within the dedicated `/services/scoring` layer to ensure consistency across the client display and server validation.  
* **Tiebreaker:** Leaderboards must use `score DESC, completed_at ASC` (higher score first, earlier completion time second) as the definitive tiebreaker.  
* **Name Matching:** Use the configured fuzzy matching library (`Fuse.js` or `Levenshtein-js`) along with the figure's canonical `aliases` list for tiered scoring.

