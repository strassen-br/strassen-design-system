import { actions } from '@storybook/addon-actions';
import { Meta, Story, filterArgTypesWithControls } from '@/storybook';
import {
  linkSizes,
  linkColors,
  PropsTypes,
  EventsTypes,
  defaultProps,
  underlineBehaviors,
} from './StLink';
import StLink from './StLink.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StLink },
  methods: actions('click'),
  template: '<st-link v-bind="$props" @click="click" />',
}));

export const Base = Template.bind({});

export default {
  title: 'Controls/Link',
  component: StLink,
  argTypes: {
    label: {
      description: 'Text to show in the link',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.label },
      },
      control: { type: 'text' },
      defaultValue: 'My StLink',
    },
    color: {
      description: 'Link color',
      table: {
        type: { summary: linkColors.join(' | ') },
        defaultValue: { summary: defaultProps.color },
      },
      control: { type: 'inline-radio', options: linkColors },
      defaultValue: defaultProps.color,
    },
    underlineBehavior: {
      description: 'Behavior of the underline decoration',
      table: {
        type: { summary: underlineBehaviors.join(' | ') },
        defaultValue: { summary: defaultProps.underlineBehavior },
      },
      control: { type: 'inline-radio', options: underlineBehaviors },
      defaultValue: defaultProps.underlineBehavior,
    },
    size: {
      description: 'Link text size',
      table: {
        type: { summary: linkSizes.join(' | ') },
        defaultValue: { summary: defaultProps.size },
      },
      control: { type: 'inline-radio', options: linkSizes },
      defaultValue: defaultProps.size,
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
    uppercase: {
      description: 'Whether the component should use uppercase text. Useful to make links more noticeable',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: defaultProps.uppercase.toString() },
      },
      control: { type: 'boolean' },
      defaultValue: defaultProps.uppercase,
    },
    click: {
      table: { type: false },
      description: 'Emitted when the link is clicked',
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-link label="My link" v-on:click="doSomething" />' },
      description: {
        component: 'Basic icon component, uses the Remix Link lib',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
