<template>
  <Card :padding="padding" class="map-container">
    <div ref="mapElement" class="map-element"></div>
    <div v-if="showCoordinates && guessedCoordinates" class="coordinates-display">
      {{ guessedCoordinates.lat.toFixed(2) }}°,
      {{ guessedCoordinates.lon.toFixed(2) }}°
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMap } from '@/composables/useMap';
import Card from '@/components/ui/Card.vue';
import type { Coordinates } from '@/types/figure';

interface Props {
  revealLocation?: Coordinates | null;
  disabled?: boolean;
  showCoordinates?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  revealLocation: null,
  disabled: false,
  showCoordinates: true,
  padding: 'none',
});

const emit = defineEmits<{
  guess: [coordinates: Coordinates];
}>();

const mapElement = ref<HTMLElement | null>(null);

const {
  guessedCoordinates,
  showCorrectLocation,
  clearMap,
  resetView,
} = useMap(mapElement);

// Watch for guessed coordinates and emit
watch(guessedCoordinates, (coords) => {
  if (coords && !props.disabled) {
    emit('guess', coords);
  }
});

// Watch for reveal location
watch(
  () => props.revealLocation,
  (location) => {
    if (location) {
      showCorrectLocation(location.lat, location.lon);
    }
  },
);

// Expose methods for parent component
defineExpose({
  clearMap,
  resetView,
  showCorrectLocation,
});
</script>

<style scoped>
.map-container {
  @apply relative w-full h-full min-h-[300px] md:min-h-[400px];
}

.map-element {
  @apply w-full h-full min-h-[300px] md:min-h-[400px] rounded-lg;
}

.coordinates-display {
  @apply absolute bottom-4 left-4 bg-noir-surface/90 text-noir-text px-3 py-1.5 rounded-lg border border-noir-gold/20 text-sm font-mono z-[1000];
}

/* Custom styles for MapLibre */
:deep(.maplibregl-map) {
  @apply bg-noir-bg rounded-lg;
}

:deep(.maplibregl-ctrl-group) {
  @apply border border-noir-gold/20 bg-noir-surface;
}

:deep(.maplibregl-ctrl-zoom-in),
:deep(.maplibregl-ctrl-zoom-out),
:deep(.maplibregl-ctrl-compass) {
  @apply bg-noir-surface text-noir-text;
}

:deep(.maplibregl-ctrl-zoom-in:hover),
:deep(.maplibregl-ctrl-zoom-out:hover) {
  @apply bg-noir-gold/10;
}
</style>

