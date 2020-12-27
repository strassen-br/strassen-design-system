<template lang="pug">
  .st-text-input-wrapper(:class="wrapperClasses")
    template(v-if="hasTopLabel")
      slot(name="topLabel")
        label.top-label(:for="$attrs.id") {{ topLabelText }}

    .relative-input-wrapper
      input.input(
        v-bind="$attrs"
        :disabled="disabled"
        :value="value"
        v-on="inputListeners"
      )
      .left-slot: slot(name="left")
      .right-slot: slot(name="right")

    transition(name="fade")
      .relative-bottom-wrapper(v-if="hasBottomLabel")
        slot(name="bottomLabel")
          label.bottom-label(:for="$attrs.id") {{ bottomLabelText }}
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import { componentColors, componentSizes } from '../../sharedConstants';
import { PropsTypes, defaultProps } from './StTextInput';

type Data = {}
type Methods = {
  emitInput: (event: InputEvent) => void;
  emitClickIfNotDisabled: () => void;
}
type Computed = {
  wrapperClasses: string;
  hasTopLabel: boolean;
  hasBottomLabel: boolean;
  inputListeners: Record<string, Function>;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  inheritAttrs: false,
  props: {
    topLabelText: {
      type: String,
      required: false,
      default: defaultProps.topLabelText,
    },
    bottomLabelText: {
      type: String,
      required: false,
      default: defaultProps.bottomLabelText,
    },
    value: {
      type: String,
      required: false,
      default: defaultProps.value,
    },
    color: {
      type: String,
      required: false,
      default: defaultProps.color,
      validator: (value) => componentColors.includes(value),
    },
    size: {
      type: String,
      required: false,
      default: defaultProps.size,
      validator: (value) => componentSizes.includes(value),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: defaultProps.disabled,
    },
    uppercase: {
      type: Boolean,
      required: false,
      default: defaultProps.uppercase,
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
    inputListeners() {
      return {
        ...this.$listeners,
        input: this.emitInput,
        click: this.emitClickIfNotDisabled,
      };
    },
  },
  methods: {
    emitInput(event) {
      this.$emit('input', (event.target as HTMLInputElement).value);
      // this makes sure the dom is updated
      // even if the new value from props is equal to the old
      // this can happen when parents use masks
      this.$forceUpdate();
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
    @apply flex items-center w-full outline-none $input-transition;
  }

  .relative-input-wrapper {
    @apply relative;
  }

  .relative-bottom-wrapper {
    @apply relative;
    .bottom-label {
      @apply absolute opacity-70 $input-transition;
    }
  }

  .left-slot,
  .right-slot {
    @apply absolute top-0 h-full flex justify-center items-center;
  }
  .left-slot {
    @apply left-0;
  }
  .right-slot {
    @apply right-0;
  }

  &.xs {
    @apply pb-4 text-xs;
    .relative-input-wrapper {
      @apply  mb-1;
      .input {
        @apply h-9 px-3;
      }
    }
  }

  &.sm {
    @apply pb-5 text-sm;
    .relative-input-wrapper {
      @apply  my-1;
      .input {
        @apply h-10 px-3;
      }
    }
    .bottom-label {
      @apply text-xs;
    }
  }

  &.md {
    @apply pb-5 text-base;
    .relative-input-wrapper {
      @apply  my-1;
      .input {
        @apply h-10 px-3;
      }
    }
    .bottom-label {
      @apply text-sm;
    }
  }

  &.lg {
    @apply pb-6 text-lg;
    .relative-input-wrapper {
      @apply  my-1;
      .input {
        @apply h-12 px-3;
      }
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
    @apply uppercase tracking-tighter font-semibold;
  }
}

.st-text-input-wrapper,
.light .st-text-input-wrapper {
  .input {
    @apply bg-white border border-gray-500;

    &:focus {
      @apply border-black shadow-outline-black;
    }
    &::placeholder {
      @apply text-gray-500;
    }
  }

  &:hover .input:not(:disabled) {
    @apply border-black;
  }

  &.danger {
    .input {
      @apply border-danger-light border-opacity-70;

      &:focus {
        @apply border-danger-light border-opacity-100 shadow-outline-danger;
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
        @apply border-success-light border-opacity-100 shadow-outline-success;
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
      @apply border-white shadow-outline-white;
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
        @apply border-danger-dark border-opacity-100 shadow-outline-danger;
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
        @apply border-success-dark border-opacity-100 shadow-outline-success;
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
