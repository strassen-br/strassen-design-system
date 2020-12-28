import { actions } from '@storybook/addon-actions';
import {
  Meta,
  Story,
  getEventArgType,
  filterArgTypesWithControls,
  getSlotArgType,
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
  <st-select v-bind="$props" @input="input">
    <template #default="{ onOptionClick }">
      <st-select-option
        v-for="i in [1,2,3,4,5]"
        :key="i"
        :value="'option-' + i + '-value'"
        :label="'Option ' + i"
        @click="onOptionClick"
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
        type: { summary: 'Any' },
        defaultValue: { summary: defaultProps.value },
      },
      control: { type: 'object' },
    },
    placeholder: {
      description: 'Input placeholder',
      table: {
        type: { summary: 'String' },
      },
      control: { type: 'text' },
      defaultValue: 'My placeholder',
    },
    label: {
      description: 'Text shown above the select',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.label },
      },
      control: { type: 'text' },
      defaultValue: 'My select',
    },
    input: getEventArgType('Emitted when the select value changes', 'String'),
    default: getSlotArgType('Slot to place the StSelectOption components', true),
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code:
      `<st-select label="My select" v-model="selectedOption">
  // the abbreviated syntax for this is <template v-slot:default="{ onOptionClick }">
  // the long form is used here because storybook doesn't seem to parse the shorthand
  <template v-slot:default="{ onOptionClick }">
    <st-select-option value="value-1" label="Option 1" v-on:click="onOptionClick" />
    <st-select-option value="value-2" label="Option 2" v-on:click="onOptionClick" />
    <st-select-option value="value-3" label="Option 3" v-on:click="onOptionClick" />
    <st-select-option value="value-4" label="Option 4" v-on:click="onOptionClick" />
  </template>
</st-select>`,
      },
      description: {
        component: 'Basic select component.',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
