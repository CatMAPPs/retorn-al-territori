<template>
  <Card class="score-breakdown">
    <!-- Total -->
    <div class="score-total">
      <span class="total-label">Puntuació</span>
      <div class="total-value">
        <span class="total-pts">{{ roundScore.total }}</span>
        <span class="total-max">/ 800</span>
      </div>
    </div>

    <!-- Rows -->
    <div class="score-rows">
      <!-- Location -->
      <div class="score-row">
        <div class="row-meta">
          <span class="row-icon">📍</span>
          <span class="row-label">Ubicació</span>
          <span class="row-detail">
            {{ roundScore.distanceKm !== undefined ? `${roundScore.distanceKm.toFixed(0)} km` : '' }}
          </span>
          <span class="row-pts">{{ roundScore.spatial }}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill" :style="{ width: `${(roundScore.spatial / 800) * 100}%` }"></div>
        </div>
      </div>

      <!-- Speed bonus -->
      <div v-if="roundScore.speed > 0" class="score-row">
        <div class="row-meta">
          <span class="row-icon">⚡</span>
          <span class="row-label">Velocitat</span>
          <span class="row-detail">{{ submissionTime ? `${submissionTime.toFixed(1)}s` : '' }}</span>
          <span class="row-pts">+{{ roundScore.speed }}</span>
        </div>
        <div class="bar-track">
          <div class="bar-fill speed" :style="{ width: `${Math.min(roundScore.speed, 100)}%` }"></div>
        </div>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue';
import type { RoundScore } from '@/types/score';

interface Props {
  roundScore: RoundScore;
  submissionTime?: number;
}

defineProps<Props>();
</script>

<style scoped>
.score-breakdown {
  @apply w-full;
}

/* ── Total ── */
.score-total {
  @apply flex items-center justify-between mb-5 pb-4;
  border-bottom: 1px solid rgba(203,161,53,0.15);
}

.total-label {
  @apply text-xs text-noir-text/40 tracking-widest uppercase;
}

.total-value {
  @apply flex items-baseline gap-1.5;
}

.total-pts {
  @apply text-3xl font-mono font-bold text-noir-gold;
  text-shadow: 0 0 20px rgba(203,161,53,0.3);
}

.total-max {
  @apply text-sm font-mono text-noir-text/35;
}

/* ── Rows ── */
.score-rows {
  @apply space-y-4;
}

.score-row {
  @apply space-y-1.5;
}

.row-meta {
  @apply flex items-center gap-2;
}

.row-icon {
  @apply text-sm;
}

.row-label {
  @apply text-sm text-noir-text/70 font-medium;
}

.row-detail {
  @apply text-xs text-noir-text/35 ml-1;
}

.row-pts {
  @apply text-sm font-mono font-semibold text-noir-text ml-auto;
}

/* ── Bar ── */
.bar-track {
  @apply w-full rounded-full overflow-hidden;
  height: 5px;
  background: rgba(255,255,255,0.06);
}

.bar-fill {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(203,161,53,0.9), rgba(203,161,53,0.45));
  transition: width 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.bar-fill.speed {
  background: linear-gradient(90deg, #550000, #cba135);
}
</style>
