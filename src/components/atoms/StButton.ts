import { RecordPropsDefinition } from 'vue/types/options.d';

export type EventsTypes = {
  click: undefined;
}

export type PropsTypes = {
  label?: string;
  kind: 'primary' | 'danger' | 'success';
}

export const buttonKinds = ['primary', 'danger', 'success'];

export const props = {
  kind: {
    type: String,
    required: false,
    default: 'primary',
    validator: (value) => buttonKinds.includes(value),
  },
  label: {
    type: String,
    required: false,
    default: undefined,
  },
} as RecordPropsDefinition<PropsTypes>;
