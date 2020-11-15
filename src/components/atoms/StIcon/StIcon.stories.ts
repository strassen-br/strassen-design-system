import { actions } from '@storybook/addon-actions';
import {
  Meta,
  Story,
  joinWithPipe,
  getEventArgType,
  filterArgTypesWithControls,
} from '../../../storybook';
import {
  iconKinds,
  PropsTypes,
  EventsTypes,
  defaultProps,
} from './StIcon';
import StIcon from './StIcon.vue';
import { iconNames } from './IconName';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StIcon },
  methods: actions('click'),
  template: '<st-icon v-bind="$props" @click="click" />',
}));

export const Base = Template.bind({});

export default {
  title: 'General/Icon',
  component: StIcon,
  argTypes: {
    name: {
      description: 'Icon name from the Remix Icon lib',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: defaultProps.name },
      },
      control: { type: 'select', options: iconNames },
      defaultValue: defaultProps.name,
    },
    kind: {
      description: 'Visual kind of the icon, defined in the Remix Icon lib',
      table: {
        type: { summary: joinWithPipe(iconKinds) },
        defaultValue: { summary: defaultProps.kind },
      },
      control: { type: 'inline-radio', options: iconKinds },
      defaultValue: defaultProps.kind,
    },
    click: getEventArgType('Emitted when the icon is clicked'),
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-icon name="home-2" v-on:click="doSomething" />' },
      description: {
        component: 'Basic icon component, uses the Remix Icon lib',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
