<template>
  <div id="app">
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <component :is="Component" :key="route.path" />
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
#app {
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background: var(--noir-bg);
}
</style>
