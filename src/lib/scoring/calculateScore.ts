import { calculateSpatialScore } from './spatialScore'
import { calculateTemporalScore } from './temporalScore'
import { calculateNameScore } from './nameScore'
import { calculateSpeedBonus } from './speedBonus'
import type { RoundScore } from '@/types/game'
import type { GameMode } from '@/types/game'

/**
 * Calculate the complete score for a round
 */
export function calculateRoundScore(
  guessedName: string,
  guessedLat: number,
  guessedLon: number,
  guessedYear: number,
  correctName: string,
  correctLat: number,
  correctLon: number,
  correctYear: number,
  aliases: string[] = [],
  submissionTime: number,
  mode: GameMode
): RoundScore {
  // Calculate spatial accuracy (0-800 points)
  const { score: spatialScore, distance } = calculateSpatialScore(
    guessedLat,
    guessedLon,
    correctLat,
    correctLon
  )

  // Calculate temporal accuracy (0-800 points)
  const { score: temporalScore, difference: yearDiff } = calculateTemporalScore(
    guessedYear,
    correctYear
  )

  // Calculate name accuracy (0-800 points)
  const nameScore = calculateNameScore(guessedName, correctName, aliases)

  // Calculate speed bonus (0-100 points)
  // Only applies to Daily Challenge and Multiplayer
  const speedBonus =
    mode === 'daily_challenge' ? calculateSpeedBonus(submissionTime) : 0

  // Calculate total (max 900)
  const total = Math.min(900, spatialScore + speedBonus)

  return {
    spatial_score: spatialScore,
    temporal_score: temporalScore,
    name_score: nameScore,
    speed_bonus: speedBonus,
    total,
    distance_km: distance,
    year_diff: yearDiff,
  }
}

