<template>
  <div class="reveal-phase">
    <!-- Figure info -->
    <Card class="reveal-card">
      <div class="reveal-header">
        <h2 class="figure-nom">{{ figure.nom }}</h2>
        <span class="figure-year">{{ figure.any_foto }}</span>
      </div>
      <div class="reveal-meta">
        <span class="figure-autor">📷 {{ figure.autor }}</span>
        <p v-if="figure.descripcio" class="figure-desc">{{ figure.descripcio }}</p>
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

.figure-nom {
  @apply text-lg font-playfair text-noir-gold leading-snug;
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

.figure-desc {
  @apply text-sm text-noir-text/75 leading-relaxed;
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
