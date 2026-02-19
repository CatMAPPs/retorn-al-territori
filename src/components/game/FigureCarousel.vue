<template>
  <Card :padding="padding" class="figure-carousel">
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

      <!-- Overlay de càrrega (per sobre de la imatge) -->
      <div v-if="loading && !imageError" class="state-overlay">
        <div class="spinner"></div>
        <p class="text-noir-text/60 mt-4 text-sm">Carregant imatge...</p>
      </div>

      <!-- Error -->
      <div v-if="imageError" class="state-overlay">
        <p class="text-noir-text/60">Imatge no disponible</p>
        <p class="text-noir-text/40 text-xs mt-1">{{ imageUrl }}</p>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import Card from '@/components/ui/Card.vue'

interface Props {
  nomFitxer: string
  altText?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  altText: 'Fotografia',
  padding: 'none',
})

const loading = ref(true)
const imageError = ref(false)

const imageUrl = computed(() => `/images/${props.nomFitxer}`)

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
  @apply relative w-full;
}

.image-wrapper {
  @apply relative w-full aspect-[3/4] bg-noir-bg rounded-lg overflow-hidden;
}

.figure-image {
  @apply w-full h-full object-cover transition-opacity duration-300;
}

.state-overlay {
  @apply absolute inset-0 flex flex-col items-center justify-center bg-noir-bg;
}

.spinner {
  @apply w-12 h-12 border-4 border-noir-gold/20 border-t-noir-gold rounded-full animate-spin;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
