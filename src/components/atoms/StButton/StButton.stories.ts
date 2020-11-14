import { actions } from '@storybook/addon-actions';
import {
  Meta,
  Story,
  getSlotArgType,
  getEventArgType,
  filterArgTypesWithControls,
} from '../../../storybook';
import {
  PropsTypes,
  EventsTypes,
  buttonKinds,
  defaultProps,
} from './StButton';
import StButton from './StButton.vue';
import { componentColors } from '../../sharedConstants';

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
    label: {
      description: 'Text shown inside the button. Not visible when also using a slot',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.label },
      },
      control: { type: 'text' },
      defaultValue: 'My StButton',
    },
    color: {
      description: 'Button color',
      table: {
        type: { summary: componentColors.join(' | ') },
        defaultValue: { summary: defaultProps.color },
      },
      control: { type: 'inline-radio', options: componentColors },
      defaultValue: defaultProps.color,
    },
    kind: {
      description: 'Visual kind of the button. Used to make it more or less noticeable',
      table: {
        type: { summary: buttonKinds.join(' | ') },
        defaultValue: { summary: defaultProps.kind },
      },
      control: { type: 'inline-radio', options: buttonKinds },
      defaultValue: defaultProps.kind,
    },
    disabled: {
      description: 'Whether the component should have a disabled style and not emit clicks',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: defaultProps.disabled.toString() },
      },
      control: { type: 'boolean' },
      defaultValue: defaultProps.disabled,
    },
    click: getEventArgType('Emitted when the button is clicked'),
    default: getSlotArgType('Content shown inside the button. Can contain html, custom components, etc'),
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
