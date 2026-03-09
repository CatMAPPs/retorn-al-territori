<template>
  <div class="figure-carousel">
    <div class="image-wrapper">
      <!-- La imatge sempre és al DOM perquè l'event @load pugui disparar-se -->
      <img
        :src="imageUrl"
        :alt="altText"
        class="figure-image"
        :class="{ 'opacity-0': loading }"
        @load="loading = false"
        @error="handleError"
      />

      <!-- Vignette cinematogràfic -->
      <div class="vignette" aria-hidden="true"></div>
      <!-- Badge -->
      <div class="photo-badge" aria-hidden="true">📷</div>

      <!-- Attribution badge (bottom-left) -->
      <div v-if="figure?.attributions && figure.attributions.length > 0" class="attribution-badge">
        <a 
          :href="figure.attributions[0].url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="attribution-link"
        >
          <span class="attribution-text">{{ figure.attributions[0].name }}</span>
          <svg class="external-icon" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>

      <!-- Overlay de càrrega -->
      <div v-if="loading && !imageError" class="state-overlay">
        <div class="spinner"></div>
        <p class="text-noir-text/60 mt-3 text-sm">Carregant imatge...</p>
      </div>

      <!-- Error -->
      <div v-if="imageError" class="state-overlay">
        <p class="text-noir-text/60">Imatge no disponible</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { Figure } from '@/types/figure'

interface Props {
  nomFitxer: string
  altText?: string
  figure?: Figure
}

const props = withDefaults(defineProps<Props>(), {
  altText: 'Fotografia',
})

const loading = ref(true)
const imageError = ref(false)

const imageUrl = computed(() => `${import.meta.env.BASE_URL}images/${props.nomFitxer}`)

const handleError = () => {
  loading.value = false
  imageError.value = true
}

watch(
  () => props.nomFitxer,
  () => {
    loading.value = true
    imageError.value = false
  },
)
</script>

<style scoped>
.figure-carousel {
  @apply relative w-full h-full bg-noir-surface;
}

.image-wrapper {
  @apply relative w-full h-full bg-noir-bg overflow-hidden;
}

.figure-image {
  @apply w-full h-full object-cover transition-opacity duration-300;
}

.state-overlay {
  @apply absolute inset-0 flex flex-col items-center justify-center bg-noir-bg;
  z-index: 3;
}

.vignette {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 28%),
    linear-gradient(to top,    rgba(0,0,0,0.45) 0%, transparent 38%);
  pointer-events: none;
  z-index: 1;
}

.photo-badge {
  position: absolute;
  top: 10px;
  right: 12px;
  font-size: 15px;
  opacity: 0.4;
  z-index: 2;
  filter: drop-shadow(0 1px 4px rgba(0,0,0,0.9));
}

/* Attribution badge */
.attribution-badge {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 4;
}

.attribution-link {
  @apply flex items-center justify-between w-full px-4 py-2 bg-noir-gold/95 hover:bg-noir-gold transition-colors;
  text-decoration: none;
}

.attribution-text {
  @apply text-xs text-noir-bg font-medium line-clamp-2 flex-1;
}

.external-icon {
  @apply flex-shrink-0 text-noir-bg opacity-80 ml-2;
}

.attribution-link:hover .attribution-text {
  @apply underline;
}

.spinner {
  @apply w-10 h-10 border-4 border-noir-gold/20 border-t-noir-gold rounded-full animate-spin;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
