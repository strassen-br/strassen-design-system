import { ComponentColor, ComponentSize } from '../../sharedConstants';

export type EventsTypes = Readonly<{
  click: undefined;
  input: string;
}>;

export type PropsTypes = Readonly<{
  topLabelText?: string;
  bottomLabelText?: string;
  value?: string;
  color: ComponentColor;
  size: ComponentSize;
  disabled: boolean;
  uppercase: boolean;
}>;

export const defaultProps: PropsTypes = {
  topLabelText: undefined,
  bottomLabelText: undefined,
  value: undefined,
  color: 'primary',
  size: 'md',
  disabled: false,
  uppercase: false,
};
