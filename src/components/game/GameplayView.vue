<template>
  <div class="gameplay-container">
    <!-- Header -->
    <div class="gameplay-header">
      <div class="header-left">
        <div class="round-dots">
          <span
            v-for="i in totalRounds"
            :key="i"
            class="dot"
            :class="{ 'dot-done': i < currentRound, 'dot-current': i === currentRound }"
          ></span>
        </div>
        <span class="round-label">Ronda {{ currentRound }}</span>
      </div>
      <div class="header-right">
        <div v-if="showTimer" class="timer" :class="{ 'timer-urgent': timeRemaining <= 10 }">
          {{ formatTime(timeRemaining) }}
        </div>
        <button class="home-btn" title="Abandonar la partida" @click="showAbandonModal = true">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </button>
      </div>
    </div>

    <!--
      Grid layout:
        Mobile  → image & map side-by-side (top row) | controls full-width (bottom row)
        Desktop → image tall left col | map (top-right) + controls (bottom-right)
    -->
    <div class="gameplay-body">
      <!-- Figure image -->
      <div class="figure-section">
        <FigureCarousel
          v-if="currentFigure"
          :nom-fitxer="currentFigure.nom_fitxer"
          :alt-text="`Fotografia ronda ${currentRound}`"
          :figure="currentFigure"
        />
      </div>

      <!-- Map (always mounted) -->
      <div class="map-section">
        <InteractiveMap
          ref="mapRef"
          :disabled="isSubmitting || showReveal"
          @guess="handleMapGuess"
        />
      </div>

      <!-- Controls (hidden during reveal) -->
      <div v-show="!showReveal" class="controls-section">
        <div class="submit-wrap">
          <p class="hint-text" :class="{ invisible: canSubmit }">Marca una ubicació al mapa</p>
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
      </div>

      <!-- Reveal info (shown during reveal) -->
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

    <!-- Modal abandonar -->
    <Modal v-model="showAbandonModal" size="sm" :closable="false">
      <template #header>
        <h2 class="text-base font-playfair text-noir-text">Abandonar la partida?</h2>
      </template>
      <p class="text-sm text-noir-text/60 leading-relaxed">
        Segur que vols sortir? El progrés de la ronda actual no es guardarà.
      </p>
      <template #footer>
        <Button variant="ghost" size="sm" @click="showAbandonModal = false">Continuar jugant</Button>
        <Button variant="primary" size="sm" @click="confirmAbandon">Abandonar</Button>
      </template>
    </Modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import {
  FigureCarousel,
  InteractiveMap,
  RevealPhase
} from '@/components/game';
import Button from '@/components/ui/Button.vue';
import Modal from '@/components/ui/Modal.vue';
import type { Figure, Coordinates } from '@/types/figure';
import type { RoundScore } from '@/types/score';

