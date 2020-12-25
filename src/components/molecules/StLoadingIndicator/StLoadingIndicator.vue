<template>
  <st-icon name="loader-5" class="st-loading-indicator" />
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import StIcon from '../../atoms/StIcon/StIcon.vue';
import { PropsTypes, defaultProps } from './StLoadingIndicator';

type Data = {}
type Methods = {
  emitClick: () => void;
}
type Computed = {
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  components: { StIcon },
  props: {
  } as RecordPropsDefinition<PropsTypes>,
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
  @apply text-black animate-spin text-2xl transition;
}

.dark .st-loading-indicator {
  @apply text-white;
}
</style>
