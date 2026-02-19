<template>
  <div class="results-container">
    <Card class="results-card">
      <!-- Header -->
      <div class="results-header">
        <h1 class="results-title">Game Complete!</h1>
        <div class="final-score">
          <span class="score-value">{{ totalScore }}</span>
          <span class="score-max">/ {{ maxScore }}</span>
        </div>
        <div class="score-percentage">
          {{ scorePercentage }}% Accuracy
        </div>
      </div>

      <!-- Component breakdown -->
      <div class="breakdown-section">
        <h2 class="breakdown-title">Score Breakdown</h2>
        
        <div class="breakdown-grid">
          <!-- Location -->
          <div class="breakdown-item">
            <div class="breakdown-icon">📍</div>
            <div class="breakdown-content">
              <div class="breakdown-label">Location Accuracy</div>
              <div class="breakdown-score">
                {{ componentScores.spatial }} <span class="text-noir-text/60">/ {{ maxComponentScore }}</span>
              </div>
              <div class="breakdown-bar">
                <div 
                  class="breakdown-bar-fill"
                  :style="{ width: `${(componentScores.spatial / maxComponentScore) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Timeline -->
          <div class="breakdown-item">
            <div class="breakdown-icon">📅</div>
            <div class="breakdown-content">
              <div class="breakdown-label">Timeline Accuracy</div>
              <div class="breakdown-score">
                {{ componentScores.temporal }} <span class="text-noir-text/60">/ {{ maxComponentScore }}</span>
              </div>
              <div class="breakdown-bar">
                <div 
                  class="breakdown-bar-fill"
                  :style="{ width: `${(componentScores.temporal / maxComponentScore) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Name -->
          <div class="breakdown-item">
            <div class="breakdown-icon">👤</div>
            <div class="breakdown-content">
              <div class="breakdown-label">Name Accuracy</div>
              <div class="breakdown-score">
                {{ componentScores.name }} <span class="text-noir-text/60">/ {{ maxComponentScore }}</span>
              </div>
              <div class="breakdown-bar">
                <div 
                  class="breakdown-bar-fill"
                  :style="{ width: `${(componentScores.name / maxComponentScore) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>

          <!-- Speed (if applicable) -->
          <div v-if="componentScores.speed > 0" class="breakdown-item">
            <div class="breakdown-icon">⚡</div>
            <div class="breakdown-content">
              <div class="breakdown-label">Speed Bonus</div>
              <div class="breakdown-score">
                {{ componentScores.speed }} <span class="text-noir-text/60">/ {{ maxSpeedScore }}</span>
              </div>
              <div class="breakdown-bar">
                <div 
                  class="breakdown-bar-fill speed-fill"
                  :style="{ width: `${(componentScores.speed / maxSpeedScore) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional stats (if provided) -->
      <div v-if="showStats" class="stats-section">
        <div v-if="globalRank" class="stat-item">
          <span class="stat-label">Global Rank</span>
          <span class="stat-value">#{{ globalRank }}</span>
        </div>
        <div v-if="streak" class="stat-item">
          <span class="stat-label">Streak</span>
          <span class="stat-value">🔥 {{ streak }} days</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="results-actions">
        <Button
          v-if="showPlayAgain"
          variant="primary"
          size="lg"
          full-width
          @click="handlePlayAgain"
        >
          Play Again
        </Button>
        <Button
          v-if="showLeaderboard"
          variant="secondary"
          size="lg"
          full-width
          @click="handleViewLeaderboard"
        >
          View Leaderboard
        </Button>
        <Button
          variant="ghost"
          size="md"
          full-width
          @click="handleBackToMenu"
        >
          Back to Menu
        </Button>
      </div>

      <!-- Guest signup prompt -->
      <div v-if="showSignupPrompt" class="signup-prompt">
        <div class="signup-header">
          <div class="signup-icon">🎭</div>
          <h3 class="signup-title">Join the Investigation</h3>
        </div>
        <p class="signup-text">
          Create a free account to save your scores, compete on daily leaderboards, and unlock multiplayer games with friends.
        </p>
        <Button
          variant="primary"
          size="lg"
          full-width
          @click="handleSignup"
        >
          Sign Up Free
        </Button>
        <p class="signup-disclaimer">
          No email verification required • Quick & secure
        </p>
      </div>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Card from '@/components/ui/Card.vue';
