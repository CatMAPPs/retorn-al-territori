<template>
  <div class="reveal-phase">
    <!-- Figure info -->
    <Card class="reveal-card">
      <div class="reveal-header">
        <div class="figure-info">
          <h2 class="figure-nom">{{ figure.nom }}</h2>
          <!-- <p v-if="figure.descripcio" class="figure-desc">{{ figure.descripcio }}</p> -->
        </div>
        <!-- <span class="figure-year">{{ figure.any_foto }}</span> -->
      </div>

      <!-- Attributions -->
      <div v-if="figure.attributions && figure.attributions.length > 0" class="attributions-section">
        <div class="attributions-label">Font:</div>
        <ul class="attributions-list">
          <li v-for="(attr, index) in figure.attributions" :key="index" class="attribution-item">
            <a :href="attr.url" target="_blank" rel="noopener noreferrer" class="attribution-link">
              {{ attr.name }}
              <svg class="external-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </Card>

    <!-- Score -->
    <ScoreBreakdown
      v-if="roundScore"
      :round-score="roundScore"
      :submission-time="submissionTime"
    />

    <!-- Actions -->
    <div class="reveal-actions">
      <Button variant="primary" size="lg" full-width @click="handleNext">
        {{ isLastRound ? 'Veure Resultats' : 'Pròxima Ronda' }}
      </Button>
      <Button variant="ghost" size="lg" full-width @click="emit('backToHome')">
        Tornar a la Home
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import ScoreBreakdown from './ScoreBreakdown.vue'
import type { Figure } from '@/types/figure'
import type { RoundScore } from '@/types/score'

interface Props {
  figure: Figure
  roundScore?: RoundScore
  submissionTime?: number
  isLastRound?: boolean
  autoAdvance?: boolean
  autoAdvanceDelay?: number
}

withDefaults(defineProps<Props>(), {
  isLastRound: false,
  autoAdvance: false,
  autoAdvanceDelay: 8,
})

const emit = defineEmits<{
  next: []
  backToHome: []
}>()

const handleNext = () => emit('next')
</script>

<style scoped>
.reveal-phase {
  @apply w-full space-y-3 p-4;
}

/* ── Figure card ── */
.reveal-card {
  animation: fadeSlideUp 0.35s ease-out both;
}

.reveal-header {
  @apply flex items-start justify-between gap-3 mb-3 pb-3;
  border-bottom: 1px solid rgba(203,161,53,0.15);
}

.figure-info {
  @apply flex-1;
}

.figure-nom {
  @apply text-lg font-playfair text-noir-gold leading-snug;
}

.figure-desc {
  @apply text-sm text-noir-text/75 leading-relaxed mt-2;
}

.figure-year {
  @apply text-sm font-mono text-noir-text/50 flex-shrink-0 mt-0.5;
}

.reveal-meta {
  @apply space-y-2;
}

.figure-autor {
  @apply text-xs text-noir-text/50 block;
}

/* ── Attributions ── */
/* .attributions-section {
  @apply mt-4 pt-4 border-t border-noir-gold/15;
} */

.attributions-label {
  @apply text-xs text-noir-text/60 font-medium uppercase tracking-wide mb-2;
}

.attributions-list {
  @apply space-y-2 list-none;
}

.attribution-item {
  @apply text-sm;
}

.attribution-link {
  @apply inline-flex items-center gap-1.5 text-noir-gold hover:text-noir-gold/80 transition-colors;
  text-decoration: none;
}

.attribution-link:hover {
  text-decoration: underline;
}

.external-icon {
  @apply opacity-60 group-hover:opacity-100 transition-opacity;
}

/* ── Actions ── */
.reveal-actions {
  @apply space-y-2;
}

@keyframes fadeSlideUp {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>
