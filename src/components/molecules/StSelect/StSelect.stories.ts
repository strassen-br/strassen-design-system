import { actions } from '@storybook/addon-actions';
import {
  Meta,
  Story,
  getEventArgType,
  filterArgTypesWithControls,
} from '../../../storybook';
import {
  PropsTypes,
  EventsTypes,
  defaultProps,
} from './StSelect';
import StSelect from './StSelect.vue';
import StSelectOption from '../StSelectOption/StSelectOption.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StSelect, StSelectOption },
  methods: actions('click', 'input'),
  template: `
  <st-select v-bind="$props" @click="click" @input="input">
    <template #default="slotProps">
      <st-select-option
        v-for="i in [1,2,3,4,5]"
        :key="i"
        :value="i"
        :label="'Option ' + i"
      />
    </template>
  </st-select>
  `,
}));

export const Base = Template.bind({});

export default {
  title: 'Forms/Select',
  component: StSelect,
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
      description: 'Text shown above the select',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.topLabelText },
      },
      control: { type: 'text' },
      defaultValue: 'Top label text',
    },
    click: getEventArgType('Emitted when the button is clicked'),
    input: getEventArgType('Emitted when the user types in the field', 'String'),
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-select top-label-text="Enter your email" v-model="userEmail" />' },
      description: {
        component: 'Basic select component, based on the text input component.',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
