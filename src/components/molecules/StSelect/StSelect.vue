<template>
  <div class="st-select-wrapper">
    <span v-if="label" class="label">{{ label }}</span>

    <st-button
      kind="outline"
      class="dropdown"
      v-click-outside="hideOptions"
      @click="onArrowDropdownClick"
    >
      <span v-if="hasSelectedOption" class="selected-option-label">{{ selectedOptionLabel }}</span>
      <span v-else class="placeholder">{{ $attrs.placeholder }}</span>

      <div class="icon-wrapper">
        <st-icon :class="arrowDropdownIconClasses" name="arrow-down-s" kind="line" />
      </div>
    </st-button>

    <transition name="expand">
        <div class="options-wrapper" v-if="isOptionsContainerVisible">
          <perfect-scrollbar>
            <slot v-bind="optionsSlotProps" />
          </perfect-scrollbar>
        </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { isEqual } from 'lodash';
import ClickOutside from 'vue-click-outside';
import { PerfectScrollbar } from 'vue2-perfect-scrollbar';
import { RecordPropsDefinition } from 'vue/types/options.d';

import StIcon from '../../atoms/StIcon/StIcon.vue';
import StButton from '../../atoms/StButton/StButton.vue';

import { PropsTypes, defaultProps } from './StSelect';

type Data = {
  isOptionsContainerVisible: boolean;
}
type Methods = {
  hideOptions: () => void;
  onArrowDropdownClick: () => void;
}
type Computed = {
  hasSelectedOption: boolean;
  selectedOptionLabel: string;
  optionsSlotProps: Record<string, Function>;
  arrowDropdownIconClasses: Record<string, boolean>;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  components: { StIcon, StButton, PerfectScrollbar },
  directives: { ClickOutside },
  props: {
    label: {
      type: String,
      required: false,
      default: defaultProps.label,
    },
    value: {
      type: undefined,
      required: true,
      default: defaultProps.value,
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
    hasSelectedOption() {
      return !!this.value;
    },
    selectedOptionLabel() {
      return this.value?.label ?? '';
    },
    arrowDropdownIconClasses() {
      return {
        icon: true,
        flip: this.isOptionsContainerVisible,
      };
    },
    optionsSlotProps() {
      return {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onOptionClick: (value: any) => {
          if (isEqual(value, this.value)) return;
          this.hideOptions();
          this.$emit('input', value);
        },
      };
    },
  },
  methods: {
    hideOptions() {
      this.isOptionsContainerVisible = false;
    },
    onArrowDropdownClick() {
      this.isOptionsContainerVisible = !this.isOptionsContainerVisible;
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

  .dropdown {
    @apply h-10 p-0 flex justify-between items-center
    border-1 transition duration-200 ease-out;

    .placeholder,
    .selected-option-label {
      @apply font-normal normal-case px-4 truncate;
    }

    .icon-wrapper {
      @apply h-full flex items-center border-l-1 px-2;

      .icon {
        @apply text-lg text-center transition duration-200 ease-out;

        &.flip {
          @apply transform rotate-180;
        }
      }
    }
  }

  .options-wrapper {
    @apply absolute left-0 w-full overflow-y-hidden
    flex flex-col justify-start border border-t-0 z-10;
    top: 100%;
  }
}

.st-select-wrapper,
.light .st-select-wrapper {
  .placeholder {
    @apply text-gray-500;
  }
  .icon-wrapper {
    @apply border-gray-900;
  }
  &:hover .icon-wrapper,
  &:hover .icon-wrapper .icon {
    @apply border-opacity-60 text-opacity-60;
  }
  &:active .icon-wrapper,
  &:active .icon-wrapper .icon {
    @apply border-opacity-40 text-opacity-40;
  }

  .options-wrapper {
    @apply bg-white border-gray-900;
  }
}

.st-select-wrapper,
.dark .st-select-wrapper {
  .placeholder {
    @apply text-gray-600;
  }
  .icon-wrapper {
    @apply border-gray-100;
  }
  &:hover .icon-wrapper,
  &:hover .icon-wrapper .icon {
    @apply border-opacity-70 text-opacity-70;
  }
  &:active .icon-wrapper,
  &:active .icon-wrapper .icon {
    @apply border-opacity-50 text-opacity-50;
  }

  .options-wrapper {
    @apply bg-gray-900 border-gray-100;
  }
}

/* this is outside to decrease specificity and make it easier to override this style */
.options-wrapper {
  @apply h-auto;
  max-height: 16rem;
}
</style>
<style src="vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css" />
