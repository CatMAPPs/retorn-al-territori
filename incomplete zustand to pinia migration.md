🚨 CRITICAL DISCOVERY: Incomplete Zustand → Pinia Migration
Your codebase has a major architectural inconsistency that explains many issues:
🔍 What I Found:
✅ Migrated to Pinia:
lobbyStore.ts - Uses defineStore (Pinia) ✅
Multiplayer functionality uses Pinia stores ✅
❌ Still Using Zustand:
gameStore.ts - Uses createStore from 'zustand/vanilla' ❌
authStore.ts - Uses createStore from 'zustand/vanilla' ❌
uiStore.ts - Uses createStore from 'zustand/vanilla' ❌
useStore.ts - Zustand wrapper composable ❌
📍 Impact on Different Game Modes:
Multiplayer Mode (uses Pinia):
MultiplayerView.vue → lobbyStore (Pinia) ✅
Free Play Mode (uses Zustand):
FreePlayView.vue → gameStore + uiStore (Zustand) ❌
HomeView.vue → authStore (Zustand) ❌
🎯 Problematic Code Snippets:
1. Zustand Stores Still Active:
// src/stores/gameStore.ts (Zustand - NOT migrated)import { createStore } from 'zustand/vanilla'export const gameStore = createStore<GameStore>((set) => ({ ... }))// src/stores/authStore.ts (Zustand - NOT migrated)  import { createStore } from 'zustand/vanilla'export const authStore = createStore<AuthStore>((set) => ({ ... }))// src/stores/uiStore.ts (Zustand - NOT migrated)import { createStore } from 'zustand/vanilla'
2. Zustand Wrapper Still Used:
// src/composables/useStore.ts (Legacy Zustand wrapper)import type { StoreApi } from 'zustand/vanilla'export function useStore<T>(store: StoreApi<T>): Ref<T> {  // Makes Zustand reactive in Vue}
3. Mixed Usage in Components:
// FreePlayView.vue - Uses Zustandimport { gameStore } from '@/stores/gameStore'import { useStore } from '@/composables/useStore'const game = useStore(gameStore) // Zustand wrapper// MultiplayerView.vue - Uses Pinia  import { useLobbyStore } from '@/stores/lobbyStore'const lobbyStore = useLobbyStore() // Pinia
🚨 Why This Matters:
Two State Management Systems running simultaneously
Inconsistent Reactivity between game modes
Potential Conflicts between Zustand and Pinia stores
Mixed API Patterns (some components use Pinia, others Zustand)
Free Play Mode may have different bugs than Multiplayer due to different state management
📋 Recommended Next Steps:
Option A: Complete Pinia Migration
Migrate gameStore.ts, authStore.ts, uiStore.ts to Pinia
Update all components to use Pinia consistently
Remove useStore.ts composable
Option B: Revert to Zustand
Migrate lobbyStore.ts back to Zustand
Keep everything consistent with Zustand
Option C: Hybrid Approach (Risky)
Keep both systems but clearly separate them
Document which components use which system
My Recommendation: Complete the Pinia migration since you already started it and Multiplayer works with Pinia.
The incomplete migration is likely causing subtle reactivity issues and inconsistencies between game modes. This could explain why Multiplayer has different behavior than expected.