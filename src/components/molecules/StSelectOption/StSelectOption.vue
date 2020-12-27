<template>
  <div class="st-select-option-wrapper" tabindex="0" @click="emitClickWithValue">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </div>
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
  @apply flex flex-col border border-t-0 px-4 py-2 cursor-pointer
  transition-all duration-200 ease-out;

  &:hover {
    @apply opacity-70;
  }

  &:active {
    @apply opacity-40;
  }

  &:focus-within {
    @apply outline-none;
  }
}

.st-select-option-wrapper,
.light .st-select-option-wrapper {
  @apply border-gray-900;

  &:focus-within {
    @apply shadow-outline-black;
  }
}

.st-select-option-wrapper,
.dark .st-select-option-wrapper {
  @apply border-gray-100;

  &:focus-within {
    @apply shadow-outline-white;
  }
}
</style>
