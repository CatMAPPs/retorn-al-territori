import { fuzzyMatch } from '../matching/fuzzyMatch'
import type { NameMatchResult } from '@/types/score'

/**
 * Calculate name accuracy score using fuzzy matching
 * Tiered scoring:
 * - 800: Exact match or minor misspelling (≥0.9 similarity)
 * - 600: Significant misspelling but clear intent (0.7-0.89)
 * - 400: Only first OR last name correct
 * - 200: Weak partial match
 * - 0: No match or empty
 * 
 * @param guessedName - Player's guess
 * @param correctName - Correct name
 * @param aliases - Alternative names and nicknames
 * @returns Score (0, 200, 400, 600, or 800)
 */
export function calculateNameScore(
  guessedName: string,
  correctName: string,
  aliases: string[] = []
): number {
  // Handle empty guess
  if (!guessedName || guessedName.trim() === '') {
    return 0
  }

  // Normalize input
  const normalizedGuess = normalizeString(guessedName)
  const normalizedCorrect = normalizeString(correctName)

  // Check exact match
  if (normalizedGuess === normalizedCorrect) {
    return 800
  }

  // Check aliases
  const allNames = [correctName, ...aliases]
  let bestMatch = 0

  for (const name of allNames) {
    const normalized = normalizeString(name)

    // Check exact match with alias
    if (normalizedGuess === normalized) {
      return 800
    }

    // Calculate fuzzy similarity
    const similarity = fuzzyMatch(normalizedGuess, normalized)

    if (similarity > bestMatch) {
      bestMatch = similarity
    }
  }

  // Tiered scoring based on similarity
  if (bestMatch >= 0.9) {
    return 800 // Exact or minor misspelling
  } else if (bestMatch >= 0.7) {
    return 600 // Significant misspelling but clear
  }

  // Check for partial name matches (first or last name only)
  const guessWords = normalizedGuess.split(/\s+/)
  const correctWords = normalizedCorrect.split(/\s+/)

  for (const guessWord of guessWords) {
    for (const correctWord of correctWords) {
      if (guessWord.length >= 3 && correctWord.length >= 3) {
        const wordSimilarity = fuzzyMatch(guessWord, correctWord)
        if (wordSimilarity >= 0.8) {
          return 400 // First or last name match
        }
      }
    }
  }

  // Weak partial match
  if (bestMatch >= 0.4) {
    return 200
  }

  return 0
}

/**
 * Normalize string for comparison
 */
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ') // Normalize whitespace
}

/**
 * Get name match result with confidence level
 */
export function getNameMatchResult(
  guessedName: string,
  correctName: string,
  aliases: string[] = []
): NameMatchResult {
  const score = calculateNameScore(guessedName, correctName, aliases)

  let confidence: NameMatchResult['confidence']
  if (score === 800) confidence = 'exact'
  else if (score === 600) confidence = 'high'
  else if (score === 400) confidence = 'medium'
  else if (score === 200) confidence = 'low'
  else confidence = 'none'

  return { confidence, score }
}

