import { actions } from '@storybook/addon-actions';
import {
  Meta,
  Story,
  getSlotArgType,
  getEventArgType,
  filterArgTypesWithControls,
} from '../../../storybook';
import { componentColors, componentSizes } from '../../sharedConstants';
import { PropsTypes, EventsTypes, defaultProps } from './StTextInput';
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
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.value },
      },
      control: { type: 'text' },
      defaultValue: '',
    },
    id: {
      description: 'Input id, needed for accessibility purposes',
      table: {
        type: { summary: 'String' },
      },
      control: { type: 'text' },
      defaultValue: 'my-input',
    },
    placeholder: {
      description: 'Input placeholder',
      table: {
        type: { summary: 'String' },
      },
      control: { type: 'text' },
      defaultValue: 'My placeholder',
    },
    topLabelText: {
      description: 'Text shown above the input. Not visible when also using a slot',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.topLabelText },
      },
      control: { type: 'text' },
      defaultValue: 'Top label text',
    },
    bottomLabelText: {
      description: `Text shown below the input.
      Not visible when also using a slot and has a slightly smaller font and reduced opacity`,
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.bottomLabelText },
      },
      control: { type: 'text' },
      defaultValue: 'Bottom label text',
    },
    disabled: {
      description: 'Whether the field should be disabled style and not emit clicks or accept user input',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: defaultProps.disabled.toString() },
      },
      control: { type: 'boolean' },
      defaultValue: defaultProps.disabled,
    },
    uppercase: {
      description: 'Whether the component should use uppercase text. Useful to make smaller inputs readable',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: defaultProps.uppercase.toString() },
      },
      control: { type: 'boolean' },
      defaultValue: defaultProps.uppercase,
    },
    color: {
      description: 'Input color, used to show validation state',
      table: {
        type: { summary: componentColors.join(' | ') },
        defaultValue: { summary: defaultProps.color },
      },
      control: { type: 'inline-radio', options: componentColors },
      defaultValue: defaultProps.color,
    },
    size: {
      description: 'Size of the text input',
      table: {
        type: { summary: componentSizes.join(' | ') },
        defaultValue: { summary: defaultProps.size },
      },
      control: { type: 'inline-radio', options: componentSizes },
      defaultValue: defaultProps.size,
    },
    click: getEventArgType('Emitted when the button is clicked'),
    input: getEventArgType('Emitted when the user types in the field', 'String'),
    topLabel: getSlotArgType('Content shown above the input. Can contain html, components, etc'),
    bottomLabel: getSlotArgType('Content shown below the input. Can contain html, components, etc'),
    left: getSlotArgType('Content shown in the input aligned to the left. Used for icons, buttons, etc'),
    right: getSlotArgType('Content shown in the input aligned to the right. Used for icons, buttons, etc'),
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-text-input top-label-text="Enter your email" v-model="userEmail" />' },
      description: {
        component: `Basic text input component, can also be used to create more complex components,
        like selects, password inputs, etc`,
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
