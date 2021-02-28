<template>
  <button :class="wrapperClasses" :disabled="disabled">
    <slot>{{ label }}</slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: false,
      default: undefined,
    },
    color: {
      type: String as PropType<'primary'>,
      required: false,
      default: 'primary',
    },
    kind: {
      type: String as PropType<'filled' | 'outline'>,
      required: false,
      default: 'filled',
    },
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
      required: false,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  setup(props) {
    const wrapperClasses = computed(() => [
      'st-button-wrapper',
      props.color,
      props.kind,
      props.size,
    ])
    return { wrapperClasses }
  },
})
</script>

<style lang="postcss">
.st-button-wrapper {
  @apply inline-flex items-center border border-transparent cursor-pointer shadow
  uppercase font-medium transition-all duration-200 outline-none focus:ring;

  /* -------------------------------------------------------------------------- */
  /*                                   COLORS                                   */
  /* -------------------------------------------------------------------------- */
  &.primary {
    @apply focus:ring-gray-400 dark:focus:ring-gray-600;

    /* ---------------------------------- KINDS --------------------------------- */
    &.filled {
      @apply bg-black text-white hover:bg-gray-700
      dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200;
    }
    &.outline {
      @apply bg-white text-gray-900 border-black hover:bg-gray-200
      dark:bg-gray-900 dark:text-white dark:border-white dark:hover:bg-gray-700;
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                                    SIZES                                   */
  /* -------------------------------------------------------------------------- */
  &.xs {
    @apply px-2.5 py-1.5 text-xs;
  }
  &.sm {
    @apply px-3 py-2 text-xs leading-4;
  }
  &.md {
    @apply px-4 py-2 text-sm;
  }
  &.lg {
    @apply px-4 py-2 text-base;
  }
  &.xl {
    @apply px-6 py-3 text-base;
  }

  &:disabled {
    @apply cursor-not-allowed bg-opacity-60 text-opacity-60 border-opacity-60 !important;
  }
}
</style>