interface Guess {
  coordinates: Coordinates | null;
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
  submit: [guess: { name: string; coordinates: Coordinates | null; year: number }, submissionTime: number]; // year always 0
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

const guess = ref<Guess>({ coordinates: null });
const showAbandonModal = ref(false);
const confirmAbandon = () => { showAbandonModal.value = false; emit('backToHome'); };

let timerInterval: number | null = null;

const canSubmit = computed(() => guess.value.coordinates !== null && !isSubmitting.value);
const isLastRound = computed(() => props.currentRound >= props.totalRounds);

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

const handleMapGuess = (coordinates: Coordinates) => { guess.value.coordinates = coordinates; };

const handleSubmit = () => {
  if (!canSubmit.value) return;
  isSubmitting.value = true;
  submissionTime.value = (Date.now() - roundStartTime.value) / 1000;
  if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  emit('submit', { name: '', year: 0, ...guess.value }, submissionTime.value);
};

const handleNextRound = () => emit('nextRound');

const startTimer = () => {
  if (!props.showTimer) return;
  roundStartTime.value = Date.now();
  timeRemaining.value = props.timerDuration;
  timerInterval = window.setInterval(() => {
    timeRemaining.value -= 1;
    if (timeRemaining.value <= 0) {
      if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
      emit('timeExpired');
    }
  }, 1000);
};

const resetRound = () => {
  showReveal.value = false;
  isSubmitting.value = false;
  guess.value = { coordinates: null };
  submissionTime.value = 0;
  currentRoundScore.value = null;
  if (mapRef.value) { mapRef.value.clearMap(); mapRef.value.resetView(); }
  if (timerInterval) clearInterval(timerInterval);
  startTimer();
};

const showRevealPhase = (score: RoundScore) => {
  currentRoundScore.value = score;
  showReveal.value = true;
  isSubmitting.value = false;
  if (mapRef.value && props.currentFigure) {
    mapRef.value.showCorrectLocation(props.currentFigure.lat, props.currentFigure.lon);
  }
};

watch(() => props.currentFigure, (newFigure) => { if (newFigure) resetRound(); });

onMounted(() => { roundStartTime.value = Date.now(); startTimer(); });
onUnmounted(() => { if (timerInterval) clearInterval(timerInterval); });

defineExpose({ showRevealPhase, resetRound });
</script>

<style scoped>
/* ── Outer container ── */
.gameplay-container {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  overflow: hidden;
  @apply bg-noir-bg text-noir-text;
}

/* ── Header ── */
.gameplay-header {
  flex-shrink: 0;
  @apply flex items-center justify-between px-5 py-3;
  border-bottom: 1px solid rgba(203,161,53,0.07);
  background: rgba(10,9,8,0.9);
  backdrop-filter: blur(8px);
}

.header-left {
  @apply flex items-center gap-3;
}

.round-dots {
  @apply flex items-center gap-1.5;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(203,161,53,0.15);
  transition: all 0.35s cubic-bezier(0.25,1,0.5,1);
}

.dot-done {
  background: rgba(203,161,53,0.42);
}

.dot-current {
  width: 16px;
  border-radius: 3px;
  background: #CBA135;
  box-shadow: 0 0 8px rgba(203,161,53,0.5);
}

.round-label {
  @apply text-xs font-mono tracking-wide;
  color: rgba(237,224,206,0.38);
}

.header-right {
  @apply flex items-center gap-2;
}

.home-btn {
  @apply w-8 h-8 flex items-center justify-center rounded-lg;
  color: rgba(237,224,206,0.35);
  border: 1px solid transparent;
  transition: all 0.2s;
}

.home-btn:hover {
  color: rgba(237,224,206,0.75);
  background: rgba(203,161,53,0.06);
  border-color: rgba(203,161,53,0.18);
}

.timer {
  @apply text-sm font-mono px-3 py-1 rounded-lg;
  background: rgba(0,0,0,0.45);
  border: 1px solid rgba(203,161,53,0.18);
  color: #f1e6d6;
}

.timer-urgent {
  @apply animate-pulse;
  background: rgba(85,0,0,0.5);
  border-color: rgba(203,61,53,0.6);
  color: #ff6b6b;
}

/* ──────────────────────────────────────────────
   MOBILE-FIRST GRID
   ────────────────────────────────────────────── */
.gameplay-body {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr auto;
  grid-template-areas:
    "image"
    "map"
    "controls";
  overflow: hidden;
  padding: 8px;
  gap: 8px;
  background: #090808;
}

.figure-section {
  grid-area: image;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(203,161,53,0.15);
  box-shadow: 0 4px 20px rgba(0,0,0,0.6);
}

.map-section {
  grid-area: map;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid rgba(203,161,53,0.12);
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
}

.controls-section {
  grid-area: controls;
  border-radius: 14px;
  border: 1px solid rgba(203,161,53,0.08);
  background: rgba(27,25,24,0.85);
  padding: 10px 14px 12px;
}

.hint-text {
  @apply text-xs text-center mb-2 font-mono;
  color: rgba(237,224,206,0.28);
  letter-spacing: 0.04em;
}

.reveal-info-section {
  grid-area: controls;
  overflow-y: auto;
  border-radius: 14px;
  border: 1px solid rgba(203,161,53,0.08);
  max-height: 48vh;
}

/* ──────────────────────────────────────────────
   DESKTOP (≥1024px)
   ────────────────────────────────────────────── */
@media (min-width: 1024px) {
  .gameplay-body {
    grid-template-columns: 42fr 58fr;
    grid-template-rows: 1fr auto;
    grid-template-areas:
      "image map"
      "image controls";
  }

  .reveal-info-section { max-height: 45vh; }
}
</style>
