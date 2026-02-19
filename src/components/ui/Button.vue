<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  type: 'button',
  fullWidth: false,
});

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

const buttonClasses = computed(() => {
  const base = [
    'rounded-lg',
    'font-medium',
    'transition-all',
    'duration-200',
    'transform',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-noir-gold/30',
    'disabled:opacity-40',
    'disabled:cursor-not-allowed',
    'disabled:transform-none',
  ];

  // Variant styles
  const variants = {
    primary: [
      'bg-noir-red',
      'text-noir-text',
      'border',
      'border-noir-gold/20',
      'shadow-md',
      'hover:shadow-[0_0_12px_rgba(203,161,53,0.3)]',
      'hover:-translate-y-0.5',
      'active:translate-y-0',
      'active:bg-[#3a0000]',
    ],
    secondary: [
      'bg-noir-surface',
      'text-noir-text',
      'border',
      'border-noir-gold/20',
      'shadow-md',
      'hover:border-noir-gold/40',
      'hover:-translate-y-0.5',
      'active:translate-y-0',
    ],
    ghost: [
      'bg-transparent',
      'text-noir-text',
      'border',
      'border-transparent',
      'hover:border-noir-gold/20',
      'hover:bg-noir-gold/5',
    ],
  };

  // Size styles
  const sizes = {
    sm: ['px-3', 'py-1.5', 'text-sm'],
    md: ['px-4', 'py-2', 'text-base'],
    lg: ['px-6', 'py-3', 'text-lg'],
  };

  // Width
  const width = props.fullWidth ? ['w-full'] : [];

  return [...base, ...variants[props.variant], ...sizes[props.size], ...width];
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
button {
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.06);
}
</style>

