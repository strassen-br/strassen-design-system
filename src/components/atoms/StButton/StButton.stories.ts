import { actions } from '@storybook/addon-actions';
import { Meta, Story, filterArgTypesWithControls } from '@/storybook';
import { componentColors } from '@/components/sharedConstants';
import { PropsTypes, EventsTypes, buttonKinds } from './StButton';
import StButton from './StButton.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StButton },
  methods: actions('click'),
  template: `
  <st-button v-bind="$props" @click="click">
    <div v-if="$props.default" v-html="$props.default" />
  </st-button>`,
}));

export const Base = Template.bind({});

export default {
  title: 'Controls/Button',
  component: StButton,
  argTypes: {
    color: {
      description: 'Button color',
      table: { type: { summary: componentColors.join(' | ') } },
      control: { type: 'inline-radio', options: componentColors },
      defaultValue: 'primary',
    },
    kind: {
      description: 'Visual kind of the button. Used to make it more or less noticeable',
      table: { type: { summary: buttonKinds.join(' | ') } },
      control: { type: 'inline-radio', options: buttonKinds },
      defaultValue: 'filled',
    },
    label: {
      description: 'Text shown inside the button. Not visible when also using a slot',
      table: { type: { summary: 'String' } },
      control: { type: 'text' },
      defaultValue: 'My StButton',
    },
    disabled: {
      description: 'Whether the component should have a disabled style and not emit clicks',
      table: { type: { summary: 'Boolean' } },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    click: {
      table: { type: false },
      description: 'Emitted when the button is clicked',
    },
    default: {
      description: 'Content shown inside the button. Can contain html, custom components, etc',
      table: { type: false },
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-button label="My Button" @click="doSomething" />' },
      description: {
        component: 'Basic button component, should not be used for routing',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
