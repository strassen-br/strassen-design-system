<template lang="pug">
  .st-text-input-wrapper(:class="wrapperClasses")
    slot(name="topLabel"): label.top-label {{ topLabelText }}

    input.input(
      v-bind="$attrs"
      :disabled="disabled"
      :value="value"
      v-on="$listeners"
      @input="emitInput"
      @click="emitClickIfNotDisabled"
    )

    transition(name="fade")
      .relative(v-if="hasBottomLabel")
        slot(name="bottomLabel"): label.bottom-label {{ bottomLabelText }}
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import { componentColors, componentSizes } from '@/components/sharedConstants';
import { PropsTypes } from './StTextInput';

type Data = {}
type Methods = {
  emitInput: (event: InputEvent) => void;
  emitClickIfNotDisabled: () => void;
}
type Computed = {
  wrapperClasses: string;
  hasTopLabel: boolean;
  hasBottomLabel: boolean;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    topLabelText: {
      type: String,
      required: true,
      default: '',
    },
    bottomLabelText: {
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
      default: 'primary',
      validator: (value) => componentColors.includes(value),
    },
    size: {
      type: String,
      required: false,
      default: 'md',
      validator: (value) => componentSizes.includes(value),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    uppercase: {
      type: Boolean,
      required: false,
      default: false,
    },
  } as RecordPropsDefinition<PropsTypes>,
  computed: {
    wrapperClasses() {
      const disabledClass = this.disabled ? 'disabled' : '';
      const uppercaseClass = this.uppercase ? 'uppercase' : '';
      const { color, size } = this;
      return `${color} ${size} ${disabledClass} ${uppercaseClass}`;
    },
    hasTopLabel() {
      return (this.topLabelText || '') !== ''
          || this.$slots.topLabel !== undefined
          || this.$scopedSlots.topLabel !== undefined;
    },
    hasBottomLabel() {
      return (this.bottomLabelText || '') !== ''
          || this.$slots.bottomLabel !== undefined
          || this.$scopedSlots.bottomLabel !== undefined;
    },
  },
  methods: {
    emitInput(event) {
      this.$emit('input', (event.target as HTMLInputElement).value);
    },
    emitClickIfNotDisabled() {
      if (this.disabled) return;
      this.$emit('click');
    },
  },
});
</script>

<style lang="postcss" scoped>
$input-transition: transition-all duration-200 ease-out;

.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-200;
}
.fade-enter, .fade-leave-to {
  @apply opacity-0;
}

.st-text-input-wrapper {
  @apply flex flex-col;

  .input {
    @apply flex items-center outline-none $input-transition;
  }

  .bottom-label {
    @apply absolute opacity-70 $input-transition;
  }

  &.xs {
    @apply pb-4 text-xs;
    .input {
      @apply h-8 px-2 mb-1;
    }
  }

  &.sm {
    @apply pb-5 text-sm;
    .input {
      @apply h-9 px-2 my-1;
    }
    .bottom-label {
      @apply text-xs;
    }
  }

  &.md {
    @apply pb-5 text-base;
    .input {
      @apply h-10 px-3 my-1 text-base;
    }
    .bottom-label {
      @apply text-sm;
    }
  }

  &.lg {
    @apply pb-6 text-lg;
    .input {
      @apply h-12 px-3 my-1 text-lg;
    }
    .bottom-label {
      @apply text-base;
    }
  }

  &.disabled {
    @apply opacity-50 cursor-not-allowed;
    .input:disabled {
      @apply cursor-not-allowed;

    }
  }

  &.uppercase,
  &.uppercase .input,
  &.uppercase .input::placeholder {
    @apply uppercase tracking-tight font-semibold;
  }
}

.light .st-text-input-wrapper {
  .input {
    @apply bg-white border border-gray-400;

    &:focus {
      @apply border-black shadow-outline-black;
    }
    &::placeholder {
      @apply text-gray-400;
    }
  }

  &:hover .input:not(:disabled) {
    @apply border-black;
  }

  &.danger {
    .input {
      @apply border-danger-light border-opacity-70;

      &:focus {
        @apply border-danger-light border-opacity-100 shadow-outline-danger rounded-1;
      }
    }
    .bottom-label {
      @apply text-danger-light opacity-100;
    }
    &:hover .input {
      @apply border-danger-light border-opacity-100;
    }
  }

  &.success {
    .input {
      @apply border-success-light border-opacity-70;

      &:focus {
        @apply border-success-light border-opacity-100 shadow-outline-success rounded-1;
      }
    }
    .bottom-label {
      @apply text-success-light opacity-100;
    }
    &:hover .input {
      @apply border-success-light border-opacity-100;
    }
  }
}

.dark .st-text-input-wrapper {
  .input {
    @apply bg-gray-900 border border-gray-600;

    &:focus {
      @apply border-white shadow-outline-white rounded-1;
    }
    &::placeholder {
      @apply text-gray-600;
    }
  }

  &:hover .input:not(:disabled) {
    @apply border-white;
  }

  &.danger {
    .input {
      @apply border-danger-dark border-opacity-70;

      &:focus {
        @apply border-danger-dark border-opacity-100 shadow-outline-danger rounded-1;
      }
    }
    .bottom-label {
      @apply text-danger-dark opacity-100;
    }
    &:hover .input {
      @apply border-danger-dark border-opacity-100;
    }
  }

  &.success {
    .input {
      @apply border-success-dark border-opacity-70;

      &:focus {
        @apply border-success-dark border-opacity-100 shadow-outline-success rounded-1;
      }
    }
    .bottom-label {
      @apply text-success-dark opacity-100;
    }
    &:hover .input {
      @apply border-success-dark border-opacity-100;
    }
  }
}
</style>
