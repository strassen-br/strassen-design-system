import { Meta, Story, filterArgTypesWithControls } from '@/storybook';
import {
  PropsTypes,
  EventsTypes,
  iconKinds,
  iconNames,
} from './StIcon';
import StIcon from './StIcon.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StIcon },
  template: '<st-icon v-bind="$props" />',
}));

export const Base = Template.bind({});

export default {
  title: 'Controls/Icon',
  component: StIcon,
  argTypes: {
    kind: {
      description: 'Visual kind of the icon, defined in the Remix Icon lib',
      table: { type: { summary: iconKinds.join(' | ') } },
      control: { type: 'inline-radio', options: iconKinds },
      defaultValue: 'fill',
    },
    name: {
      description: 'Icon name from the Remix Icon lib',
      table: { type: { summary: 'String' } },
      control: { type: 'select', options: iconNames },
      defaultValue: 'home-2',
    },
    click: {
      table: { type: false },
      description: 'Emitted when the icon is clicked',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-icon name="home-2" @click="doSomething" />' },
      description: {
        component: 'Basic icon component, uses the Remix Icon lib',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
