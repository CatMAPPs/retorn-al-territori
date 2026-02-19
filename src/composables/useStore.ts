import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import type { StoreApi } from 'zustand/vanilla'

/**
 * Create a Vue composable from a Zustand vanilla store
 * This makes the store reactive in Vue components
 */
export function useStore<T>(store: StoreApi<T>): Ref<T> {
  const state = ref(store.getState()) as Ref<T>

  let unsubscribe: (() => void) | null = null

  onMounted(() => {
    // Subscribe to store changes
    unsubscribe = store.subscribe((newState) => {
      state.value = newState
    })
  })

  onUnmounted(() => {
    // Cleanup subscription
    if (unsubscribe) {
      unsubscribe()
    }
  })

  return state
}

