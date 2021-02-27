<template>
  <div class="row">
    <st-icon
      v-for="size in sizes"
      :key="size"
      :size="size"
      name="home-3"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StIcon from '../components/atoms/StIcon.vue'

export default defineComponent({
  components: { StIcon },
  setup() {
    return {
      sizes: [
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
    }
  },
})
</script>

<style lang="postcss" scoped>
</style>
