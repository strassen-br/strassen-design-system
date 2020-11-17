import { ComponentColor } from '../../sharedConstants';

export const buttonKinds = <const> ['filled', 'outline', 'text-only'];
export type ButtonKind = typeof buttonKinds[number];

export type EventsTypes = Readonly<{
  click: undefined;
}>;

export type PropsTypes = Readonly<{
  label?: string;
  color: ComponentColor;
  kind: ButtonKind;
  disabled: boolean;
}>;

export const defaultProps: PropsTypes = <const> {
  label: undefined,
  color: 'primary',
  kind: 'filled',
  disabled: false,
};
