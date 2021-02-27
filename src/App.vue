<template>
  <div>
    <div class="content">
      <div v-for="mode in ['light', 'dark']" :key="mode" :class="mode">
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
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StButton from './components/atoms/StButton.vue'

export default defineComponent({
  name: 'App',
  components: {

    StButton,

  },
})
</script>

<style lang="postcss" scoped>
.content {
  @apply flex;

  .row {
    @apply flex items-center space-x-6;
  }
}

.light, .dark {
  @apply flex-1 flex flex-col items-center p-6 space-y-8;
}

.dark {
  @apply bg-gray-900;
}
</style>
