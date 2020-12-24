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
  underlineClass: string;
  wrapperClasses: string[];
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
      default: defaultProps.underlineBehavior,
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
    underlineClass() {
      switch (this.underlineBehavior) {
        case 'always': return 'underline';
        case 'on-hover': return 'underline-on-hover';
        default:
        case 'never': return 'no-underline';
      }
    },
    wrapperClasses() {
      const { color: colorClass, size: sizeClass, underlineClass } = this;
      const disabledClass = this.disabled ? 'disabled' : '';
      const uppercaseClass = this.uppercase ? 'uppercase' : '';

      return [
        'st-link-wrapper',
        sizeClass,
        colorClass,
        underlineClass,
        disabledClass,
        uppercaseClass,
      ];
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
  @apply transition-all duration-200 font-normal outline-none p-1;

  &.underline:not(.disabled),
  &.underline-on-hover:hover:not(.disabled) {
    @apply underline;
  }

  &:focus {
    @apply outline-none;
  }

  &.xs {
    @apply text-xs;
  }
  &.sm {
    @apply text-sm;
  }
  &.md {
    @apply text-base;
  }

  &.uppercase {
    @apply uppercase tracking-tighter font-bold;
  }

  &.disabled {
    @apply cursor-not-allowed no-underline;
  }
}

.st-link-wrapper,
.light .st-link-wrapper {

  &:hover:not(.disabled) {
    @apply text-opacity-70;
  }
  &:active:not(.disabled) {
    @apply text-opacity-50;
  }
  &.disabled {
    @apply text-opacity-40;
  }

  &.primary {
    @apply text-black;
    &:focus:not(.disabled) {
      @apply shadow-outline-black;
    }
  }
  &.brand {
    @apply text-brand-purple;
    &:focus:not(.disabled) {
      @apply shadow-outline-purple;
    }
  }
}

.dark .st-link-wrapper {
  &:hover:not(.disabled) {
    @apply text-opacity-70;
  }
  &:active:not(.disabled) {
    @apply text-opacity-50;
  }
  &.disabled {
    @apply text-opacity-40;
  }
  &.primary {
    @apply text-white;
    &:focus:not(.disabled) {
      @apply shadow-outline-white;
    }
  }
  &.brand {
    @apply text-brand-yellow;
    &:focus:not(.disabled) {
      @apply shadow-outline-yellow;
    }
  }
}
</style>
