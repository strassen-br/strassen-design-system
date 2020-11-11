<template lang="pug">
  button(:class="wrapperClasses" @click="emitClick" role="link") {{ label }}
</template>

<script lang="ts">
import Vue from 'vue';
// import isEmpty from 'validator/lib/isEmpty';
import { RecordPropsDefinition } from 'vue/types/options.d';
import {
  linkSizes,
  linkColors,
  PropsTypes,
  defaultProps,
  underlineBehaviors,
} from './StLink';

type Data = {};
type Methods = {
  emitClick: () => void;
};
type Computed = {
  wrapperClasses: string;
};
export type Events = {
  click: void;
};

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    label: {
      type: String,
      required: true,
      default: defaultProps.label,
    },
    underlineBehavior: {
      type: String,
      required: false,
      default: defaultProps.label,
      validator: (value) => underlineBehaviors.includes(value),
    },
    color: {
      type: String,
      required: false,
      default: defaultProps.color,
      validator: (value) => linkColors.includes(value),
    },
    size: {
      type: String,
      required: false,
      default: defaultProps.size,
      validator: (value) => linkSizes.includes(value),
    },
    disabled: {
      type: Boolean,
      required: false,
      default: defaultProps.disabled,
    },
    uppercase: {
      type: Boolean,
      required: false,
      default: defaultProps.uppercase,
    },
  } as RecordPropsDefinition<PropsTypes>,
  computed: {
    wrapperClasses() {
      const colorClass = this.color;
      const disabledClass = this.disabled ? 'disabled' : '';
      const uppercaseClass = this.uppercase ? 'uppercase' : '';
      return `st-link-wrapper ${colorClass} ${disabledClass} ${uppercaseClass}`;
      // [this.kind]: true,
      // uppercase: this.uppercase,
      // 'no-underline': this.noUnderline,
      // };
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
.st-link-wrapper {
  @apply text-sm transition-all duration-200 rounded-sm font-bold;
  &.primary, &.accent {
    &:focus:not(.no-underline),
    &:hover:not(.no-underline),
    &:active:not(.no-underline) {
      @apply underline;
    }
  }
}

.light .st-link-wrapper {
  &.primary, &.accent {
    &:focus, &:hover { @apply text-opacity-60 shadow-none }
    &:active { @apply text-opacity-80 }
  }

  &.primary { @apply text-black }
  &.accent { @apply text-brand-purple }
}

.dark .st-link-wrapper {
  &.primary, &.accent {
    &:focus, &:hover { @apply text-opacity-60 shadow-none }
    &:active { @apply text-opacity-80 }
  }

  &.primary { @apply text-white }
  &.accent { @apply text-brand-yellow }
}
</style>
