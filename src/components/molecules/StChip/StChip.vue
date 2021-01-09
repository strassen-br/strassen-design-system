<template>
  <div class="st-chip-wrapper">
    <span class="label">{{ label }}</span>

    <st-button
      v-if="isDismissible"
      kind="outline"
      class="dismiss-btn"
      @click="emitDismiss"
    >
      <st-icon class="icon" name="close" kind="line" />
    </st-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';

import StIcon from '../../atoms/StIcon/StIcon.vue';
import StButton from '../../atoms/StButton/StButton.vue';

import { PropsTypes, defaultProps } from './StChip';

type Data = {}
type Methods = {
  emitDismiss: () => void;
}
type Computed = {}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  components: { StIcon, StButton },
  props: {
    label: {
      type: String,
      required: false,
      default: defaultProps.label,
    },
    isDismissible: {
      type: undefined,
      required: false,
      default: defaultProps.isDismissible,
    },
  } as RecordPropsDefinition<PropsTypes>,
  methods: {
    emitDismiss() {
      this.$emit('dismiss');
    },
  },
});
</script>

<style lang="postcss" scoped>
.st-chip-wrapper {
  @apply w-auto h-7 pl-2 flex justify-center items-center border-1;
  .label {
    @apply text-xs mr-2;
  }

  .st-button-wrapper.dismiss-btn {
    @apply w-7 h-7 p-0 flex justify-center items-center
    border-0 border-l-1 transition-colors duration-200 ease-out;
  }
}

.st-chip-wrapper,
.light .st-chip-wrapper {
  @apply  border-black;
}

.dark .st-chip-wrapper {
  @apply  border-white;
}
</style>
