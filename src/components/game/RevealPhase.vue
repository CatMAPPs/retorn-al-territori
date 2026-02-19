<template>
  <div class="reveal-phase">
    <!-- Figure information -->
    <Card class="reveal-card mb-4">
      <div class="reveal-header">
        <h2 class="text-2xl font-playfair text-noir-gold">{{ figure.nom }}</h2>
        <div class="figure-years">
          <span class="text-noir-text/80">{{ figure.any_foto }}</span>
        </div>
      </div>

      <div class="reveal-content">
        <p class="figure-autor">📷 {{ figure.autor }}</p>
        <p class="figure-description">{{ figure.descripcio }}</p>
      </div>
    </Card>

    <!-- Score breakdown -->
    <ScoreBreakdown
      v-if="roundScore"
      :round-score="roundScore"
      :submission-time="submissionTime"
    />

    <!-- Actions -->
    <div class="reveal-actions">
      <Button
        variant="primary"
        size="lg"
        full-width
        @click="handleNext"
      >
        {{ isLastRound ? 'Veure Resultats' : 'Pròxima Ronda' }}
      </Button>
      <Button
        variant="ghost"
        size="lg"
        full-width
        @click="emit('backToHome')"
      >
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

const handleNext = () => {
  emit('next')
}
</script>

<style scoped>
.reveal-phase {
  @apply w-full;
}

.reveal-card {
  @apply animate-fade-in;
}

.reveal-header {
  @apply mb-3 pb-3 border-b border-noir-gold/20;
}

.figure-years {
  @apply text-base font-mono mt-1;
}

.reveal-content {
  @apply space-y-2;
}

.figure-autor {
  @apply text-noir-text/80;
}

.figure-description {
  @apply text-noir-text leading-relaxed text-sm;
}

.reveal-actions {
  @apply mt-4 space-y-2;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}
</style>
