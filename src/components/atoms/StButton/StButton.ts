import { ComponentColor } from '@/components/sharedConstants';

export const buttonKinds = <const> ['filled', 'outline'];
export type ButtonKind = typeof buttonKinds[number];

export type EventsTypes = {
  click: undefined;
}

export type PropsTypes = {
  label?: string;
  color: ComponentColor;
  kind: ButtonKind;
  disabled: boolean;
}
