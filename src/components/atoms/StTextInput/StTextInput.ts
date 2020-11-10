import { ComponentColor, ComponentSize } from '@/components/sharedConstants';

export type EventsTypes = {
  click: undefined;
  input: string;
}

export type PropsTypes = {
  topLabelText?: string;
  bottomLabelText?: string;
  value?: string;
  color: ComponentColor;
  size: ComponentSize;
  disabled: boolean;
  uppercase: boolean;
}
