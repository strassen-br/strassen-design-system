<template lang="pug">
  i.st-icon-wrapper(:class="wrapperClasses" @click="emitClick")
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import { PropsTypes, iconKinds, iconNames } from './StIcon';

type Data = {}
type Methods = {
  emitClick: () => void;
}
type Computed = {
  wrapperClasses: string;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    name: {
      type: String,
      required: true,
      validator: (value) => iconNames.includes(value),
    },
    kind: {
      type: String,
      required: false,
      default: 'fill',
      validator: (value) => iconKinds.includes(value),
    },
  } as RecordPropsDefinition<PropsTypes>,
  computed: {
    wrapperClasses() {
      const { name, kind } = this;
      return `ri-${name}-${kind}`;
    },
  },
  methods: {
    emitClick() {
      this.$emit('click');
    },
  },
});
</script>

<style lang="postcss" scoped>
.light .st-icon-wrapper {
  @apply text-black;
}

.dark .st-icon-wrapper {
  @apply text-white;
}
</style>
