/**
 * Calculate speed bonus based on submission time
 * Formula: max(0, min(100, 110 - floor((time_seconds / 2)) * 10))
 * 
 * Time brackets:
 * - 0-10s: 100 points
 * - 10-12s: 90 points
 * - 12-14s: 80 points
 * - 14-16s: 70 points
 * - 16-18s: 60 points
 * - 18-20s: 50 points
 * - 20-22s: 40 points
 * - 22-24s: 30 points
 * - 24-26s: 20 points
 * - 26-28s: 10 points
 * - 28+s: 0 points
 * 
 * @param timeSeconds - Time taken to submit (in seconds)
 * @returns Speed bonus (0-100)
 */
export function calculateSpeedBonus(timeSeconds: number): number {
  if (timeSeconds < 0) return 0

  const bonus = 110 - Math.floor(timeSeconds / 2) * 10

  return Math.max(0, Math.min(100, bonus))
}

/**
 * Get speed bonus tier description
 */
export function getSpeedBonusTier(timeSeconds: number): string {
  const bonus = calculateSpeedBonus(timeSeconds)

  if (bonus === 100) return 'Lightning Fast!'
  if (bonus >= 80) return 'Very Quick'
  if (bonus >= 60) return 'Quick'
  if (bonus >= 40) return 'Decent'
  if (bonus >= 20) return 'Slow'
  return 'No Bonus'
}

