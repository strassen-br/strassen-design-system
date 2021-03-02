<template>
  <div>
    <div class="content">
      <div v-for="mode in ['light', 'dark']" :key="mode" :class="mode">
        <st-button-demo />
        <st-link-demo />
        <st-icon-demo />
        <st-text-input-demo />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import StButtonDemo from './local/StButtonDemo.vue'
import StIconDemo from './local/StIconDemo.vue'
import StLinkDemo from './local/StLinkDemo.vue'
import StTextInputDemo from './local/StTextInputDemo.vue'

export default defineComponent({
  name: 'App',
  components: {

    StButtonDemo,
    StLinkDemo,
    StIconDemo,
    StTextInputDemo,

  },
})
</script>

<style lang="postcss">
.content {
  @apply flex w-screen overflow-x-hidden;

  .row {
    @apply flex flex-wrap items-center space-x-6;
  }
}

.light, .dark {
  @apply flex-1 flex flex-col items-center p-6 space-y-8;
}

.dark {
  @apply bg-gray-900;
}
</style>
