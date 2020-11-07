<template lang="pug">
  .st-text-input-wrapper(:class="wrapperClasses")
    slot(name="top-label")
      label.top-label {{ topLabel }}
    input.input(
      v-bind="$attrs"
      :disabled="disabled"
      v-on="$listeners"
    )
    transition(name="fade")
      .relative(v-if="hasBottomLabel")
        slot(name="bottom-label")
          label.bottom-label {{ bottomLabel }}

</template>

<script lang="ts">
import { componentColors, componentSizes } from '@/components/sharedConstants';
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import { PropsTypes } from './StTextInput';

type Data = {}
type Methods = {}
type Computed = {
  wrapperClasses: string;
  hasTopLabel: boolean;
  hasBottomLabel: boolean;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    topLabel: {
      type: String,
      required: true,
      default: '',
    },
    bottomLabel: {
      type: String,
      required: true,
      default: '',
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    color: {
      type: String,
      required: false,
      default: componentColors[0],
      validator: (value) => componentColors.includes(value),
    },
    size: {
      type: String,
      required: false,
      default: componentSizes[0],
      validator: (value) => componentSizes.includes(value),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  } as RecordPropsDefinition<PropsTypes>,
  computed: {
    wrapperClasses() {
      const disabledClass = this.disabled ? 'disabled' : '';
      const { color, size } = this;
      return `${color} ${size} ${disabledClass}`;
    },
    hasTopLabel() {
      return (this.topLabel || '') !== ''
          || this.$slots.topLabel !== undefined
          || this.$scopedSlots.topLabel !== undefined;
    },
    hasBottomLabel() {
      return (this.bottomLabel || '') !== ''
          || this.$slots.bottomLabel !== undefined
          || this.$scopedSlots.bottomLabel !== undefined;
    },
  },
});
</script>

<style lang="postcss" scoped>
.st-text-input-wrapper {
  @apply flex flex-col;

  .input {
    @apply flex items-center transition-all duration-200 ease-out;
  }

  &.xs {
    @apply text-xs;
    .input {
      @apply h-7 px-2 my-1 text-xs;
    }
  }

  &.sm {
    @apply text-sm;
    .input {
      @apply h-8 px-2 my-1 text-sm;
    }
  }

  &.md {
    .input {
      @apply h-10 px-3 my-1 text-base;
    }
  }

  &.lg {
    .input {
      @apply h-12 px-3 my-1 text-lg;
    }
  }

  &.disabled {
    @apply opacity-60 cursor-not-allowed;
    .input:disabled {
      @apply cursor-not-allowed;

    }
  }
}

.light .st-text-input-wrapper {
  .input {
    @apply bg-white border border-gray-400;

    &:focus {
      @apply border-black outline-none shadow-outline-black rounded-1;
    }
  }

  &:hover .input:not(:disabled) {
    @apply border-black;
  }
}
</style>
