<template>
  <div class="map-container">
    <div ref="mapElement" class="map-element"></div>
    <Transition name="fade">
      <div v-if="!guessedCoordinates" class="map-hint">
        Clica per marcar la ubicació
      </div>
    </Transition>

    <div v-if="showCoordinates && guessedCoordinates" class="coordinates-display">
      {{ guessedCoordinates.lat.toFixed(2) }}°,
      {{ guessedCoordinates.lon.toFixed(2) }}°
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useMap } from '@/composables/useMap';
import type { Coordinates } from '@/types/figure';

interface Props {
  disabled?: boolean;
  showCoordinates?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  showCoordinates: true,
});

const emit = defineEmits<{
  guess: [coordinates: Coordinates];
}>();

const mapElement = ref<HTMLElement | null>(null);

const { guessedCoordinates, showCorrectLocation, clearMap, resetView } = useMap(mapElement);

watch(guessedCoordinates, (coords) => {
  if (coords && !props.disabled) {
    emit('guess', coords);
  }
});

defineExpose({ clearMap, resetView, showCorrectLocation });
</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 200px;
}

.map-element {
  width: 100%;
  height: 100%;
  min-height: 200px;
}

.coordinates-display {
  @apply absolute bottom-3 left-3 bg-noir-surface/90 text-noir-text px-2 py-1 rounded border border-noir-gold/20 text-xs font-mono z-[1000];
}

.map-hint {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 11px;
  font-family: ui-monospace, monospace;
  padding: 5px 14px;
  border-radius: 999px;
  background: rgba(14,13,13,0.88);
  border: 1px solid rgba(203,161,53,0.22);
  color: rgba(237,224,206,0.55);
  backdrop-filter: blur(8px);
  pointer-events: none;
  white-space: nowrap;
  z-index: 10;
}

/* MapLibre overrides */
:deep(.maplibregl-map) {
  @apply bg-noir-bg;
  height: 100% !important;
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
