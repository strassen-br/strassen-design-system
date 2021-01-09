<template lang="pug">
  i.st-icon-wrapper(:class="wrapperClasses" @click="emitClick")
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import { PropsTypes, iconKinds, defaultProps } from './StIcon';
import { iconNames } from './IconName';

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
      default: defaultProps.name,
      // this is needed for now because the icon names
      // keep changing and i haven't been able to update them consistently
      validator: (value) => iconNames.includes(value) || true,
    },
    kind: {
      type: String,
      required: false,
      default: defaultProps.kind,
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
.st-icon-wrapper,
.light .st-icon-wrapper {
  @apply text-black;
}

.dark .st-icon-wrapper {
  @apply text-white;
}
</style>
