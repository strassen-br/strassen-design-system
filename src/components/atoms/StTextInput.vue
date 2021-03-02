<template>
  <div :class="wrapperClasses">
    <label v-if="topLabel" class="top-label" :for="identifier">{{ topLabel }}</label>
    <div class="input-wrapper">
      <input
        :id="identifier"
        :name="identifier"
        :disabled="disabled"
        type="text"
        v-bind="$attrs"
      >
      <slot name="inside" />
    </div>
    <span v-if="bottomLabel" class="bottom-label">{{ bottomLabel }}</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  inheritAttrs: false,

  props: {
    identifier: {
      type: String,
      required: true,
    },
    topLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    bottomLabel: {
      type: String,
      required: false,
      default: undefined,
    },
    validationState: {
      type: String as PropType<'success' | 'error'>,
      required: false,
      default: undefined,
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false,
      default: 'md',
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    modelValue: {
      type: [String, Number],
      required: false,
      default: undefined,
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const wrapperClasses = computed(() => {
      return [
        'st-text-input-wrapper',
        props.validationState,
        props.size,
        props.disabled ? 'disabled' : '',
      ]
    })

    const computedModelValue = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })

    return {
      wrapperClasses,
    }
  },
})
</script>

<style lang="postcss">
.st-text-input-wrapper {
  @apply flex flex-col;

  .input-wrapper {
    @apply relative;

    input {
      @apply bg-transparent border border-gray-700 placeholder-gray-400
      w-full transition-all duration-300
      focus:border-black focus:ring focus:ring-gray-400;
      @apply outline-none focus:outline-none !important;
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                                    SIZES                                   */
  /* -------------------------------------------------------------------------- */
  &.sm {
    @apply text-sm;
    .input-wrapper {
      input {
        @apply my-0.5 h-7 px-2;
      }
    }
    .bottom-label {
      @apply text-xs;
    }
  }
  &.md {
    @apply text-base;
    .input-wrapper {
      input {
        @apply h-9 px-2;
      }
    }
    .bottom-label {
      @apply text-sm;
    }
  }
  &.lg {
    @apply text-lg;
    .input-wrapper {
      input {
        @apply h-10 px-2
      }
    }
    .bottom-label {
      @apply text-sm;
    }
  }
}

.dark .st-text-input-wrapper {
  @apply text-gray-100;
  .input-wrapper input {
    @apply border-gray-300 placeholder-gray-500
    focus:border-white focus:ring-gray-600;
  }
}

/* -------------------------------------------------------------------------- */
/*                                   COLORS                                   */
/* -------------------------------------------------------------------------- */
.st-text-input-wrapper.success .input-wrapper input {
  @apply border-green-700 focus:ring-green-700 focus:ring-opacity-30
  dark:border-green-400 dark:focus:ring-green-400 dark:focus:ring-opacity-30;
}
.st-text-input-wrapper.success .bottom-label {
  @apply font-medium text-green-700 dark:text-green-400;
}
.st-text-input-wrapper.error .input-wrapper input {
  @apply border-red-700 focus:ring-red-700 focus:ring-opacity-30
  dark:border-red-400 dark:focus:ring-red-400 dark:focus:ring-opacity-30;
}
.st-text-input-wrapper.error .bottom-label {
  @apply font-medium text-red-700 dark:text-red-400;
}

/* -------------------------------------------------------------------------- */
/*                                  DISABLED                                  */
/* -------------------------------------------------------------------------- */
.st-text-input-wrapper.disabled,
.st-text-input-wrapper.disabled .top-label,
.st-text-input-wrapper.disabled .bottom-label,
.st-text-input-wrapper.disabled .input-wrapper,
.st-text-input-wrapper.disabled .input-wrapper input:disabled {
  @apply cursor-not-allowed;
}
.st-text-input-wrapper.disabled .input-wrapper input:disabled {
  @apply placeholder-opacity-80;
}
.st-text-input-wrapper.disabled .top-label,
.st-text-input-wrapper.disabled .bottom-label {
  @apply text-gray-500 dark:text-gray-500;
}
.st-text-input-wrapper.disabled .input-wrapper input:disabled {
  @apply border-gray-500 text-gray-500 bg-gray-200
  dark:border-gray-500 dark:text-gray-500 dark:bg-gray-700;
}
</style>
