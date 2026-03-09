/**
 * Geographic coordinates
 */
export interface Coordinates {
  lat: number
  lon: number
}

/**
 * Attribution data structure
 */
export interface Attribution {
  name: string
  url: string
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
  attributions?: Attribution[]
}
