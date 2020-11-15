import Vue from 'vue';
import {
  Meta,
  Story,
  joinWithPipe,
  filterArgTypesWithControls,
} from '../../../storybook';
import { PropsTypes, defaultProps, notificationGroupPositions } from './StNotificationGroup';
import StNotificationGroup from './StNotificationGroup.vue';
import StLink from '../StLink/StLink.vue';

/**
 * Notification group template, focus on showing how to control the notification group component
 */
export const Base: Story<PropsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StLink, StNotificationGroup },
  methods: {
    showNotification() {
      Vue.notify({ text: 'My StNotification', type: 'success' });
    },
  },
  template: `
  <div>
    <st-notification-group v-bind="$props" />
    <st-link label="Show notification" @click="showNotification" />
  </div>
  `,
}));

/**
 * Notify method template, focus on showing how to create notifications using Vue.notify
 */

export default {
  title: 'Notifications/Notification Group',
  component: StNotificationGroup,
  argTypes: {
    group: {
      description: `You can have multiple notification groups with different settings in a page.
      You should use this prop to identify them later when creating notifications`,
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.group?.toString() },
      },
      control: { type: 'text' },
      defaultValue: defaultProps.group,
    },
    position: {
      description: 'Which side of the screen the notifications from this NotificationGroup should appear at',
      table: {
        type: { summary: joinWithPipe(notificationGroupPositions) },
        defaultValue: { summary: defaultProps.position },
      },
      control: { type: 'select', options: notificationGroupPositions },
      defaultValue: defaultProps.position,
    },
    durationInMs: {
      description: `How long the notifications inside this group should be visible
      (not counting the fade in animation).
      A **-1** value means the notifications should always be visible.
      **Don't use a -1 value without enabling \`closeOnClick\`**
      `,
      table: {
        type: { summary: 'Number' },
        defaultValue: { summary: defaultProps.durationInMs?.toString() },
      },
      control: { type: 'number' },
      defaultValue: defaultProps.durationInMs,
    },
    closeOnClick: {
      description: 'Whether the notifications inside this group should close when clicked',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: defaultProps.closeOnClick?.toString() },
      },
      control: { type: 'boolean' },
      defaultValue: defaultProps.closeOnClick,
    },
    ignoreDuplicates: {
      description: `Whether notifications inside this group should not be created
      when an identical notification exists`,
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: defaultProps.ignoreDuplicates?.toString() },
      },
      control: { type: 'boolean' },
      defaultValue: defaultProps.ignoreDuplicates,
    },
    click: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-notification-group group="my-group" position="top-right" close-on-click />' },
      description: {
        component: 'Notifications group component, uses the `vue-notification` library underneath',
      },
    },
  },
} as Meta<PropsTypes>;
