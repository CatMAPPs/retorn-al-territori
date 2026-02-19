/**
 * Score component breakdown
 */
export interface ScoreComponents {
  spatial: number // 0-800
  temporal: number // 0-800
  name: number // 0-800
  speed: number // 0-100
}

/**
 * Round score breakdown for UI components
 */
export interface RoundScore {
  spatial: number // 0-800
  temporal: number // 0-800
  name: number // 0-800
  speed: number // 0-100
  total: number // 0-2500
  distanceKm?: number
  yearDiff?: number
}

/**
 * Name matching confidence levels
 */
export type NameMatchConfidence = 'exact' | 'high' | 'medium' | 'low' | 'none'

/**
 * Name match result
 */
export interface NameMatchResult {
  confidence: NameMatchConfidence
  score: number // 0, 200, 400, 600, or 800
  matched_alias?: string
}
