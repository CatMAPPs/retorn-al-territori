<template>
  <div class="input-wrapper">
    <label v-if="label" :for="inputId" class="input-label">
      {{ label }}
      <span v-if="required" class="text-noir-red">*</span>
    </label>
    <div class="relative">
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="inputClasses"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <div v-if="error" class="input-error">
        {{ error }}
      </div>
      <div v-if="hint && !error" class="input-hint">
        {{ hint }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

interface Props {
  modelValue: string | number;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
  placeholder?: string;
  error?: string;
  hint?: string;
  disabled?: boolean;
  required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  type: 'text',
  placeholder: '',
  error: '',
  hint: '',
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: string | number];
  blur: [event: FocusEvent];
  focus: [event: FocusEvent];
}>();

const inputId = ref(`input-${Math.random().toString(36).substr(2, 9)}`);

const inputClasses = computed(() => {
  const base = [
    'w-full',
    'px-4',
    'py-2.5',
    'bg-noir-surface',
    'text-noir-text',
    'border',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'focus:outline-none',
    'focus:ring-2',
    'placeholder:text-noir-text/40',
  ];

  const state = props.error
    ? ['border-noir-red', 'focus:ring-noir-red/30']
    : ['border-noir-gold/20', 'focus:border-noir-gold/40', 'focus:ring-noir-gold/20'];

  const disabled = props.disabled
    ? ['opacity-50', 'cursor-not-allowed']
    : ['hover:border-noir-gold/30'];

  return [...base, ...state, ...disabled];
});

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = props.type === 'number' ? Number(target.value) : target.value;
  emit('update:modelValue', value);
};

const handleBlur = (event: FocusEvent) => {
  emit('blur', event);
};

const handleFocus = (event: FocusEvent) => {
  emit('focus', event);
};
</script>

<style scoped>
.input-wrapper {
  @apply w-full;
}

.input-label {
  @apply block text-sm font-medium text-noir-text mb-2;
}

.input-error {
  @apply text-sm text-noir-red mt-1;
}

.input-hint {
  @apply text-sm text-noir-text/60 mt-1;
}

input {
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.06);
}
</style>

