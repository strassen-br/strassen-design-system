// import  from '@storybook/vue';
import { Meta, Story } from '@/storybook';
import StButton from './StButton.vue';
import { PropsTypes, EventsTypes, buttonKinds } from './StButton';
import { filterArgTypesWithControls } from '../../../.storybook/storiesHelpers';

/**
 * Base template, used by other stories
 */
const Template = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StButton },
  template: '<st-button />',
  argTypes: {
    kind: {
      control: {
        type: 'inline-radio',
        options: buttonKinds,
      },
    },
  },
})) as Story<PropsTypes & EventsTypes>;

export const Base = Template.bind({});

export default {
  title: 'Controls/Button',
  component: StButton,
  argTypes: {
    kind: {
      control: {
        type: 'inline-radio',
        options: buttonKinds,
      },
    },
    click: {

    },
  },
  parameters: {
    layout: 'centered',
    docs: {}, // create type for docs
  },
} as Meta<PropsTypes & EventsTypes>;
