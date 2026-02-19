import type { Figure } from '@/types/figure'

let cachedFigures: Figure[] | null = null

async function loadFigures(): Promise<Figure[]> {
  if (cachedFigures) return cachedFigures
  const response = await fetch('/figures.json')
  if (!response.ok) throw new Error('Failed to load figures.json')
  cachedFigures = await response.json()
  return cachedFigures!
}

/**
 * Seeded shuffle using mulberry32 PRNG.
 * The same seed always produces the same order.
 */
function seededShuffle<T>(arr: T[], seed: string): T[] {
  // Hash the seed string into a 32-bit integer
  let s = [...seed].reduce((a, c) => (Math.imul(31, a) + c.charCodeAt(0)) | 0, 0)

  const rand = () => {
    s |= 0
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/**
 * Fetch random figures for Free Play mode.
 */
export async function getRandomFigures(count: number = 10): Promise<Figure[]> {
  const all = await loadFigures()
  if (all.length === 0) throw new Error('No figures available in figures.json')
  const shuffled = [...all].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

/**
 * Fetch figures for Daily Challenge.
 * Uses a date-seeded deterministic shuffle so all players see the same figures.
 */
export async function getDailyChallengeFigures(date: string): Promise<Figure[]> {
  const all = await loadFigures()
  if (all.length === 0) throw new Error('No figures available in figures.json')
  const shuffled = seededShuffle(all, date)
  return shuffled.slice(0, Math.min(10, shuffled.length))
}
