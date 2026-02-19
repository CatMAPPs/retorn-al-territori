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

interface Props {
  nomFitxer: string
  altText?: string
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
