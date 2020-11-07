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
import { componentColors } from '@/components/sharedConstants';
import { PropsTypes, buttonKinds } from './StButton';

type Data = {}
type Methods = {
  emitClickIfNotDisabled: () => void;
}
type Computed = {
  wrapperClasses: string;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary',
      validator: (value) => componentColors.includes(value),
    },
    kind: {
      type: String,
      required: false,
      default: 'filled',
      validator: (value) => buttonKinds.includes(value),
    },
    label: {
      type: String,
      required: false,
      default: undefined,
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
  cursor-pointer outline-none
  uppercase text-xs font-semibold
  transition-all duration-200 ease-in;

  &.disabled {
    @apply cursor-not-allowed;
  }
}

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

  &:hover {
    @apply bg-opacity-70;
  }
  &:active {
    @apply bg-opacity-100;
  }
  &:focus, &:focus-within {
    @apply shadow-outline-black ease-out rounded-1;
  }

  &.outline {
    @apply text-black bg-transparent border-2;
    &.primary {
      @apply border-black;
    }
    &.danger {
      @apply border-danger-light text-danger-light;
    }
    &.success {
      @apply border-success-light text-success-light;
    }

    &:hover {
    @apply border-opacity-50 text-opacity-50;
    }
    &:active {
      @apply border-opacity-100 text-opacity-100;
    }
  }
}

.dark {
  .st-button-wrapper {
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

    &:hover {
      @apply bg-opacity-80;
    }
    &:active {
      @apply bg-opacity-60;
    }
    &:focus, &:focus-within {
      @apply shadow-outline-white ease-out rounded-1;
    }

    &.outline {
      @apply text-white bg-transparent border-2;
      &.primary {
        @apply border-white;
      }
      &.danger {
        @apply border-danger-dark text-danger-dark;
      }
      &.success {
        @apply border-success-dark text-success-light;
      }

      &:hover {
      @apply border-opacity-70 text-opacity-70;
      }
      &:active {
        @apply border-opacity-50 text-opacity-50;
      }
    }
  }
}

.light .st-button-wrapper,
.dark .st-button-wrapper {
  &.disabled,
  &.disabled:hover,
  &.disabled:focus,
  &.disabled:active {
    @apply bg-opacity-60 text-opacity-60 shadow-none;
  }
}
</style>
