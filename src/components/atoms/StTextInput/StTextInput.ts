import { componentColors, componentSizes } from '@/components/sharedConstants';

export type EventsTypes = {
  click: undefined;
  input: string;
}

export type PropsTypes = {
  topLabelText?: string;
  bottomLabelText?: string;
  value?: string;
  color: typeof componentColors[number];
  size: typeof componentSizes[number];
  disabled: boolean;
  uppercase: boolean;
}
