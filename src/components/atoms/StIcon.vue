<template>
  <i :class="wrapperClasses" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
      default: undefined,
    },
    kind: {
      type: String as PropType<'fill' | 'line'>,
      required: false,
      default: 'line',
    },
    size: {
      type: String as PropType<
      'xs' |
      'sm' |
      'md' |
      'lg' |
      'xl' |
      '2xl' |
      '3xl' |
      '4xl' |
      '5xl' |
      '6xl' |
      '7xl' |
      '8xl' |
      '9xl'
      >,
      required: false,
      default: 'md',
    },
  },

  setup(props) {
    const wrapperClasses = computed(() => [
      'st-icon',
      `ri-${props.name}-${props.kind}`,
      `text-${props.size}`,
    ])
    return { wrapperClasses }
  },
})
</script>

<style lang="postcss">
.st-icon {
  @apply transition-all duration-200 text-gray-900 dark:text-white;
}
</style>
