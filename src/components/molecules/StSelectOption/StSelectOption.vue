<template>
  <button class="st-select-option-wrapper" @click="emitClickWithValue">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </button>
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';

import { PropsTypes, defaultProps } from './StSelectOption';

type Data = {}
type Methods = {
  emitClickWithValue: () => void;
}
type Computed = {}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    label: {
      type: String,
      required: false,
      default: defaultProps.label,
    },
    value: {
      type: undefined,
      required: true,
      default: defaultProps.value,
    },
  } as RecordPropsDefinition<PropsTypes>,
  methods: {
    emitClickWithValue() {
      this.$emit('click', this.value);
    },
  },
});
</script>

<style lang="postcss" scoped>
.st-select-option-wrapper {
  @apply flex flex-col px-4 py-2 cursor-pointer
  w-full transition-all duration-200 ease-out
  outline-none;

  & + .st-select-option-wrapper {
    @apply border-t-1;
  }

  &:focus-within {
    @apply outline-none;
  }
}

.st-select-option-wrapper,
.light .st-select-option-wrapper {
  @apply bg-white border-gray-900;

  &:hover {
    @apply bg-gray-200;
  }

  &:focus-within {
    @apply bg-gray-300;
  }

  &:active {
    @apply bg-gray-400;
  }

}

.st-select-option-wrapper,
.dark .st-select-option-wrapper {
  @apply bg-gray-900 border-gray-100;

  &:hover {
    @apply bg-gray-800;
  }

  &:focus-within {
    @apply bg-gray-700;
  }

  &:active {
    @apply bg-gray-600;
  }
}
</style>
