import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

/**
 * Get current date in YYYY-MM-DD format (UTC)
 */
export function getCurrentDate(): string {
  return dayjs.utc().format('YYYY-MM-DD')
}

/**
 * Get current timestamp in ISO format
 */
export function getCurrentTimestamp(): string {
  return dayjs.utc().toISOString()
}

/**
 * Format date for display
 */
export function formatDate(date: string | Date): string {
  return dayjs(date).format('MMM D, YYYY')
}

/**
 * Format datetime for display
 */
export function formatDateTime(date: string | Date): string {
  return dayjs(date).format('MMM D, YYYY h:mm A')
}

/**
 * Check if a date is today (UTC)
 */
export function isToday(date: string | Date): boolean {
  return dayjs(date).utc().format('YYYY-MM-DD') === getCurrentDate()
}

/**
 * Calculate days between two dates
 */
export function daysBetween(date1: string | Date, date2: string | Date): number {
  return Math.abs(dayjs(date1).diff(dayjs(date2), 'day'))
}

/**
 * Get midnight UTC for a given date
 */
export function getMidnightUTC(date?: string | Date): string {
  return dayjs(date).utc().startOf('day').toISOString()
}

/**
 * Format seconds to mm:ss
 */
export function formatTimeRemaining(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins}:${secs.toString().padStart(2, '0')}`
}

/**
 * Calculate streak (consecutive days)
 */
export function calculateStreak(lastDate: string | null, currentDate?: string): number {
  if (!lastDate) return 0

  const last = dayjs(lastDate).utc()
  const current = dayjs(currentDate || getCurrentDate()).utc()
  const diff = current.diff(last, 'day')

  // If last play was yesterday, increment streak
  if (diff === 1) return 1

  // If last play was today, maintain streak
  if (diff === 0) return 0

  // Otherwise, streak is broken
  return -1 // Signal to reset streak
}

/**
 * Format year with BCE/CE
 */
export function formatYear(year: number): string {
  if (year < 0) {
    return `${Math.abs(year)} BCE`
  }
  return `${year} CE`
}

