/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Vue from 'vue';
import { componentColors } from '../../sharedConstants';
import {
  Meta, Story, filterArgTypesWithControls, joinWithPipe,
} from '../../../storybook';
import StNotificationGroup from './StNotificationGroup.vue';
import StLink from '../StLink/StLink.vue';
import { StNotificationOptions } from '../../../../types/notifications.d';

/**
 * Notification group template, focus on showing how to control the notification group component
 */
export const Base: Story<StNotificationOptions> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StLink, StNotificationGroup },
  computed: {
    configObject(): Record<string, string | undefined> {
      const { title, text, type, duration, group } = (this as any);
      return { title, text, type, duration, group };
    },
    configObjectString() {
      return JSON.stringify(this.configObject, null, 2);
    },
  },
  methods: {
    showNotification() {
      Vue.notify((this as any).configObject);
    },
  },
  template: `
  <div>
    <st-notification-group v-bind="$props" />
    <st-link label="Show notification" @click="showNotification" />
    <pre class="bg-gray-800 text-blue-300 p-3"><code>\
<span class="text-purple-500">Vue.notify(</span>\
{{ configObjectString }}\
<span class="text-purple-500">);</span>

  <strong class="text-red-500">OR</strong>

<span class="text-purple-500">this.$notify(</span>\
{{ configObjectString }}\
<span class="text-purple-500">);</span>\
    </code></pre>
  </div>
  `,
}));

/**
 * Notify method template, focus on showing how to create notifications using Vue.notify
 */
export default {
  title: 'Notifications/Creating Notifications',
  component: StNotificationGroup,
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'My StNotification',
      description: 'String to use as the notification title',
      table: { type: { summary: 'String ' } },
    },
    text: {
      control: { type: 'text' },
      defaultValue: 'Something happened!',
      description: 'String to use as the notification text',
      table: { type: { summary: 'String ' } },
    },
    type: {
      control: { type: 'inline-radio', options: componentColors },
      defaultValue: 'primary',
      description: 'Notification color',
      table: { type: { summary: joinWithPipe(componentColors) } },
    },
    group: {
      control: { type: 'text' },
      description: 'The StNotificationGroup to attach the notification to',
      table: { type: { summary: 'String' } },
    },
    duration: {
      description: `How long the notification should be visible for
      (not counting the fade in animation).
      A **-1** value means the notification should always be visible.
      **Don't use a -1 value outside of a group with \`closeOnClick\`**
      `,
      table: {
        type: { summary: 'Number' },
        defaultValue: { summary: 'variable', detail: 'Inherits from the StNotificationGroup' },
      },
      control: { type: 'number' },
    },
    click: { table: { disable: true } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-notification-group group="my-group" position="top-right" close-on-click />' },
      description: {
        component: 'How to create notifications',
      },
    },
  },
} as Meta<StNotificationOptions>;
