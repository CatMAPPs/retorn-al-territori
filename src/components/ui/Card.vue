<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div :class="bodyClasses">
      <slot />
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  padding?: 'sm' | 'md' | 'lg' | 'none';
  noBorder?: boolean;
  noShadow?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  padding: 'md',
  noBorder: false,
  noShadow: false,
});

const cardClasses = computed(() => {
  const base = ['bg-noir-surface', 'text-noir-text', 'rounded-xl'];

  const border = props.noBorder ? [] : ['border', 'border-noir-gold/14'];

  const shadow = props.noShadow
    ? []
    : ['shadow-[0_8px_20px_rgba(0,0,0,0.6)]'];

  return [...base, ...border, ...shadow];
});

const bodyClasses = computed(() => {
  const paddings = {
    none: [],
    sm: ['p-3'],
    md: ['p-6'],
    lg: ['p-8'],
  };

  return paddings[props.padding];
});
</script>

<style scoped>
.card-header {
  @apply border-b border-noir-gold/10 p-4 font-playfair text-lg;
}

.card-footer {
  @apply border-t border-noir-gold/10 p-4;
}
</style>

