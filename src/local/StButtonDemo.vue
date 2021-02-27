<template>
  <div class="row">
    <st-button
      v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
      :key="size"
      :size="size"
      label="Label"
    />
  </div>
  <div class="row">
    <st-button
      v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
      :key="size"
      :size="size"
      label="Label"
      kind="outline"
    />
  </div>
  <div class="row">
    <st-button
      v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
      :key="size"
      :size="size"
      label="Label"
      disabled
    />
  </div>
  <div class="row">
    <st-button
      v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']"
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
import StButton from '../components/atoms/StButton.vue'

export default defineComponent({
  components: { StButton },
})
</script>

<style lang="postcss" scoped>
</style>
