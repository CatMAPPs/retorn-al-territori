/**
 * Calculate Levenshtein distance between two strings
 * Returns the minimum number of single-character edits required
 * 
 * @param str1 - First string
 * @param str2 - Second string
 * @returns Edit distance
 */
export function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length
  const len2 = str2.length

  // Create 2D array for dynamic programming
  const matrix: number[][] = Array(len1 + 1)
    .fill(null)
    .map(() => Array(len2 + 1).fill(0))

  // Initialize first column and row
  for (let i = 0; i <= len1; i++) {
    matrix[i][0] = i
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j
  }

  // Fill the matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1, // deletion
        matrix[i][j - 1] + 1, // insertion
        matrix[i - 1][j - 1] + cost // substitution
      )
    }
  }

  return matrix[len1][len2]
}

/**
 * Calculate fuzzy match similarity (0-1)
 * 1 = exact match, 0 = completely different
 * 
 * @param str1 - First string
 * @param str2 - Second string
 * @returns Similarity score (0-1)
 */
export function fuzzyMatch(str1: string, str2: string): number {
  if (str1 === str2) return 1
  if (!str1 || !str2) return 0

  const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase())
  const maxLength = Math.max(str1.length, str2.length)

  if (maxLength === 0) return 1

  return 1 - distance / maxLength
}

/**
 * Find best fuzzy match from a list of strings
 * 
 * @param query - Query string
 * @param options - List of strings to match against
 * @param threshold - Minimum similarity threshold (0-1)
 * @returns Best match and similarity score, or null if no match above threshold
 */
export function findBestMatch(
  query: string,
  options: string[],
  threshold: number = 0.6
): { match: string; similarity: number } | null {
  let bestMatch: string | null = null
  let bestSimilarity = 0

  for (const option of options) {
    const similarity = fuzzyMatch(query, option)
    if (similarity > bestSimilarity && similarity >= threshold) {
      bestSimilarity = similarity
      bestMatch = option
    }
  }

  if (!bestMatch) return null

  return { match: bestMatch, similarity: bestSimilarity }
}