import Button from '@/components/ui/Button.vue';

interface ComponentScores {
  spatial: number;
  temporal: number;
  name: number;
  speed: number;
}

interface Props {
  totalScore: number;
  componentScores: ComponentScores;
  totalRounds?: number;
  globalRank?: number;
  streak?: number;
  showPlayAgain?: boolean;
  showLeaderboard?: boolean;
  showSignupPrompt?: boolean;
  showStats?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  totalRounds: 10,
  showPlayAgain: true,
  showLeaderboard: false,
  showSignupPrompt: false,
  showStats: false,
});

const emit = defineEmits<{
  playAgain: [];
  viewLeaderboard: [];
  backToMenu: [];
  signup: [];
}>();

const maxScore = computed(() => props.totalRounds * 2500);
const maxComponentScore = computed(() => props.totalRounds * 800);
const maxSpeedScore = computed(() => props.totalRounds * 100);

const scorePercentage = computed(() => {
  return Math.round((props.totalScore / maxScore.value) * 100);
});

const handlePlayAgain = () => emit('playAgain');
const handleViewLeaderboard = () => emit('viewLeaderboard');
const handleBackToMenu = () => emit('backToMenu');
const handleSignup = () => emit('signup');
</script>

<style scoped>
.results-container {
  @apply flex items-center justify-center min-h-screen bg-noir-bg p-4;
}

.results-card {
  @apply w-full max-w-3xl animate-fade-in;
}

.results-header {
  @apply text-center pb-6 border-b border-noir-gold/20 mb-6;
}

.results-title {
  @apply text-4xl font-playfair text-noir-gold mb-4;
}

.final-score {
  @apply flex items-baseline justify-center gap-2 mb-2;
}

.score-value {
  @apply text-6xl font-mono font-bold text-noir-text;
}

.score-max {
  @apply text-2xl font-mono text-noir-text/60;
}

.score-percentage {
  @apply text-xl text-noir-gold/80 font-medium;
}

.breakdown-section {
  @apply mb-6;
}

.breakdown-title {
  @apply text-2xl font-playfair text-noir-text mb-4;
}

.breakdown-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.breakdown-item {
  @apply flex items-start gap-3 p-4 bg-noir-bg rounded-lg border border-noir-gold/10;
}

.breakdown-icon {
  @apply text-3xl;
}

.breakdown-content {
  @apply flex-1;
}

.breakdown-label {
  @apply text-sm text-noir-text/80 mb-1;
}

.breakdown-score {
  @apply text-xl font-mono font-bold text-noir-text mb-2;
}

.breakdown-bar {
  @apply w-full h-2 bg-noir-surface rounded-full overflow-hidden;
}

.breakdown-bar-fill {
  @apply h-full bg-gradient-to-r from-noir-gold to-noir-gold/70 transition-all duration-700 ease-out;
}

.speed-fill {
  @apply bg-gradient-to-r from-noir-red to-noir-gold;
}

.stats-section {
  @apply flex flex-wrap justify-center gap-6 py-6 border-y border-noir-gold/10 mb-6;
}

.stat-item {
  @apply flex flex-col items-center gap-1;
}

.stat-label {
  @apply text-sm text-noir-text/60;
}

.stat-value {
  @apply text-2xl font-bold text-noir-gold;
}

.results-actions {
  @apply space-y-3;
}

.signup-prompt {
  @apply mt-6 pt-6 border-t border-noir-gold/20 text-center space-y-4 bg-noir-surface/50 p-6 rounded-lg;
}

.signup-header {
  @apply flex items-center justify-center gap-3 mb-2;
}

.signup-icon {
  @apply text-2xl;
}

.signup-title {
  @apply text-xl font-playfair text-noir-gold;
}

.signup-text {
  @apply text-noir-text/90 text-sm leading-relaxed max-w-sm mx-auto;
}

.signup-disclaimer {
  @apply text-noir-text/50 text-xs mt-3;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out;
}
</style>

