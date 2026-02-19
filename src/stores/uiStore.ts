import { createStore } from 'zustand/vanilla'

interface Toast {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  duration?: number
}

interface Modal {
  id: string
  component: string
  props?: Record<string, unknown>
}

interface UIStore {
  toasts: Toast[]
  modals: Modal[]
  loading: boolean
  isSidebarOpen: boolean

  // Toast actions
  showToast: (type: Toast['type'], message: string, duration?: number) => void
  removeToast: (id: string) => void

  // Modal actions
  openModal: (component: string, props?: Record<string, unknown>) => void
  closeModal: (id: string) => void
  closeAllModals: () => void

  // Loading actions
  setLoading: (loading: boolean) => void

  // Sidebar actions
  toggleSidebar: () => void
  setSidebarOpen: (isOpen: boolean) => void
}

const store = createStore<UIStore>((set, get) => ({
  toasts: [],
  modals: [],
  loading: false,
  isSidebarOpen: false,

  showToast: (type, message, duration = 3000) => {
    const id = `toast-${Date.now()}-${Math.random()}`
    const toast: Toast = { id, type, message, duration }

    set((state) => ({
      toasts: [...state.toasts, toast],
    }))

    // Auto-remove toast after duration
    if (duration > 0) {
      setTimeout(() => {
        get().removeToast(id)
      }, duration)
    }
  },

  removeToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }))
  },

  openModal: (component, props) => {
    const id = `modal-${Date.now()}`
    const modal: Modal = { id, component, props }

    set((state) => ({
      modals: [...state.modals, modal],
    }))
  },

  closeModal: (id) => {
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    }))
  },

  closeAllModals: () => {
    set({ modals: [] })
  },

  setLoading: (loading) => set({ loading }),

  toggleSidebar: () => {
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen }))
  },

  setSidebarOpen: (isOpen) => set({ isSidebarOpen: isOpen }),
}))

// Export vanilla store
export const uiStore = store

