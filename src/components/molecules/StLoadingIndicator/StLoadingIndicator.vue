<template>
<!-- The animation only works if using display block  -->
  <st-icon name="loader-5" class="st-loading-indicator" aria-hidden="true" />
</template>

<script lang="ts">
import Vue from 'vue';
import StIcon from '../../atoms/StIcon/StIcon.vue';
import { PropsTypes } from './StLoadingIndicator';

type Data = {}
type Methods = {}
type Computed = {}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  components: { StIcon },
  methods: {
    emitClick() {
      this.$emit('click');
    },
  },
});
</script>

<style lang="postcss" scoped>
.st-loading-indicator,
.light .st-loading-indicator {
  @apply text-black animate-spin text-2xl transition block;
}

.dark .st-loading-indicator {
  @apply text-white;
}
</style>
