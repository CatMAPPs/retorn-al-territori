/**
 * Calculate temporal accuracy score based on year difference
 * Formula: max(0, 800 - (abs(year_diff) / 2))
 * 
 * @param guessedYear - Guessed birth year
 * @param correctYear - Correct birth year
 * @returns Score (0-800) and year difference
 */
export function calculateTemporalScore(
  guessedYear: number,
  correctYear: number
): { score: number; difference: number } {
  const difference = Math.abs(guessedYear - correctYear)

  // Linear decay: lose 2 points per year off
  // ~400 years off = 0 points
  const score = Math.max(0, Math.round(800 - difference / 2))

  return { score, difference }
}

