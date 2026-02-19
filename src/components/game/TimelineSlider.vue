<template>
  <div class="timeline-container">
    <!-- Big year display / input -->
    <div class="year-display-wrap">
      <label class="year-label">Any de la foto</label>
      <input
        v-model.number="directYearInput"
        type="number"
        :min="MIN_YEAR"
        :max="MAX_YEAR"
        :disabled="disabled"
        class="year-display"
        @input="handleDirectInput"
      />
    </div>

    <!-- Slider -->
    <div class="slider-wrap">
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
      <div class="slider-labels">
        <span>{{ MIN_YEAR }}</span>
        <span>{{ MAX_YEAR }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const MIN_YEAR = 1839
const MAX_YEAR = new Date().getFullYear()

interface Props {
  modelValue: number
  disabled?: boolean
  snapIncrement?: number
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  snapIncrement: 1,
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
/* ── Container ── */
.timeline-container {
  @apply w-full px-4 py-3 space-y-3;
}

/* ── Year display ── */
.year-display-wrap {
  @apply flex flex-col items-center gap-1;
}

.year-label {
  @apply text-xs text-noir-text/40 tracking-widest uppercase;
}

.year-display {
  @apply w-full text-center font-mono text-noir-gold;
  font-size: 2.25rem;
  line-height: 1;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(203,161,53,0.25);
  padding-bottom: 6px;
  color: #cba135;
  outline: none;
  /* remove spin arrows */
  -moz-appearance: textfield;
  appearance: textfield;
}

.year-display::-webkit-outer-spin-button,
.year-display::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.year-display:focus {
  border-bottom-color: rgba(203,161,53,0.6);
}

.year-display:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* ── Slider ── */
.slider-wrap {
  @apply relative w-full;
}

.timeline-slider {
  @apply w-full cursor-pointer appearance-none;
  height: 4px;
  background: rgba(203,161,53,0.18);
  border-radius: 999px;
  outline: none;
}

.timeline-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #f1e6d6;
  border: 2px solid #cba135;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(203,161,53,0.35);
  transition: box-shadow 0.15s ease;
}

.timeline-slider::-webkit-slider-thumb:hover {
  box-shadow: 0 0 14px rgba(203,161,53,0.55);
}

.timeline-slider::-moz-range-thumb {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #f1e6d6;
  border: 2px solid #cba135;
  cursor: pointer;
  box-shadow: 0 0 8px rgba(203,161,53,0.35);
}

.timeline-slider:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.slider-labels {
  @apply flex justify-between mt-1.5 px-0.5;
  @apply text-xs text-noir-text/35;
}
</style>
