<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="modelValue"
        class="modal-backdrop"
        @click="handleBackdropClick"
        @keydown.esc="handleEscape"
      >
        <div
          :class="modalClasses"
          role="dialog"
          aria-modal="true"
          @click.stop
        >
          <!-- Close button -->
          <button
            v-if="closable"
            class="modal-close"
            aria-label="Close modal"
            @click="close"
          >
            ✕
          </button>

          <!-- Header -->
          <div v-if="$slots.header || title" class="modal-header">
            <slot name="header">
              <h2 class="text-xl font-playfair">{{ title }}</h2>
            </slot>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <slot />
          </div>

          <!-- Footer -->
          <div v-if="$slots.footer" class="modal-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';

interface Props {
  modelValue: boolean;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closable?: boolean;
  closeOnBackdrop?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  title: '',
  size: 'md',
  closable: true,
  closeOnBackdrop: true,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  close: [];
}>();

const modalClasses = computed(() => {
  const base = [
    'bg-noir-surface',
    'text-noir-text',
    'rounded-xl',
    'border',
    'border-noir-gold/14',
    'shadow-[0_20px_60px_rgba(0,0,0,0.8)]',
    'relative',
    'max-h-[90vh]',
    'overflow-y-auto',
  ];

  const sizes = {
    sm: ['max-w-sm'],
    md: ['max-w-2xl'],
    lg: ['max-w-4xl'],
    xl: ['max-w-6xl'],
  };

  return [...base, ...sizes[props.size], 'w-full', 'mx-4'];
});

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    close();
  }
};

const handleEscape = () => {
  if (props.closable) {
    close();
  }
};

// Lock body scroll when modal is open
watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },
);
</script>

<style scoped>
.modal-backdrop {
  @apply fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm;
}

.modal-close {
  @apply absolute right-4 top-4 text-noir-text hover:text-noir-gold transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center rounded-full hover:bg-noir-gold/10;
}

.modal-header {
  @apply border-b border-noir-gold/10 p-6;
}

.modal-body {
  @apply p-6;
}

.modal-footer {
  @apply border-t border-noir-gold/10 p-6 flex justify-end gap-3;
}

/* Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.28s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.98);
}
</style>

