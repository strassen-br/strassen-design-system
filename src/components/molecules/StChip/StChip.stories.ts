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
} from './StChip';
import StChip from './StChip.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StChip },
  methods: actions('dismiss'),
  template: `
    <div class="flex justify-center items-center">
      <st-chip v-bind="$props" @dismiss="dismiss" />
    </div>
  `,
}));

export const Base = Template.bind({});

export default {
  title: 'General/Chip',
  component: StChip,
  argTypes: {
    label: {
      description: 'Text shown inside the chip',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.label },
      },
      control: { type: 'text' },
      defaultValue: 'My chip',
    },
    isDismissible: {
      description: 'If the chip should have a dismiss button',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: defaultProps.isDismissible },
      },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    dismiss: getEventArgType('Emitted when the dismiss button is clicked'),
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        code: '<st-chip label="My chip" @dismiss="dismiss" />',
      },
      description: {
        component: 'Basic chip component.',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
