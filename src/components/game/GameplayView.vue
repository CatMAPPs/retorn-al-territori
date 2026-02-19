<template>
  <div class="gameplay-container">
    <!-- Round header -->
    <div class="gameplay-header">
      <div class="round-counter">
        Round {{ currentRound }} / {{ totalRounds }}
      </div>
      <div v-if="showTimer" class="timer" :class="{ 'timer-urgent': timeRemaining <= 10 }">
        {{ formatTime(timeRemaining) }}
      </div>
    </div>

    <!-- Desktop: Two-column layout (always visible) -->
    <div class="prompt-phase">
      <div class="gameplay-grid">
        <!-- Left column: Figure image -->
        <div class="figure-section">
          <FigureCarousel
            v-if="currentFigure"
            :nom-fitxer="currentFigure.nom_fitxer"
            :alt-text="`Fotografia ronda ${currentRound}`"
          />
        </div>

        <!-- Right column: Map and inputs/reveal -->
        <div class="interaction-section">
          <!-- Map (always mounted — shows both pins during reveal) -->
          <div class="map-section">
            <InteractiveMap
              ref="mapRef"
              :disabled="isSubmitting || showReveal"
              @guess="handleMapGuess"
            />
          </div>

          <!-- Input controls (hidden during reveal) -->
          <div v-show="!showReveal" class="controls-section">
            <NameInput
              v-model="guess.name"
              :disabled="isSubmitting"
              :allow-skip="true"
            />
            <TimelineSlider
              v-model="guess.year"
              :disabled="isSubmitting"
            />
            <Button
              variant="primary"
              size="lg"
              full-width
              :disabled="!canSubmit"
              @click="handleSubmit"
            >
              {{ isSubmitting ? 'Enviant...' : 'Enviar Resposta' }}
            </Button>
          </div>

          <!-- Reveal info (shown during reveal, below the map) -->
          <div v-show="showReveal" class="reveal-info-section">
            <RevealPhase
              v-if="currentFigure && currentRoundScore"
              :figure="currentFigure"
              :round-score="currentRoundScore"
              :submission-time="submissionTime"
              :is-last-round="isLastRound"
              :auto-advance="false"
              @next="handleNextRound"
              @back-to-home="emit('backToHome')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import {
  FigureCarousel,
  InteractiveMap,
  TimelineSlider,
  NameInput,
  RevealPhase
} from '@/components/game';
import Button from '@/components/ui/Button.vue';
import type { Figure, Coordinates } from '@/types/figure';
import type { RoundScore } from '@/types/score';

interface Guess {
  name: string;
  coordinates: Coordinates | null;
  year: number;
}

interface Props {
  currentFigure: Figure | null;
  currentRound: number;
  totalRounds?: number;
  showTimer?: boolean;
  timerDuration?: number;
  autoAdvance?: boolean;
  autoAdvanceDelay?: number;
}

const props = withDefaults(defineProps<Props>(), {
  totalRounds: 10,
  showTimer: false,
  timerDuration: 45,
  autoAdvance: false,
  autoAdvanceDelay: 8,
});

const emit = defineEmits<{
  submit: [guess: Guess, submissionTime: number];
  nextRound: [];
  timeExpired: [];
  backToHome: [];
}>();

const mapRef = ref<InstanceType<typeof InteractiveMap> | null>(null);
const showReveal = ref(false);
const isSubmitting = ref(false);
const timeRemaining = ref(props.timerDuration);
const roundStartTime = ref<number>(0);
const submissionTime = ref<number>(0);
const currentRoundScore = ref<RoundScore | null>(null);

const guess = ref<Guess>({
  name: '',
  coordinates: null,
  year: 1500,
});

let timerInterval: number | null = null;

const canSubmit = computed(() => {
  return guess.value.coordinates !== null && !isSubmitting.value;
});

const isLastRound = computed(() => {
  return props.currentRound >= props.totalRounds;
});

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const handleMapGuess = (coordinates: Coordinates) => {
  guess.value.coordinates = coordinates;
};

const handleSubmit = () => {
  if (!canSubmit.value) return;

  isSubmitting.value = true;
  submissionTime.value = (Date.now() - roundStartTime.value) / 1000;

  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }

  emit('submit', { ...guess.value }, submissionTime.value);
};

const handleNextRound = () => {
  emit('nextRound');
};

const startTimer = () => {
  if (!props.showTimer) return;

  roundStartTime.value = Date.now();
  timeRemaining.value = props.timerDuration;

  timerInterval = window.setInterval(() => {
    timeRemaining.value -= 1;
    if (timeRemaining.value <= 0) {
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      emit('timeExpired');
    }
  }, 1000);
};

const resetRound = () => {
  showReveal.value = false;
  isSubmitting.value = false;
  guess.value = {
    name: '',
    coordinates: null,
    year: 1500,
  };
  submissionTime.value = 0;
  currentRoundScore.value = null;

  if (mapRef.value) {
    mapRef.value.clearMap();
    mapRef.value.resetView();
  }

  if (timerInterval) {
    clearInterval(timerInterval);
  }
  startTimer();
};

// Public method for parent to show reveal with score
const showRevealPhase = (score: RoundScore) => {
  currentRoundScore.value = score;
  showReveal.value = true;
  isSubmitting.value = false;

  // Show correct location on map (both pins will be visible)
  if (mapRef.value && props.currentFigure) {
    mapRef.value.showCorrectLocation(
      props.currentFigure.lat,
      props.currentFigure.lon
    );
  }
};

watch(
  () => props.currentFigure,
  (newFigure) => {
    if (newFigure) {
      resetRound();
    }
  },
);

onMounted(() => {
  roundStartTime.value = Date.now();
  startTimer();
});

onUnmounted(() => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

defineExpose({
  showRevealPhase,
  resetRound,
});
</script>

<style scoped>
.gameplay-container {
  @apply w-full h-full min-h-screen bg-noir-bg text-noir-text p-4 md:p-6;
}

.gameplay-header {
  @apply flex items-center justify-between mb-6 max-w-7xl mx-auto;
}

.round-counter {
  @apply text-xl md:text-2xl font-playfair text-noir-gold;
}

.timer {
  @apply text-2xl md:text-3xl font-mono text-noir-text px-4 py-2 bg-noir-surface rounded-lg border border-noir-gold/20;
}

.timer-urgent {
  @apply bg-noir-red/20 border-noir-red text-noir-red animate-pulse;
}

.prompt-phase {
  @apply max-w-7xl mx-auto;
}

.gameplay-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6;
}

.figure-section {
  @apply w-full;
}

.interaction-section {
  @apply w-full space-y-4;
}

.map-section {
  @apply w-full;
}

.controls-section {
  @apply w-full space-y-3;
}

.reveal-info-section {
  @apply w-full space-y-3;
}

/* Mobile: Stack vertically */
@media (max-width: 1023px) {
  .gameplay-grid {
    @apply space-y-4;
  }

  .figure-section {
    @apply max-w-md mx-auto;
  }
}
</style>
