import { haversineDistance } from '../geography/haversine'

/**
 * Calculate spatial accuracy score based on distance
 * Formula: max(0, 800 - (distance_km / 10))
 * 
 * @param guessedLat - Guessed latitude
 * @param guessedLon - Guessed longitude
 * @param correctLat - Correct latitude
 * @param correctLon - Correct longitude
 * @returns Score (0-800) and distance in kilometers
 */
export function calculateSpatialScore(
  guessedLat: number,
  guessedLon: number,
  correctLat: number,
  correctLon: number
): { score: number; distance: number } {
  const distance = haversineDistance(guessedLat, guessedLon, correctLat, correctLon)

  // Linear decay: 0 points at 100 km
  const score = Math.max(0, Math.round(800 - distance * 8))

  return { score, distance }
}

