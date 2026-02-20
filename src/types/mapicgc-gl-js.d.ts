declare module 'mapicgc-gl-js' {
  import type maplibregl from 'maplibre-gl'

  export class Map {
    /** Underlying maplibre-gl Map instance (available after 'load' event) */
    map: maplibregl.Map
    constructor(options: Record<string, unknown>)
    on(type: string, fn: (...args: unknown[]) => void): void
    setStyle(style: string | object, options?: object): void
    addControl(control: object, position?: string): void
    addMarker(options: {
      coord: [number, number]
      options?: object
      text?: string
      textOffset?: object
    }): import('maplibre-gl').Marker
  }

  export class Config {
    static getConfigICGC(): Promise<unknown>
  }

  export class CompareMaps {}
}
