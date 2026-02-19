import { ref, shallowRef, onMounted, onUnmounted, type Ref } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import type { Coordinates } from '@/types/figure'

interface UseMapOptions {
  center?: [number, number] // [lat, lon]
  zoom?: number
  minZoom?: number
  maxZoom?: number
}

// GeoJSON source ID constants
const LINE_SOURCE = 'distance-line-source'
const LINE_LAYER = 'distance-line-layer'

export function useMap(mapContainer: Ref<HTMLElement | null>, options: UseMapOptions = {}) {
  const map = shallowRef<maplibregl.Map | null>(null)
  const userMarker = shallowRef<maplibregl.Marker | null>(null)
  const correctMarker = shallowRef<maplibregl.Marker | null>(null)
  const guessedCoordinates = ref<Coordinates | null>(null)

  const defaultOptions = {
    center: [20, 0] as [number, number],
    zoom: 2,
    minZoom: 2,
    maxZoom: 18,
  }

  const mergedOptions = { ...defaultOptions, ...options }

  // Helper: create a custom DOM element for a marker pin
  const createPinElement = (colorClass: string, innerColorClass: string): HTMLElement => {
    const el = document.createElement('div')
    el.className = `w-8 h-8 ${colorClass} rounded-full border-2 ${innerColorClass} shadow-lg flex items-center justify-center cursor-pointer`
    el.innerHTML = `<div class="w-3 h-3 ${innerColorClass.replace('border-', 'bg-')} rounded-full"></div>`
    return el
  }

  const initMap = () => {
    if (!mapContainer.value || map.value) return

    map.value = new maplibregl.Map({
      container: mapContainer.value,
      style: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        },
        layers: [
          {
            id: 'osm',
            type: 'raster',
            source: 'osm',
          },
        ],
      },
      // MapLibre uses [lon, lat] — opposite of Leaflet
      center: [mergedOptions.center[1], mergedOptions.center[0]],
      zoom: mergedOptions.zoom,
      minZoom: mergedOptions.minZoom,
      maxZoom: mergedOptions.maxZoom,
    })

    map.value.on('click', (e: maplibregl.MapMouseEvent) => {
      placeUserPin(e.lngLat.lat, e.lngLat.lng)
    })
  }

  // Place or move user's guess pin (gold)
  const placeUserPin = (lat: number, lon: number) => {
    if (!map.value) return

    guessedCoordinates.value = { lat, lon }

    if (userMarker.value) {
      userMarker.value.setLngLat([lon, lat])
    } else {
      const el = createPinElement('bg-noir-gold', 'border-noir-text')
      userMarker.value = new maplibregl.Marker({ element: el })
        .setLngLat([lon, lat])
        .addTo(map.value)
    }
  }

  // Show correct location with red pin and a dashed line from user's guess
  const showCorrectLocation = (lat: number, lon: number) => {
    if (!map.value) return

    const el = createPinElement('bg-noir-red', 'border-noir-gold')
    correctMarker.value = new maplibregl.Marker({ element: el })
      .setLngLat([lon, lat])
      .addTo(map.value)

    if (guessedCoordinates.value) {
      // Draw dashed line between the two pins
      const lineData: GeoJSON.Feature<GeoJSON.LineString> = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [
            [guessedCoordinates.value.lon, guessedCoordinates.value.lat],
            [lon, lat],
          ],
        },
      }

      if (map.value.getSource(LINE_SOURCE)) {
        ;(map.value.getSource(LINE_SOURCE) as maplibregl.GeoJSONSource).setData(lineData)
      } else {
        map.value.addSource(LINE_SOURCE, { type: 'geojson', data: lineData })
        map.value.addLayer({
          id: LINE_LAYER,
          type: 'line',
          source: LINE_SOURCE,
          paint: {
            'line-color': '#CBA135',
            'line-width': 2,
            'line-opacity': 0.7,
            'line-dasharray': [2, 4],
          },
        })
      }

      // Fit bounds to show both pins
      const bounds = new maplibregl.LngLatBounds()
      bounds.extend([guessedCoordinates.value.lon, guessedCoordinates.value.lat])
      bounds.extend([lon, lat])
      map.value.fitBounds(bounds, { padding: 80 })
    } else {
      map.value.setCenter([lon, lat])
      map.value.setZoom(6)
    }
  }

  // Remove all pins and the line
  const clearMap = () => {
    if (!map.value) return

    if (userMarker.value) {
      userMarker.value.remove()
      userMarker.value = null
    }
    if (correctMarker.value) {
      correctMarker.value.remove()
      correctMarker.value = null
    }

    if (map.value.getLayer(LINE_LAYER)) map.value.removeLayer(LINE_LAYER)
    if (map.value.getSource(LINE_SOURCE)) map.value.removeSource(LINE_SOURCE)

    guessedCoordinates.value = null
  }

  // Reset map to initial view
  const resetView = () => {
    if (!map.value) return
    map.value.setCenter([mergedOptions.center[1], mergedOptions.center[0]])
    map.value.setZoom(mergedOptions.zoom)
  }

  const cleanup = () => {
    if (map.value) {
      map.value.remove()
      map.value = null
    }
  }

  onMounted(() => {
    setTimeout(initMap, 100)
  })

  onUnmounted(() => {
    cleanup()
  })

  return {
    map,
    guessedCoordinates,
    initMap,
    placeUserPin,
    showCorrectLocation,
    clearMap,
    resetView,
    cleanup,
  }
}
