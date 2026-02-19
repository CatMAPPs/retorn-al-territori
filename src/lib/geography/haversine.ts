/**
 * @file haversine.ts
 * @description Implements the Haversine formula to calculate the great-circle
 * distance between two points (latitude and longitude) on a sphere (the Earth).
 * This function is framework-agnostic and required for Spatial Accuracy scoring.
 * @module lib/geography
 * @author Team HistoGuesser
 * @created 2025-11-03
 */

// Constants
const EARTH_RADIUS_KM = 6371 // Earth's mean radius in kilometers
// Note: This matches the constant used in the server-side scoring function implementation.

/**
 * Calculates the Haversine (great-circle) distance between two sets of coordinates.
 * 
 * @param lat1 - Latitude of the first point (in degrees).
 * @param lon1 - Longitude of the first point (in degrees).
 * @param lat2 - Latitude of the second point (in degrees - the correct location).
 * @param lon2 - Longitude of the second point (in degrees - the correct location).
 * @returns The distance between the two points in kilometers (km) as a float.
 * 
 * @example
 * // Distance from Rome (41.9, 12.5) to Paris (48.9, 2.3) should be ~1105 km
 * const distance = haversineDistance(41.9, 12.5, 48.9, 2.3);
 * // distance will be approximately 1105.85
 */
export function haversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  // Convert degrees to radians
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)

  // Convert latitudes to radians
  const rLat1 = lat1 * (Math.PI / 180)
  const rLat2 = lat2 * (Math.PI / 180)

  // Apply Haversine formula: a = sin²(Δφ/2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ/2)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rLat1) * Math.cos(rLat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

  // c = 2 ⋅ atan2(√a, √(1−a))
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  // d = R ⋅ c
  const distance = EARTH_RADIUS_KM * c // Distance in kilometers

  return distance
}

/**
 * Normalizes an angle from degrees to radians.
 * Note: Reserved for future helper functions. Currently unused.
 * @internal
 */
 
// @ts-expect-error - Internal utility function
function _toRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

/**
 * Convert radians to degrees
 * @param radians - Angle in radians
 * @returns Angle in degrees
 */
export function toDegrees(radians: number): number {
  return radians * (180 / Math.PI)
}

/**
 * Alias for haversineDistance to maintain backward compatibility
 * @deprecated Use haversineDistance instead
 */
export function calculateHaversineDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  return Math.round(haversineDistance(lat1, lon1, lat2, lon2) * 100) / 100
}

/**
 * Validate latitude (must be between -90 and 90)
 */
export function isValidLatitude(lat: number): boolean {
  return lat >= -90 && lat <= 90
}

/**
 * Validate longitude (must be between -180 and 180)
 */
export function isValidLongitude(lon: number): boolean {
  return lon >= -180 && lon <= 180
}

/**
 * Format distance for display
 */
export function formatDistance(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)}m`
  } else if (km < 100) {
    return `${km.toFixed(1)}km`
  } else {
    return `${Math.round(km)}km`
  }
}