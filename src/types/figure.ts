/**
 * Geographic coordinates
 */
export interface Coordinates {
  lat: number
  lon: number
}

/**
 * Figure (photo) data structure
 */
export interface Figure {
  id: string
  nom: string
  nom_fitxer: string
  autor: string
  lat: number
  lon: number
  any_foto: number
  descripcio: string
}
