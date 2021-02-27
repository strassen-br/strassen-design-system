<template>
  <div>
    <div class="content">
      <div v-for="mode in ['light', 'dark']" :key="mode" :class="mode">
        <st-button-demo />
        <st-link-demo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StButtonDemo from './local/StButtonDemo.vue'
import StLinkDemo from './local/StLinkDemo.vue'

export default defineComponent({
  name: 'App',
  components: {

    StButtonDemo,
    StLinkDemo,

  },
})
</script>

<style lang="postcss">
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
