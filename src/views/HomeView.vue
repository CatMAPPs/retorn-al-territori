<script setup lang="ts">
import { useRouter } from 'vue-router'
import { MainMenu } from '@/components/ui'

const router = useRouter()

const handleModeSelect = (mode: 'daily' | 'freeplay') => {
  if (mode === 'daily') router.push({ name: 'daily-challenge' })
  else router.push({ name: 'free-play' })
}
</script>

<template>
  <MainMenu @mode-select="handleModeSelect" />
</template>
