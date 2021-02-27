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
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
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
    const wrapperClasses = computed(() => ['st-link-wrapper', props.size])
    return { wrapperClasses }
  },
})
</script>

<style lang="postcss">
.st-link-wrapper {
  @apply inline-flex items-center cursor-pointer font-medium px-1 transition-all duration-200
  text-gray-900 hover:text-gray-600 dark:text-white dark:hover:text-gray-300
  hover:underline focus:outline-none focus:ring focus:ring-gray-400 dark:focus:ring-gray-600;

  /* -------------------------------------------------------------------------- */
  /*                                    SIZES                                   */
  /* -------------------------------------------------------------------------- */
  &.sm {
    @apply text-xs;
  }
  &.md {
    @apply text-sm;
  }
  &.lg {
    @apply text-lg;
  }

  &:disabled {
    @apply cursor-not-allowed text-opacity-60 !important;
  }
}
</style>
