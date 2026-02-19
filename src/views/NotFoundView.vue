<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-4">
    <div class="card max-w-2xl w-full text-center space-y-6">
      <h1 class="font-heading text-6xl text-noir-gold">404</h1>
      <p class="text-2xl">Page Not Found</p>
      <button class="btn btn-primary" @click="router.push({ name: 'home' })">
        Return to Home
      </button>
    </div>
  </div>
</template>

