import { componentColors, componentSizes } from '@/components/sharedConstants';

export type EventsTypes = {
  click: undefined;
  input: string;
}

export type PropsTypes = {
  topLabel?: string;
  bottomLabel?: string;
  value?: string;
  color: typeof componentColors[number];
  size: typeof componentSizes[number];
  disabled: boolean;
}
