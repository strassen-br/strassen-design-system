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
  defaultProps,
} from './StSelectOption';
import StSelectOption from './StSelectOption.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StSelectOption },
  methods: actions('click'),
  template: `
  <div>
    <st-select-option v-for="i in [0,1,2,3]" v-bind="$props" @click="click">
      <div v-if="$props.default" v-html="$props.default" />
    </st-select-option>
  </div>
  `,
}));

export const Base = Template.bind({});

export default {
  title: 'Forms/Select/SelectOption',
  component: StSelectOption,
  argTypes: {
    label: {
      description: 'Text shown inside the option. Not visible when also using a slot',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.label },
      },
      control: { type: 'text' },
      defaultValue: 'My option 1',
    },
    value: {
      description: 'Option value, used to update the select value when the option is clicked',
      table: {
        type: { summary: 'Any' },
        defaultValue: { summary: defaultProps.value },
      },
      control: { type: 'text' },
      defaultValue: 'option-1',
    },
    click: getEventArgType('Emitted when the option is clicked. Contains the option value', 'Any'),
    default: getSlotArgType('Content inside the option. Can contain html, components, etc'),
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-select-option value="option-1" label="My option 1" />' },
      description: {
        component: 'Basic select option component, should be used with the select component.',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
