import type { Figure } from './figure'

/**
 * Game modes
 */
export type GameMode = 'free_play' | 'daily_challenge'

/**
 * Round phase states
 */
export type RoundPhase = 'prompt' | 'submitted' | 'reveal' | 'transition'

/**
 * Player guess for a round
 */
export interface Guess {
  name: string
  lat: number
  lon: number
  year: number
  submission_time: number // seconds since round start
}

/**
 * Score breakdown for a single round
 */
export interface RoundScore {
  spatial_score: number // 0-800
  temporal_score: number // 0-800
  name_score: number // 0-800
  speed_bonus: number // 0-100
  total: number // 0-2500
  distance_km: number
  year_diff: number
}

/**
 * Round state
 */
export interface RoundState {
  round_number: number
  figure: Figure
  phase: RoundPhase
  guess: Guess | null
  score: RoundScore | null
  time_elapsed: number
}

/**
 * Complete game session
 */
export interface GameSession {
  mode: GameMode
  figures: Figure[]
  current_round: number
  rounds: RoundState[]
  total_score: number
  started_at: string
  completed_at: string | null
}

/**
 * Final game results
 */
export interface GameResults {
  total_score: number
  max_possible_score: number
  spatial_accuracy: number
  temporal_accuracy: number
  name_accuracy: number
  speed_bonus: number
  rounds_completed: number
  global_rank?: number | null
  streak?: number | null
}

