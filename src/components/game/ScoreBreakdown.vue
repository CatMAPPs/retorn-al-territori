<template>
  <Card class="score-breakdown">
    <div class="score-header">
      <h3 class="text-2xl font-playfair text-noir-gold">Round Score</h3>
      <div class="total-score">
        <span class="score-value">{{ roundScore.total }}</span>
        <span class="score-max">/ 2500</span>
      </div>
    </div>

    <div class="score-components">
      <!-- Location Accuracy -->
      <div class="score-item">
        <div class="score-item-header">
          <span class="score-icon">📍</span>
          <span class="score-label">Location Accuracy</span>
        </div>
        <div class="score-bar-container">
          <div 
            class="score-bar"
            :style="{ width: `${(roundScore.spatial / 800) * 100}%` }"
          ></div>
        </div>
        <div class="score-value-row">
          <span class="score-points">{{ roundScore.spatial }}</span>
          <span v-if="roundScore.distanceKm !== undefined" class="score-detail">
            {{ roundScore.distanceKm.toFixed(0) }} km away
          </span>
        </div>
      </div>

      <!-- Temporal Accuracy -->
      <div class="score-item">
        <div class="score-item-header">
          <span class="score-icon">📅</span>
          <span class="score-label">Timeline Accuracy</span>
        </div>
        <div class="score-bar-container">
          <div 
            class="score-bar"
            :style="{ width: `${(roundScore.temporal / 800) * 100}%` }"
          ></div>
        </div>
        <div class="score-value-row">
          <span class="score-points">{{ roundScore.temporal }}</span>
          <span v-if="roundScore.yearDiff !== undefined" class="score-detail">
            {{ Math.abs(roundScore.yearDiff) }} years off
          </span>
        </div>
      </div>

      <!-- Name Accuracy -->
      <div class="score-item">
        <div class="score-item-header">
          <span class="score-icon">👤</span>
          <span class="score-label">Name Accuracy</span>
        </div>
        <div class="score-bar-container">
          <div 
            class="score-bar"
            :style="{ width: `${(roundScore.name / 800) * 100}%` }"
          ></div>
        </div>
        <div class="score-value-row">
          <span class="score-points">{{ roundScore.name }}</span>
          <span class="score-detail">{{ nameAccuracyText }}</span>
        </div>
      </div>

      <!-- Speed Bonus (if applicable) -->
      <div v-if="roundScore.speed > 0" class="score-item">
        <div class="score-item-header">
          <span class="score-icon">⚡</span>
          <span class="score-label">Speed Bonus</span>
        </div>
        <div class="score-bar-container">
          <div 
            class="score-bar speed-bar"
            :style="{ width: `${(roundScore.speed / 100) * 100}%` }"
          ></div>
        </div>
        <div class="score-value-row">
          <span class="score-points">{{ roundScore.speed }}</span>
          <span v-if="submissionTime" class="score-detail">
            {{ submissionTime.toFixed(1) }}s
          </span>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Card from '@/components/ui/Card.vue';
import type { RoundScore } from '@/types/score';

interface Props {
  roundScore: RoundScore;
  submissionTime?: number;
}

const props = defineProps<Props>();

const nameAccuracyText = computed(() => {
  const score = props.roundScore.name;
  if (score === 800) return 'Perfect!';
  if (score >= 600) return 'Very close';
  if (score >= 400) return 'Partial match';
  if (score >= 200) return 'Some match';
  return 'No match';
});
</script>

<style scoped>
.score-breakdown {
  @apply w-full;
}

.score-header {
  @apply flex items-center justify-between pb-4 border-b border-noir-gold/20 mb-6;
}

.total-score {
  @apply flex items-baseline gap-2;
}

.score-value {
  @apply text-4xl font-mono font-bold text-noir-gold;
}

.score-max {
  @apply text-lg font-mono text-noir-text/60;
}

.score-components {
  @apply space-y-5;
}

.score-item {
  @apply space-y-2;
}

.score-item-header {
  @apply flex items-center gap-2;
}

.score-icon {
  @apply text-xl;
}

.score-label {
  @apply text-sm font-medium text-noir-text/80;
}

.score-bar-container {
  @apply w-full h-3 bg-noir-bg rounded-full overflow-hidden;
}

.score-bar {
  @apply h-full bg-gradient-to-r from-noir-gold to-noir-gold/70 transition-all duration-700 ease-out;
}

.speed-bar {
  @apply bg-gradient-to-r from-noir-red to-noir-gold;
}

.score-value-row {
  @apply flex items-center justify-between;
}

.score-points {
  @apply text-lg font-mono font-bold text-noir-text;
}

.score-detail {
  @apply text-sm text-noir-text/60;
}
</style>

