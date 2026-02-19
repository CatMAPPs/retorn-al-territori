<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { gameStore } from '@/stores/gameStore'
import { uiStore } from '@/stores/uiStore'
import { useStore } from '@/composables/useStore'
import { getRandomFigures } from '@/lib/data/figures'
import { GameplayView, ResultsScreen } from '@/components/game'
import { Card, Button } from '@/components/ui'
import type { Guess as GameGuess } from '@/types/game'
import type { RoundScore } from '@/types/score'

const router = useRouter()
const game = useStore(gameStore)
const ui = useStore(uiStore)

const gameplayRef = ref<InstanceType<typeof GameplayView> | null>(null)
const showResults = ref(false)
const error = ref<string | null>(null)

const currentFigure = computed(() => game.value.currentRound?.figure || null)
const currentRoundNumber = computed(() => game.value.currentRound?.round_number || 1)
const isLoading = computed(() => ui.value.loading)

const finalResults = computed(() => {
  const session = game.value.session
  if (!session) return null

  const rounds = session.rounds
  const spatial = rounds.reduce((sum, r) => sum + (r.score?.spatial_score || 0), 0)
  const temporal = rounds.reduce((sum, r) => sum + (r.score?.temporal_score || 0), 0)
  const name = rounds.reduce((sum, r) => sum + (r.score?.name_score || 0), 0)
  const speed = rounds.reduce((sum, r) => sum + (r.score?.speed_bonus || 0), 0)

  return {
    totalScore: session.total_score,
    componentScores: { spatial, temporal, name, speed },
  }
})

const handleSubmit = (
  guess: { name: string; coordinates: { lat: number; lon: number } | null; year: number },
  submissionTime: number,
) => {
  if (!guess.coordinates) return

  const gameGuess: GameGuess = {
    name: guess.name,
    lat: guess.coordinates.lat,
    lon: guess.coordinates.lon,
    year: guess.year,
    submission_time: submissionTime,
  }

  gameStore.getState().submitGuess(gameGuess)
  gameStore.getState().revealAnswer()

  const currentRound = game.value.currentRound
  if (currentRound && currentRound.score && gameplayRef.value) {
    const roundScore: RoundScore = {
      spatial: currentRound.score.spatial_score,
      temporal: currentRound.score.temporal_score,
      name: currentRound.score.name_score,
      speed: currentRound.score.speed_bonus,
      total: currentRound.score.total,
      distanceKm: currentRound.score.distance_km,
      yearDiff: currentRound.score.year_diff,
    }
    gameplayRef.value.showRevealPhase(roundScore)
  }
}

const handleNextRound = () => {
  const session = game.value.session
  if (!session) return

  if (currentRoundNumber.value >= 10) {
    gameStore.getState().endGame()
    showResults.value = true
  } else {
    gameStore.getState().nextRound()
  }
}

const handlePlayAgain = async () => {
  showResults.value = false
  gameStore.getState().resetGame()
  await initGame()
}

const handleBackToMenu = () => {
  gameStore.getState().resetGame()
  router.push({ name: 'home' })
}

const initGame = async () => {
  try {
    error.value = null
    uiStore.getState().setLoading(true)
    const figures = await getRandomFigures(10)

    if (!figures || figures.length === 0) {
      throw new Error('No hi ha figures disponibles. Afegeix dades a public/figures.json.')
    }

    gameStore.getState().startGame('free_play', figures)
    showResults.value = false
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Error desconegut'
    error.value = message
    console.error('Failed to load game:', err)
    try {
      uiStore.getState().showToast('error', message)
    } catch {
      // UI store might not be initialized yet
    }
    setTimeout(() => {
      router.push({ name: 'home' })
    }, 3000)
  } finally {
    uiStore.getState().setLoading(false)
  }
}

onMounted(() => {
  initGame()
})
</script>

<template>
  <div class="free-play-view">
    <!-- Error state -->
    <div v-if="error" class="error-container">
      <Card class="error-card">
        <h2 class="text-2xl font-playfair text-noir-red mb-4">⚠️ Error carregant el joc</h2>
        <p class="text-noir-text mb-4">{{ error }}</p>
        <Button variant="primary" @click="router.push({ name: 'home' })">
          Tornar al menú
        </Button>
        <Button variant="secondary" class="mt-2" @click="initGame">
          Tornar a intentar
        </Button>
      </Card>
    </div>

    <!-- Loading state -->
    <div v-else-if="isLoading" class="loading-container">
      <div class="spinner"></div>
      <p class="text-noir-text mt-4">Carregant joc...</p>
    </div>

    <!-- Gameplay -->
    <GameplayView
      v-else-if="!showResults && currentFigure"
      ref="gameplayRef"
      :current-figure="currentFigure"
      :current-round="currentRoundNumber"
      :total-rounds="10"
      :show-timer="false"
      :auto-advance="false"
      @submit="handleSubmit"
      @next-round="handleNextRound"
      @back-to-home="handleBackToMenu"
    />

    <!-- Results -->
    <ResultsScreen
      v-else-if="showResults && finalResults"
      :total-score="finalResults.totalScore"
      :component-scores="finalResults.componentScores"
      :total-rounds="10"
      :show-play-again="true"
      :show-leaderboard="false"
      @play-again="handlePlayAgain"
      @back-to-menu="handleBackToMenu"
    />
  </div>
</template>

<style scoped>
.free-play-view {
  @apply min-h-screen bg-noir-bg;
}

.loading-container,
.error-container {
  @apply flex flex-col items-center justify-center min-h-screen p-4;
}

.error-card {
  @append max-w-md w-full;
}

.spinner {
  @apply w-16 h-16 border-4 border-noir-gold/20 border-t-noir-gold rounded-full animate-spin;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
