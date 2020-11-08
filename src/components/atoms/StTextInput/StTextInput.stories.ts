import { actions } from '@storybook/addon-actions';
import { Meta, Story, filterArgTypesWithControls } from '@/storybook';
import { componentColors, componentSizes } from '@/components/sharedConstants';
import { PropsTypes, EventsTypes } from './StTextInput';
import StTextInput from './StTextInput.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StTextInput },
  methods: actions('click', 'input'),
  template: `
  <st-text-input v-bind="$props" @click="click" @input="input">
    <template v-if="topLabel" #topLabel>
      <div v-html="topLabel" />
    </template>

    <template v-if="bottomLabel" #bottomLabel>
      <div class="absolute" v-html="bottomLabel" />
    </template>

    <template #left>
      <div v-html="left" />
    </template>

    <template #right>
      <div v-html="right" />
    </template>
  </st-text-input>
  `,
}));

export const Base = Template.bind({});

export default {
  title: 'Forms/Text Input',
  component: StTextInput,
  argTypes: {
    value: {
      description: 'Input value',
      table: { type: { summary: 'String' } },
      control: { type: 'text' },
      defaultValue: '',
    },
    placeholder: {
      description: 'Input placeholder',
      table: { type: { summary: 'String' } },
      control: { type: 'text' },
      defaultValue: 'My placeholder',
    },
    topLabelText: {
      description: 'Text shown above the input. Not visible when also using a slot',
      table: { type: { summary: 'String' } },
      control: { type: 'text' },
      defaultValue: 'Top label text',
    },
    bottomLabelText: {
      description: `Text shown below the input.
      Not visible when also using a slot and has a slightly smaller font and reduced opacity`,
      table: { type: { summary: 'String' } },
      control: { type: 'text' },
      defaultValue: 'Bottom label text',
    },
    disabled: {
      description: 'Whether the component should have a disabled style and not emit clicks',
      table: { type: { summary: 'Boolean' } },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    uppercase: {
      description: 'Whether the component should use uppercase text. Useful to make smaller inputs readable',
      table: { type: { summary: 'Boolean' } },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    color: {
      description: 'Input color, used to show validation state',
      table: { type: { summary: componentColors.join(' | ') } },
      control: { type: 'inline-radio', options: componentColors },
      defaultValue: 'primary',
    },
    size: {
      description: 'Size of the text input',
      table: { type: { summary: componentSizes.join(' | ') } },
      control: { type: 'inline-radio', options: componentSizes },
      defaultValue: 'md',
    },
    click: {
      table: { type: false },
      description: 'Emitted when the button is clicked',
    },
    input: {
      table: { type: false },
      description: 'Emitted when the user types in the field',
    },
    topLabel: {
      description: 'Content shown above the input. Can contain html, components, etc',
      table: { type: false },
      control: { type: 'text' },
    },
    bottomLabel: {
      description: 'Content shown below the input. Can contain html, components, etc',
      table: { type: false },
      control: { type: 'text' },
    },
    left: {
      description: 'Content shown inside the input aligned to the left. Useful for icons, buttons, etc',
      table: { type: false },
      control: { type: 'text' },
    },
    right: {
      description: 'Content shown inside the input aligned to the right. Useful for icons, buttons, etc',
      table: { type: false },
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-text-input label="My Button" @click="doSomething" />' },
      description: {
        component: `Basic text input component, can also be used to create more complex components,
        like selects, password inputs, etc`,
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
