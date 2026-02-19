<template>
  <div class="main-menu">
    <!-- Background radial glow -->
    <div class="menu-glow" aria-hidden="true"></div>

    <div class="menu-content">
      <!-- Title -->
      <div class="menu-header animate-fade-in">
        <h1 class="menu-logo">RETORN AL TERRITORI</h1>
        <div class="menu-divider"></div>
        <p class="menu-tagline">Endevina on i quan va ser feta la foto</p>
      </div>

      <!-- Mode buttons -->
      <nav class="menu-modes">
        <button class="mode-button group animate-slide-up stagger-2" @click="emit('modeSelect', 'daily')">
          <div class="mode-icon">🏆</div>
          <div class="mode-body">
            <div class="mode-title">Repte Diari</div>
            <div class="mode-desc">Un repte per dia · Compartit per tothom</div>
          </div>
          <span class="mode-arrow" aria-hidden="true">→</span>
        </button>

        <button class="mode-button group animate-slide-up stagger-3" @click="emit('modeSelect', 'freeplay')">
          <div class="mode-icon">🎯</div>
          <div class="mode-body">
            <div class="mode-title">Joc Lliure</div>
            <div class="mode-desc">Pràctica il·limitada · Sense pressió</div>
          </div>
          <span class="mode-arrow" aria-hidden="true">→</span>
        </button>
      </nav>

      <!-- ICGC logo -->
      <div class="menu-footer animate-fade-in stagger-4">
        <img
          src="/logos/ICGC_white_norma.svg"
          alt="Institut Cartogràfic i Geològic de Catalunya"
          class="icgc-logo"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  modeSelect: [mode: 'daily' | 'freeplay']
}>()
</script>

<style scoped>
/* ── Page ── */
.main-menu {
  @apply relative min-h-screen bg-noir-bg flex items-center justify-center p-6 overflow-hidden;
}

.menu-glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 90% 55% at 50% 38%, rgba(203,161,53,0.08) 0%, transparent 68%);
  pointer-events: none;
}

/* ── Content ── */
.menu-content {
  @apply relative z-10 w-full;
  max-width: 480px;
}

/* ── Header ── */
.menu-header {
  @apply text-center mb-14;
}

.menu-logo {
  @apply font-bebas text-noir-gold tracking-[0.1em];
  font-size: clamp(3.5rem, 13vw, 5.5rem);
  text-shadow: 0 0 48px rgba(203,161,53,0.22), 0 2px 0 rgba(0,0,0,0.5);
}

.menu-divider {
  @apply mx-auto my-5;
  width: 80px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(203,161,53,0.55), transparent);
}

.menu-tagline {
  @apply text-sm text-noir-text/45 font-playfair italic tracking-wide;
}

/* ── Mode buttons ── */
.menu-modes {
  @apply flex flex-col gap-3;
}

.mode-button {
  @apply flex items-center gap-4 w-full text-left;
  @apply rounded-2xl border border-noir-gold/10 bg-noir-surface/50;
  @apply px-5 py-4;
  @apply transition-all duration-300;
  backdrop-filter: blur(4px);
}

.mode-button:hover {
  @apply border-noir-gold/35 bg-noir-surface -translate-y-0.5;
  box-shadow: 0 10px 40px rgba(0,0,0,0.55), 0 0 24px rgba(203,161,53,0.1);
}

.mode-button:active {
  @apply translate-y-0;
}

.mode-icon {
  @apply text-2xl w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0;
  background: rgba(203,161,53,0.07);
  border: 1px solid rgba(203,161,53,0.10);
}

.mode-body {
  @apply flex-1 min-w-0;
}

.mode-title {
  @apply text-base font-playfair text-noir-text mb-0.5;
}

.mode-desc {
  @apply text-xs text-noir-text/45 leading-relaxed;
}

.mode-arrow {
  @apply text-noir-gold/30 text-base flex-shrink-0 transition-all duration-300;
}

.group:hover .mode-arrow {
  @apply text-noir-gold/65 translate-x-1;
}

/* ── Footer (logo) ── */
.menu-footer {
  @apply flex justify-center mt-12;
}

.icgc-logo {
  height: 56px;
  opacity: 0.45;
  filter: brightness(1.1);
  transition: opacity 0.3s;
}

.icgc-logo:hover {
  opacity: 0.7;
}
</style>
