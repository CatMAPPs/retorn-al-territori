<template>
  <Card :padding="padding" class="name-input-container">
    <div class="flex flex-col gap-2">
      <label for="figure-name" class="text-sm font-medium text-noir-text">
        Who is this person?
      </label>
      <input
        id="figure-name"
        v-model="inputValue"
        type="text"
        :placeholder="placeholder"
        :disabled="disabled"
        class="name-input"
        @input="handleInput"
        @keydown.enter="handleEnter"
      />
      <div v-if="hint" class="hint-text">
        {{ hint }}
      </div>
      <button
        v-if="allowSkip"
        class="skip-button"
        :disabled="disabled"
        @click="handleSkip"
      >
        Skip Name
      </button>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Card from '@/components/ui/Card.vue';

interface Props {
  modelValue: string;
  disabled?: boolean;
  placeholder?: string;
  hint?: string;
  allowSkip?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  placeholder: 'Enter the person\'s name...',
  hint: 'Spelling doesn\'t have to be perfect!',
  allowSkip: true,
  padding: 'sm',
});

const emit = defineEmits<{
  'update:modelValue': [value: string];
  enter: [];
  skip: [];
}>();

const inputValue = ref(props.modelValue);

const handleInput = () => {
  emit('update:modelValue', inputValue.value);
};

const handleEnter = () => {
  emit('enter');
};

const handleSkip = () => {
  inputValue.value = '';
  emit('update:modelValue', '');
  emit('skip');
};

// Sync with external changes
watch(
  () => props.modelValue,
  (newValue) => {
    inputValue.value = newValue;
  },
);
</script>

<style scoped>
.name-input-container {
  @apply w-full;
}

.name-input {
  @apply w-full px-4 py-3 bg-noir-surface text-noir-text border border-noir-gold/20 rounded-lg text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-noir-gold/30 focus:border-noir-gold/40 placeholder:text-noir-text/40;
}

.name-input:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.hint-text {
  @apply text-xs text-noir-text/60;
}

.skip-button {
  @apply px-3 py-1.5 text-sm text-noir-text/70 hover:text-noir-gold transition-colors border border-noir-gold/10 rounded hover:border-noir-gold/30;
}

.skip-button:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>

