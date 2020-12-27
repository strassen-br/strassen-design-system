<template>
  <div class="st-select-wrapper">
    <st-text-input class="text-input" v-bind="textInputProps" v-model="computedTextValue">
      <template #right>
        <st-button
          kind="outline"
          class="arrow-dropdown"
          v-click-outside="onClickOutside"
          @click="onArrowDropdownClick"
        >
          <st-icon :class="arrowDropdownIconClasses" name="arrow-down-s" kind="line" />
        </st-button>
      </template>
    </st-text-input>

    <transition name="expand">
        <div class="options-wrapper" v-if="isOptionsContainerVisible">
          <perfect-scrollbar>
            <slot />
          </perfect-scrollbar>
        </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ClickOutside from 'vue-click-outside';
import { PerfectScrollbar } from 'vue2-perfect-scrollbar';
import { RecordPropsDefinition } from 'vue/types/options.d';

import StIcon from '../../atoms/StIcon/StIcon.vue';
import StButton from '../../atoms/StButton/StButton.vue';
import StTextInput from '../../atoms/StTextInput/StTextInput.vue';

import { PropsTypes, defaultProps } from './StSelect';
import { PropsTypes as TextInputProps } from '../../atoms/StTextInput/StTextInput';

type Data = {
  isOptionsContainerVisible: boolean;
}
type Methods = {
  onClickOutside: () => void;
  onArrowDropdownClick: () => void;
  emitClickIfNotDisabled: () => void;
}
type Computed = {
  textInputProps: TextInputProps;
  computedTextValue: string;
  wrapperClasses: string;
  inputListeners: Record<string, Function>;
  arrowDropdownIconClasses: Record<string, boolean>;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  inheritAttrs: false,
  components: {
    StIcon,
    StButton,
    StTextInput,
    PerfectScrollbar,
  },
  directives: { ClickOutside },
  props: {
    topLabelText: {
      type: String,
      required: false,
      default: defaultProps.topLabelText,
    },
    value: {
      type: String,
      required: false,
      default: defaultProps.value,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: defaultProps.disabled,
    },
  } as RecordPropsDefinition<PropsTypes>,
  data() {
    return {
      isOptionsContainerVisible: false,
    };
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any).popupItem = this.$el;
  },
  computed: {
    textInputProps() {
      return {
        ...this.$attrs,
        color: 'primary',
        size: 'md',
        disabled: false,
        uppercase: false,
        topLabelText: this.topLabelText,
      };
    },
    computedTextValue: {
      get() {
        return this.value ?? '';
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    wrapperClasses() {
      const disabledClass = this.disabled ? 'disabled' : '';
      return `${disabledClass}`;
    },
    inputListeners() {
      return {
        ...this.$listeners,
        click: this.emitClickIfNotDisabled,
      };
    },
    arrowDropdownIconClasses() {
      return {
        icon: true,
        flip: this.isOptionsContainerVisible,
      };
    },
  },
  methods: {
    onClickOutside() {
      this.isOptionsContainerVisible = false;
    },
    onArrowDropdownClick() {
      this.isOptionsContainerVisible = !this.isOptionsContainerVisible;
    },
    emitClickIfNotDisabled() {
      if (this.disabled) return;
      this.$emit('click');
    },
  },
});
</script>
<style lang="postcss" scoped>
.expand-enter-active, .expand-leave-active {
  @apply transition-all duration-200;
}
.expand-enter, .expand-leave-to {
  @apply transform scale-y-0 -translate-y-1/2 opacity-0;
}

.st-select-wrapper {
  @apply flex flex-col relative;

  &:hover,
  &:focus-within {
    .arrow-dropdown {
      @apply opacity-100;
    }
  }

  .text-input {
    @apply pb-0;

    & >>> .relative-input-wrapper {
      @apply mb-0;

      .input {
        @apply pr-12;
      }
    }
  }

  .arrow-dropdown {
    @apply h-full w-4 px-5 pt-1 pb-0 flex justify-center items-center
    border-1 transition duration-200 ease-out;

    .icon {
      @apply text-lg text-center transition duration-200 ease-out;

      &.flip {
        @apply transform rotate-180 mb-1;
      }
    }
  }

  .options-wrapper {
    @apply absolute left-0 w-full overflow-y-hidden
    flex flex-col justify-start border border-t-0;
    top: 100%;
  }
}

/* this is outside to decrease specificity and make it easier to override this style */
.options-wrapper {
  @apply h-auto;
  max-height: 16rem;
}

.st-select-wrapper,
.light .st-select-wrapper {
  .options-wrapper {
    @apply bg-white border-gray-900;
  }
}

.st-select-wrapper,
.dark .st-select-wrapper {
  .options-wrapper {
    @apply bg-gray-900 border-gray-100;
  }
}
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
