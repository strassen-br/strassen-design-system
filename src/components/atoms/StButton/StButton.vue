<template lang="pug">
  button.st-button-wrapper(
    :class="wrapperClasses"
    @click="emitClickIfNotDisabled"
  )
    slot {{ label }}
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import { componentColors } from '../../sharedConstants';
import { PropsTypes, buttonKinds, defaultProps } from './StButton';

type Data = {}
type Methods = {
  emitClickIfNotDisabled: () => void;
}
type Computed = {
  wrapperClasses: string;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    label: {
      type: String,
      required: false,
      default: defaultProps.label,
    },
    color: {
      type: String,
      required: false,
      default: defaultProps.color,
      validator: (value) => componentColors.includes(value),
    },
    kind: {
      type: String,
      required: false,
      default: defaultProps.kind,
      validator: (value) => buttonKinds.includes(value),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: defaultProps.disabled,
    },
  } as RecordPropsDefinition<PropsTypes>,
  computed: {
    wrapperClasses() {
      const disabledClass = this.disabled ? 'disabled' : '';
      return `${this.color} ${this.kind} ${disabledClass}`;
    },
  },
  methods: {
    emitClickIfNotDisabled() {
      if (this.disabled) return;
      this.$emit('click');
    },
  },
});
</script>

<style lang="postcss" scoped>
.st-button-wrapper {
  @apply flex px-5 py-3
  border-1 border-transparent
  cursor-pointer outline-none
  uppercase text-xs font-semibold
  transition-all duration-200 ease-in;

  &.disabled {
    @apply cursor-not-allowed;
  }
}

.st-button-wrapper,
.light .st-button-wrapper {
  @apply text-white;
  &.primary {
    @apply bg-black;
  }
  &.danger {
    @apply bg-danger-light;
  }
  &.success {
    @apply bg-success-light;
  }
  &.brand {
    @apply bg-brand-purple;
  }

  &:hover {
    @apply bg-opacity-80 text-opacity-70;
  }
  &:active {
    @apply bg-opacity-60;
  }
  &:focus, &:focus-within {
    @apply shadow-outline-black ease-out;
  }

  &.outline {
    @apply text-black bg-transparent;
    &.primary {
      @apply border-black;
    }
    &.danger {
      @apply border-danger-light text-danger-light;
    }
    &.success {
      @apply border-success-light text-success-light;
    }
    &.brand {
      @apply border-brand-purple text-brand-purple;
    }

    &:hover {
      @apply border-opacity-60 text-opacity-60;
    }
    &:active {
      @apply border-opacity-40 text-opacity-40;
    }
  }

  &.text-only {
    @apply bg-transparent border-transparent;
    &.primary {
      @apply text-black;
    }
    &.danger {
      @apply text-danger-light;
    }
    &.success {
      @apply text-success-light;
    }
    &.brand {
      @apply text-brand-purple;
    }

    &:hover {
      @apply text-opacity-60;
    }
    &:active {
      @apply text-opacity-40;
    }
  }
}

.dark .st-button-wrapper {
  @apply text-black;
  &.primary {
    @apply bg-white;
  }
  &.danger {
    @apply bg-danger-dark;
  }
  &.success {
    @apply bg-success-dark;
  }
  &.brand {
    @apply bg-brand-yellow;
  }

  &:hover {
    @apply bg-opacity-80 text-opacity-70;
  }
  &:active {
    @apply bg-opacity-60;
  }
  &:focus, &:focus-within {
    @apply shadow-outline-white ease-out;
  }

  &.outline {
    @apply text-white bg-transparent;
    &.primary {
      @apply border-white;
    }
    &.danger {
      @apply border-danger-dark text-danger-dark;
    }
    &.success {
      @apply border-success-dark text-success-light;
    }
    &.brand {
      @apply border-brand-yellow text-brand-yellow;
    }

    &:hover {
      @apply border-opacity-70 text-opacity-70;
    }
    &:active {
      @apply border-opacity-50 text-opacity-50;
    }
  }

  &.text-only {
    @apply bg-transparent border-transparent;
    &.primary {
      @apply text-white;
    }
    &.danger {
      @apply text-danger-dark;
    }
    &.success {
      @apply text-success-dark;
    }
    &.brand {
      @apply text-brand-yellow;
    }

    &:hover {
      @apply text-opacity-60;
    }
    &:active {
      @apply text-opacity-40;
    }
  }
}

.light .st-button-wrapper,
.dark .st-button-wrapper {
  &.disabled,
  &.disabled:hover,
  &.disabled:focus,
  &.disabled:active {
    @apply bg-opacity-60 text-opacity-60 border-opacity-60 shadow-none !important;
  }
}
</style>
