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
  template: `<st-text-input v-bind="$props">
    <!-- <div v-if="$props.default" v-html="$props.default" /> -->
    <template v-slot:bottom-label>
      <div class="absolute">
        Teste teste
      </div>
    </template>
  </st-text-input>`,
}));

export const Base = Template.bind({});

export default {
  title: 'Forms/Text input',
  component: StTextInput,
  argTypes: {
    color: {
      description: 'Button color',
      table: { type: { summary: componentColors.join(' | ') } },
      control: { type: 'inline-radio', options: componentColors },
      defaultValue: 'primary',
    },
    topLabel: {
      description: 'Text shown inside the button. Not visible when also using a slot',
      table: { type: { summary: 'String' } },
      control: { type: 'text' },
      defaultValue: 'Top label',
    },
    bottomLabel: {
      description: 'Text shown inside the button. Not visible when also using a slot',
      table: { type: { summary: 'String' } },
      control: { type: 'text' },
      defaultValue: 'Bottom label',
    },
    disabled: {
      description: 'Whether the component should have a disabled style and not emit clicks',
      table: { type: { summary: 'Boolean' } },
      control: { type: 'boolean' },
      defaultValue: false,
    },
    size: {
      description: 'Size of the text input',
      table: { type: { summary: componentSizes.join(' | ') } },
      control: { type: 'inline-radio', options: componentSizes },
      defaultValue: componentSizes[0],
    },
    click: {
      table: { type: false },
      description: 'Emitted when the button is clicked',
    },
    input: {
      table: { type: false },
      description: 'Emitted when the user types in the field',
    },
    default: {
      description: 'Content shown inside the button. Can contain html, custom components, etc',
      table: { type: false },
      control: { type: 'text' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      source: { code: '<st-text-input label="My Button" @click="doSomething" />' },
      description: {
        component: 'Basic button component, should not be used for routing',
      },
    },
  },
} as Meta<PropsTypes & EventsTypes>;
