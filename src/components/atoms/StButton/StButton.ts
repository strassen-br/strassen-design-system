import { componentColors } from '@/components/sharedConstants';

export const buttonKinds = <const> ['filled', 'outline'];

export type EventsTypes = {
  click: undefined;
}

export type PropsTypes = {
  label?: string;
  color: typeof componentColors[number];
  kind: typeof buttonKinds[number];
  disabled: boolean;
}
