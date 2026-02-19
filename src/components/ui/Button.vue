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
    'rounded-xl',
    'font-medium',
    'tracking-wide',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-noir-gold/30',
    'focus:ring-offset-1',
    'focus:ring-offset-noir-bg',
    'disabled:opacity-35',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
  ];

  const variants = {
    primary: [
      'bg-noir-red',
      'text-noir-text',
      'border',
      'border-noir-gold/25',
      'shadow-[0_2px_12px_rgba(0,0,0,0.4)]',
      'hover:brightness-110',
      'hover:-translate-y-px',
      'hover:shadow-[0_4px_20px_rgba(0,0,0,0.5),0_0_12px_rgba(203,161,53,0.15)]',
      'active:translate-y-0',
      'active:brightness-95',
    ],
    secondary: [
      'bg-noir-surface',
      'text-noir-text',
      'border',
      'border-noir-gold/20',
      'hover:border-noir-gold/40',
      'hover:-translate-y-px',
      'active:translate-y-0',
    ],
    ghost: [
      'bg-transparent',
      'text-noir-text/60',
      'border',
      'border-transparent',
      'hover:text-noir-text/90',
      'hover:border-noir-gold/15',
      'hover:bg-noir-gold/5',
    ],
  };

  const sizes = {
    sm:  ['px-3',   'py-1.5', 'text-sm'],
    md:  ['px-4',   'py-2',   'text-sm'],
    lg:  ['px-5',   'py-3',   'text-base'],
  };

  const width = props.fullWidth ? ['w-full'] : [];

  return [...base, ...variants[props.variant], ...sizes[props.size], ...width];
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) emit('click', event);
};
</script>
