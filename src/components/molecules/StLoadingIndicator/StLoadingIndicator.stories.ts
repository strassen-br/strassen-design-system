import { Meta, Story, filterArgTypesWithControls } from '../../../storybook';
import { PropsTypes, EventsTypes } from './StLoadingIndicator';
import StLoadingIndicator from './StLoadingIndicator.vue';

/**
 * Base template, used by other stories
 */
const Template: Story<PropsTypes & EventsTypes> = ((args, { argTypes }) => ({
  props: filterArgTypesWithControls(argTypes),
  components: { StLoadingIndicator },
  template: '<div class="flex items-center"><st-loading-indicator /></div>',
}));

export const Base = Template.bind({});

export default {
  title: 'General/LoadingIndicator',
  component: StLoadingIndicator,
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-loading-indicator />' },
      description: {
        component: 'Basic loading indicator component',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
