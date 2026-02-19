<template>
  <div class="main-menu">
    <div class="menu-background"></div>

    <div class="menu-content">
      <!-- Logo/Title -->
      <div class="menu-header">
        <h1 class="menu-logo">🗺️ CARTOGUESSER</h1>
        <p class="menu-tagline">Endevina On i Quan</p>
      </div>

      <!-- Game mode buttons -->
      <div class="menu-modes">
        <button :class="modeButtonClass" @click="emit('modeSelect', 'daily')">
          <div class="mode-icon">🏆</div>
          <div class="mode-content">
            <div class="mode-title">Repte Diari</div>
            <div class="mode-description">Un repte per dia · Compartit per tothom</div>
          </div>
        </button>

        <button :class="modeButtonClass" @click="emit('modeSelect', 'freeplay')">
          <div class="mode-icon">🎯</div>
          <div class="mode-content">
            <div class="mode-title">Joc Lliure</div>
            <div class="mode-description">Pràctica il·limitada · Sense pressió</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const modeButtonClass = [
  'mode-button',
  'group',
  'relative',
  'w-full',
  'p-6',
  'bg-noir-surface',
  'border-2',
  'border-noir-gold/20',
  'rounded-xl',
  'transition-all',
  'duration-300',
  'hover:border-noir-gold/50',
  'hover:shadow-[0_0_20px_rgba(203,161,53,0.2)]',
  'hover:-translate-y-1',
  'active:translate-y-0',
]

const emit = defineEmits<{
  modeSelect: [mode: 'daily' | 'freeplay']
}>()
</script>

<style scoped>
.main-menu {
  @apply relative min-h-screen bg-noir-bg flex items-center justify-center p-4 overflow-hidden;
}

.menu-background {
  @apply absolute inset-0 opacity-5;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(203, 161, 53, 0.1) 2px,
    rgba(203, 161, 53, 0.1) 4px
  );
}

.menu-content {
  @apply relative z-10 w-full max-w-2xl;
}

.menu-header {
  @apply text-center mb-12;
}

.menu-logo {
  @apply text-6xl md:text-7xl font-bebas tracking-wider text-noir-gold mb-3;
  text-shadow: 0 0 20px rgba(203, 161, 53, 0.3);
  letter-spacing: 0.08em;
}

.menu-tagline {
  @apply text-lg md:text-xl text-noir-text/70 font-playfair italic;
}

.menu-modes {
  @apply space-y-4;
}

.mode-button {
  @apply flex items-center gap-4 text-left;
}

.mode-icon {
  @apply text-4xl flex-shrink-0;
}

.mode-content {
  @apply flex-1;
}

.mode-title {
  @apply text-xl md:text-2xl font-playfair text-noir-text mb-1;
}

.mode-description {
  @apply text-sm text-noir-text/60;
}
</style>
