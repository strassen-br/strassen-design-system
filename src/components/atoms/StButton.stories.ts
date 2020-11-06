import { Meta, Story } from '@/storybook';
import StButton from './StButton.vue';
import {
  PropsTypes, EventsTypes, buttonKinds, buttonColors,
} from './StButton';
import { filterArgTypesWithControls } from '../../../.storybook/storiesHelpers';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StButton },
  template: '<st-button v-bind="$props" />',
}));

export const Base = Template.bind({});

export default {
  title: 'Controls/Button',
  component: StButton,
  argTypes: {
    color: {
      description: 'Button color',
      table: {
        type: {
          summary: buttonColors.join(' | '),
        },
      },
      control: { type: 'inline-radio', options: buttonColors },
      defaultValue: 'primary',
    },
    kind: {
      description: 'Visual kind of the button. Used to make it more or less noticeable',
      table: {
        type: {
          summary: buttonKinds.join(' | '),
        },
      },
      control: { type: 'inline-radio', options: buttonKinds },
      defaultValue: 'filled',
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'My StButton',
    },
    click: {

    },
  },
  parameters: {
    layout: 'centered',
    docs: {}, // create type for docs
  },
} as Meta<PropsTypes & EventsTypes>;
