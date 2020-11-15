<template>
  <notifications v-bind="notificationsProps" />
</template>

<script lang="ts">
import Vue from 'vue';
import { RecordPropsDefinition } from 'vue/types/options.d';
import {
  PropsTypes,
  defaultProps,
  NotificationGroupPosition,
  notificationGroupPositions,
} from './StNotificationGroup';

type Data = {}
type Methods = {}
type Computed = {
  notificationsProps: Record<string, unknown>;
}

export default Vue.extend<Data, Methods, Computed, PropsTypes>({
  props: {
    group: {
      type: String,
      required: false,
      default: defaultProps.group,
    },
    position: {
      type: String,
      required: false,
      default: defaultProps.position,
      validator: (value) => notificationGroupPositions.includes(value as NotificationGroupPosition),
    },
    durationInMs: {
      type: Number,
      required: false,
      default: defaultProps.durationInMs,
    },
    closeOnClick: {
      type: Boolean,
      required: false,
      default: defaultProps.closeOnClick,
    },
    ignoreDuplicates: {
      type: Boolean,
      required: false,
      default: defaultProps.ignoreDuplicates,
    },
  } as RecordPropsDefinition<PropsTypes>,
  computed: {
    notificationsProps() {
      return {
        group: this.group,
        position: this.position,
        duration: this.durationInMs,
        closeOnClick: this.closeOnClick,
        ignoreDuplicates: this.ignoreDuplicates,
        class: 'st-notification-group',
        classes: 'st-notification',
      };
    },
  },
});
</script>

<style lang="postcss" scoped>

.st-notification-group {
  @apply m-5 block fixed z-50;

  & >>> .st-notification {
    @apply block p-2 mt-2 box-border text-left text-sm border-1;

    .notification-title {
      @apply font-bold;
    }
  }

  & >>> .vue-notification-wrapper {
    @apply block overflow-hidden w-full m-0 p-0 transition-all duration-300;
  }

  & >>> .vn-fade-enter-active,
  & >>> .vn-fade-leave-active,
  & >>> .vn-fade-move  {
    @apply transition-all duration-500;
  }

  & >>> .vn-fade-enter,
  & >>> .vn-fade-leave-to {
    @apply opacity-0;
  }
}

.light .st-notification-group >>> .st-notification {
  @apply bg-white text-black border-black shadow-lg;

  &.primary {
    @apply bg-white text-black border-black shadow-lg;
  }
  &.danger {
    @apply border-danger-light text-danger-light;
  }
  &.success {
    @apply border-success-light text-success-light;
  }
}

.dark .st-notification-group >>> .st-notification {
  @apply bg-gray-900 text-white border-white shadow-lg-invert;
}
</style>
