<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Card from '@/components/ui/Card.vue'
import Button from '@/components/ui/Button.vue'
import GameplayView from '@/components/game/GameplayView.vue'
import ResultsScreen from '@/components/game/ResultsScreen.vue'
import { getDailyChallengeFigures } from '@/lib/data/figures'
import { calculateRoundScore } from '@/lib/scoring'
import type { Figure } from '@/types/figure'
import type { RoundScore } from '@/types/score'

const router = useRouter()

const gameplayRef = ref<InstanceType<typeof GameplayView> | null>(null)

const gameState = ref<'loading' | 'info' | 'playing' | 'completed'>('loading')
const figures = ref<Figure[]>([])
const currentFigure = ref<Figure | null>(null)
const currentRoundNumber = ref(1)
const scores = ref<RoundScore[]>([])
const finalResults = ref<{ totalScore: number; componentScores: { spatial: number; temporal: number; name: number; speed: number } } | null>(null)

const today = computed(() => new Date().toISOString().split('T')[0])
const dailyKey = computed(() => `carto_daily_${today.value}`)

const isLastRound = computed(() => currentRoundNumber.value >= 10)

const loadChallenge = async () => {
  try {
    // Check if already completed today
    const saved = localStorage.getItem(dailyKey.value)
    if (saved) {
      finalResults.value = JSON.parse(saved)
      gameState.value = 'completed'
      return
    }

    figures.value = await getDailyChallengeFigures(today.value)
    gameState.value = 'info'
  } catch (error) {
    console.error('Failed to load daily challenge:', error)
    gameState.value = 'info'
  }
}

const startChallenge = () => {
  if (figures.value.length === 0) return
  currentFigure.value = figures.value[0]
  currentRoundNumber.value = 1
  scores.value = []
  gameState.value = 'playing'
}

const handleSubmit = (
  guess: { name: string; coordinates: { lat: number; lon: number } | null; year: number },
  submissionTime: number,
) => {
  if (!currentFigure.value || !gameplayRef.value || !guess.coordinates) return

  const calculatedScore = calculateRoundScore(
    guess.name,
    guess.coordinates.lat,
    guess.coordinates.lon,
    guess.year,
    currentFigure.value.nom,
    currentFigure.value.lat,
    currentFigure.value.lon,
    currentFigure.value.any_foto,
    [],
    submissionTime,
    'daily_challenge',
  )

  const roundScore: RoundScore = {
    spatial: calculatedScore.spatial_score,
    temporal: calculatedScore.temporal_score,
    name: calculatedScore.name_score,
    speed: calculatedScore.speed_bonus,
    total: calculatedScore.total,
    distanceKm: calculatedScore.distance_km,
    yearDiff: calculatedScore.year_diff,
  }

  scores.value.push(roundScore)
  gameplayRef.value.showRevealPhase(roundScore)
}

const handleNextRound = () => {
  if (isLastRound.value) {
    const totalScore = scores.value.reduce((sum, s) => sum + s.total, 0)
    const result = {
      totalScore,
      componentScores: {
        spatial: scores.value.reduce((sum, s) => sum + s.spatial, 0),
        temporal: scores.value.reduce((sum, s) => sum + s.temporal, 0),
        name: scores.value.reduce((sum, s) => sum + s.name, 0),
        speed: scores.value.reduce((sum, s) => sum + s.speed, 0),
      },
    }

    // Save to localStorage so the user sees "already completed" on reload
    localStorage.setItem(dailyKey.value, JSON.stringify(result))
    finalResults.value = result
    gameState.value = 'completed'
  } else {
    currentRoundNumber.value++
    currentFigure.value = figures.value[currentRoundNumber.value - 1]
  }
}

const goToMenu = () => router.push('/')

onMounted(() => {
  loadChallenge()
})
</script>

<template>
  <div class="min-h-screen p-4">
    <!-- Loading -->
    <div v-if="gameState === 'loading'" class="flex items-center justify-center min-h-screen">
      <Card class="text-center">
        <div class="text-noir-text">Carregant Repte Diari...</div>
      </Card>
    </div>

    <!-- Info screen -->
    <div v-else-if="gameState === 'info'" class="flex items-center justify-center min-h-screen">
      <Card class="max-w-2xl w-full">
        <div class="text-center space-y-6">
          <div>
            <h1 class="text-4xl font-bebas text-noir-gold mb-2">REPTE DIARI</h1>
            <p class="text-noir-text/80">{{ today }}</p>
          </div>

          <div class="space-y-4">
            <Button
              v-if="figures.length > 0"
              size="lg"
              class="w-full"
              @click="startChallenge"
            >
              Comença el Repte
            </Button>
            <p v-else class="text-noir-red text-sm">No hi ha figures disponibles.</p>

            <Button variant="ghost" class="w-full" @click="goToMenu">
              Tornar al Menú
            </Button>
          </div>
        </div>
      </Card>
    </div>

    <!-- Gameplay -->
    <GameplayView
      v-else-if="gameState === 'playing' && currentFigure"
      ref="gameplayRef"
      :current-figure="currentFigure"
      :current-round="currentRoundNumber"
      :total-rounds="10"
      :show-timer="true"
      :timer-duration="45"
      :auto-advance="false"
      @submit="handleSubmit"
      @next-round="handleNextRound"
      @back-to-home="goToMenu"
    />

    <!-- Results -->
    <div v-else-if="gameState === 'completed' && finalResults" class="flex items-center justify-center min-h-screen">
      <ResultsScreen
        :total-score="finalResults.totalScore"
        :component-scores="finalResults.componentScores"
        :total-rounds="10"
        :show-play-again="false"
        :show-leaderboard="false"
        @back-to-menu="goToMenu"
      />
    </div>
  </div>
</template>
