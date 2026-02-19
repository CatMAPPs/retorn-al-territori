/**
 * Application-wide constants
 */

// Scoring constants
export const MAX_ROUND_SCORE = 2500
export const MAX_GAME_SCORE = 25000
export const MAX_SPATIAL_SCORE = 800
export const MAX_TEMPORAL_SCORE = 800
export const MAX_NAME_SCORE = 800
export const MAX_SPEED_BONUS = 100

// Game constants
export const ROUNDS_PER_GAME = 10
export const MULTIPLAYER_MIN_PLAYERS = 2
export const MULTIPLAYER_MAX_PLAYERS = 8
export const MULTIPLAYER_ROUND_TIME = 45 // seconds
export const MULTIPLAYER_REVEAL_TIME = 8 // seconds

// Map constants
export const DEFAULT_MAP_CENTER = { lat: 20, lon: 0 }
export const DEFAULT_MAP_ZOOM = 2

// Timeline constants
export const MIN_YEAR = -1000 // 1000 BCE
export const MAX_YEAR = 2025 // Current year
export const YEAR_SLIDER_STEP = 5

// Name matching thresholds
export const NAME_MATCH_EXACT = 0.9
export const NAME_MATCH_HIGH = 0.7
export const NAME_MATCH_MEDIUM = 0.5
export const NAME_MATCH_LOW = 0.4

// UI constants
export const TOAST_DURATION = 3000 // milliseconds
export const MODAL_ANIMATION_DURATION = 300 // milliseconds

// API constants
export const API_RETRY_ATTEMPTS = 3
export const API_RETRY_DELAY = 1000 // milliseconds

// Room code constants
export const ROOM_CODE_LENGTH = 6
export const ROOM_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

// Date format
export const DATE_FORMAT = 'YYYY-MM-DD'
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

// Feature flags (from env)
export const FEATURES = {
  MULTIPLAYER_ENABLED: import.meta.env.VITE_ENABLE_MULTIPLAYER === 'true',
  DAILY_CHALLENGE_ENABLED: import.meta.env.VITE_ENABLE_DAILY_CHALLENGE === 'true',
}

