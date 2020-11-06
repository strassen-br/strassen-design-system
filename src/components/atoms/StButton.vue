<template lang="pug">
  button.st-button-wrapper(
    :class="wrapperClasses"
    @click="emitClick"
  )
    slot {{ label }}
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import { PropsTypes, buttonColors, buttonKinds } from './StButton';

type Data = {}
type Methods = {
  emitClick: () => void;
}
type Computed = {
  wrapperClasses: string;
}
export type Events = {}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    color: {
      type: String,
      required: false,
      default: 'primary',
      validator: (value) => buttonColors.includes(value),
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
  } as RecordPropsDefinition<PropsTypes>,
  computed: {
    wrapperClasses() {
      return `${this.color} ${this.kind}`;
    },
  },
  methods: {
    emitClick() {
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
}

/* @screen light { */
  .st-button-wrapper {
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
      @apply shadow-outline-black ease-out;
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
/* } */

/* @screen dark {
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
      @apply shadow-outline-white ease-out;
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
} */
</style>
