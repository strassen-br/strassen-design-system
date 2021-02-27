<template>
  <div class="row">
    <st-link
      v-for="size in ['sm', 'md', 'lg']"
      :key="size"
      :size="size"
      label="Label"
    />
  </div>
  <div class="row">
    <st-link
      v-for="size in ['sm', 'md', 'lg']"
      :key="size"
      :size="size"
      label="Label"
      kind="outline"
    />
  </div>
  <div class="row">
    <st-link
      v-for="size in ['sm', 'md', 'lg']"
      :key="size"
      :size="size"
      label="Label"
      disabled
    />
  </div>
  <div class="row">
    <st-link
      v-for="size in ['sm', 'md', 'lg']"
      :key="size"
      :size="size"
      label="Label"
      kind="outline"
      disabled
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StLink from '../components/atoms/StLink.vue'

export default defineComponent({
  components: { StLink },
})
</script>

<style lang="postcss" scoped>
</style>
