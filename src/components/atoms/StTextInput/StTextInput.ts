import { ComponentColor, ComponentSize, UnionSubset } from '../../sharedConstants';

export type TextInputColor = UnionSubset<ComponentColor, 'primary' | 'success' | 'danger'>;
export const textInputColors: readonly TextInputColor[] = ['primary', 'success', 'danger'];

export type EventsTypes = Readonly<{
  click: undefined;
  input: string;
}>;

export type PropsTypes = Readonly<{
  topLabelText?: string;
  bottomLabelText?: string;
  value?: string;
  color: UnionSubset<ComponentColor, 'primary' | 'success' | 'danger'>;
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
