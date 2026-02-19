import { isValidLatitude, isValidLongitude } from '../geography/haversine'
import { MIN_YEAR, MAX_YEAR } from './constants'

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate username format
 * Must be 3-20 characters, alphanumeric and underscores only
 */
export function isValidUsername(username: string): boolean {
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/
  return usernameRegex.test(username)
}

/**
 * Validate password strength
 * Must be at least 8 characters
 */
export function isValidPassword(password: string): boolean {
  return password.length >= 8
}

/**
 * Validate year range
 */
export function isValidYear(year: number): boolean {
  return year >= MIN_YEAR && year <= MAX_YEAR
}

/**
 * Validate coordinates
 */
export function isValidCoordinates(lat: number, lon: number): boolean {
  return isValidLatitude(lat) && isValidLongitude(lon)
}

/**
 * Validate room code format
 */
export function isValidRoomCode(code: string): boolean {
  return /^[A-Z0-9]{6}$/.test(code)
}

/**
 * Sanitize user input string
 */
export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '')
}

/**
 * Validate score is within valid range
 */
export function isValidScore(score: number, max: number): boolean {
  return score >= 0 && score <= max
}

