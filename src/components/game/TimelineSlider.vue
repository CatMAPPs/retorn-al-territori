<template>
  <Card :padding="padding" class="timeline-container">
    <div class="timeline-header">
      <div class="flex items-center justify-between mb-2">
        <label class="text-sm font-medium text-noir-text">Any de la foto</label>
        <span class="text-xs text-noir-text/50">{{ MIN_YEAR }}–{{ MAX_YEAR }}</span>
      </div>

      <!-- Direct year input -->
      <div class="flex items-center gap-2 mb-4">
        <input
          v-model.number="directYearInput"
          type="number"
          :min="MIN_YEAR"
          :max="MAX_YEAR"
          :disabled="disabled"
          class="year-input"
          placeholder="Escriu l'any..."
          @input="handleDirectInput"
        />
      </div>
    </div>

    <!-- Slider -->
    <div class="slider-wrapper">
      <input
        ref="sliderRef"
        v-model.number="sliderValue"
        type="range"
        :min="MIN_YEAR"
        :max="MAX_YEAR"
        :step="snapIncrement"
        :disabled="disabled"
        class="timeline-slider"
        @input="handleSliderChange"
      />

      <!-- Slider labels -->
      <div class="slider-labels">
        <span class="text-xs text-noir-text/60">{{ MIN_YEAR }}</span>
        <span class="text-xs text-noir-text/60">{{ MAX_YEAR }}</span>
      </div>

      <!-- Current value display -->
      <div class="current-value">
        <span class="text-2xl font-mono text-noir-gold">{{ modelValue }}</span>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import Card from '@/components/ui/Card.vue'

const MIN_YEAR = 1839
const MAX_YEAR = new Date().getFullYear()

interface Props {
  modelValue: number
  disabled?: boolean
  snapIncrement?: number
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  snapIncrement: 1,
  padding: 'sm',
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
}>()

const sliderRef = ref<HTMLInputElement | null>(null)
const sliderValue = ref(Math.max(MIN_YEAR, Math.min(MAX_YEAR, props.modelValue)))
const directYearInput = ref(sliderValue.value)

const handleSliderChange = () => {
  directYearInput.value = sliderValue.value
  emit('update:modelValue', sliderValue.value)
}

const handleDirectInput = () => {
  if (directYearInput.value < MIN_YEAR) directYearInput.value = MIN_YEAR
  if (directYearInput.value > MAX_YEAR) directYearInput.value = MAX_YEAR
  sliderValue.value = directYearInput.value
  emit('update:modelValue', sliderValue.value)
}

watch(
  () => props.modelValue,
  (newValue) => {
    const clamped = Math.max(MIN_YEAR, Math.min(MAX_YEAR, newValue))
    sliderValue.value = clamped
    directYearInput.value = clamped
  },
)
</script>

<style scoped>
.timeline-container {
  @apply w-full;
}

.year-input {
  @apply flex-1 px-3 py-2 bg-noir-surface text-noir-text border border-noir-gold/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-noir-gold/30 focus:border-noir-gold/40 transition-all font-mono;
}

.year-input:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.slider-wrapper {
  @apply relative;
}

.timeline-slider {
  @apply w-full h-2 bg-noir-bg rounded-lg appearance-none cursor-pointer transition-all;
}

.timeline-slider::-webkit-slider-thumb {
  @apply appearance-none w-6 h-6 bg-noir-text rounded-full border-2 border-noir-gold cursor-pointer shadow-lg;
}

.timeline-slider::-moz-range-thumb {
  @apply w-6 h-6 bg-noir-text rounded-full border-2 border-noir-gold cursor-pointer shadow-lg;
}

.timeline-slider::-webkit-slider-runnable-track {
  @apply bg-gradient-to-r from-noir-gold/40 to-noir-bg;
}

.slider-labels {
  @apply flex justify-between mt-1 px-1;
}

.current-value {
  @apply flex items-center justify-center mt-4 pt-4 border-t border-noir-gold/10;
}

.timeline-slider:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>
