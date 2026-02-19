import { ref, computed, readonly, onMounted, onUnmounted } from 'vue'

export interface RoundTimerOptions {
  duration?: number // Duration in seconds (default: 45 for Daily Challenge)
  autoStart?: boolean // Whether to start automatically
  onExpire?: () => void // Callback when timer expires
  onTick?: (remaining: number) => void // Callback on each tick
}

export function useRoundTimer(options: RoundTimerOptions = {}) {
  const {
    duration = 45,
    autoStart = false,
    onExpire,
    onTick
  } = options

  // Reactive state
  const timeRemaining = ref(duration)
  const isRunning = ref(false)
  const isExpired = ref(false)
  const startTime = ref<number | null>(null)
  const endTime = ref<number | null>(null)

  let intervalId: number | null = null

  // Computed properties
  const timeElapsed = computed(() => {
    if (!startTime.value) return 0
    return Math.floor((Date.now() - startTime.value) / 1000)
  })

  const progress = computed(() => {
    return Math.max(0, Math.min(1, timeRemaining.value / duration))
  })

  const formattedTime = computed(() => {
    const minutes = Math.floor(timeRemaining.value / 60)
    const seconds = timeRemaining.value % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  })

  const isUrgent = computed(() => {
    return timeRemaining.value <= 10 && timeRemaining.value > 0
  })

  // Timer functions
  const start = () => {
    if (isRunning.value || isExpired.value) return

    isRunning.value = true
    isExpired.value = false
    startTime.value = Date.now()
    endTime.value = startTime.value + (duration * 1000)

    intervalId = window.setInterval(() => {
      const now = Date.now()
      const remaining = Math.max(0, Math.ceil((endTime.value! - now) / 1000))

      timeRemaining.value = remaining

      // Call tick callback
      onTick?.(remaining)

      // Check if expired
      if (remaining <= 0) {
        expire()
      }
    }, 100) // Update every 100ms for smooth display
  }

  const pause = () => {
    if (!isRunning.value) return

    isRunning.value = false
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
  }

  const resume = () => {
    if (isRunning.value || isExpired.value) return
    start()
  }

  const reset = () => {
    pause()
    timeRemaining.value = duration
    isRunning.value = false
    isExpired.value = false
    startTime.value = null
    endTime.value = null
  }

  const expire = () => {
    pause()
    timeRemaining.value = 0
    isExpired.value = true
    onExpire?.()
  }

  const stop = () => {
    pause()
    isExpired.value = true
  }

  // Get elapsed time in seconds (for speed bonus calculation)
  const getElapsedSeconds = (): number => {
    return timeElapsed.value
  }

  // Auto-start if requested
  if (autoStart) {
    onMounted(() => {
      start()
    })
  }

  // Cleanup on unmount
  onUnmounted(() => {
    if (intervalId) {
      clearInterval(intervalId)
    }
  })

  return {
    // State
    timeRemaining: readonly(timeRemaining),
    isRunning: readonly(isRunning),
    isExpired: readonly(isExpired),

    // Computed
    timeElapsed,
    progress,
    formattedTime,
    isUrgent,

    // Methods
    start,
    pause,
    resume,
    reset,
    expire,
    stop,
    getElapsedSeconds
  }
}
