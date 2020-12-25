import { actions } from '@storybook/addon-actions';
import {
  Meta,
  Story,
  joinWithPipe,
  getEventArgType,
  filterArgTypesWithControls,
} from '../../../storybook';
import {
  PropsTypes,
  EventsTypes,
  defaultProps,
} from './StLoadingIndicator';
import StLoadingIndicator from './StLoadingIndicator.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StLoadingIndicator },
  methods: actions('click'),
  template: '<st-loadingIndicator v-bind="$props" @click="click" />',
}));

export const Base = Template.bind({});

export default {
  title: 'General/LoadingIndicator',
  component: StLoadingIndicator,
  argTypes: {
    // name: {
    //   description: 'LoadingIndicator name from the Remix LoadingIndicator lib',
    //   table: {
    //     type: { summary: 'String' },
    //     defaultValue: { summary: defaultProps.name },
    //   },
    //   control: { type: 'select', options: loadingIndicatorNames },
    //   defaultValue: defaultProps.name,
    // },
    // kind: {
    //   description: 'Visual kind of the loadingIndicator, defined in the Remix LoadingIndicator lib',
    //   table: {
    //     type: { summary: joinWithPipe(loadingIndicatorKinds) },
    //     defaultValue: { summary: defaultProps.kind },
    //   },
    //   control: { type: 'inline-radio', options: loadingIndicatorKinds },
    //   defaultValue: defaultProps.kind,
    // },
    click: getEventArgType('Emitted when the loadingIndicator is clicked'),
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-loadingIndicator name="home-2" v-on:click="doSomething" />' },
      description: {
        component: 'Basic loadingIndicator component, uses the Remix LoadingIndicator lib',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
