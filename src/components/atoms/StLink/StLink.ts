import { ComponentColor, ComponentSize, UnionSubset } from '@/components/sharedConstants';

export type LinkColor = UnionSubset<ComponentColor, 'primary'>;
export const linkColors: readonly LinkColor[] = ['primary'];

export type LinkSize = UnionSubset<ComponentSize, 'xs' | 'sm' | 'md'>;
export const linkSizes: readonly LinkSize[] = ['xs', 'sm', 'md'];

export const underlineBehaviors = <const> ['never', 'on-hover', 'always'];
export type UnderlineBehavior = typeof underlineBehaviors[number];

export type EventsTypes = Readonly<{
  click: undefined;
}>

export type PropsTypes = Readonly<{
  label?: string;
  color: LinkColor;
  size: LinkSize;
  underlineBehavior: UnderlineBehavior;
  disabled: boolean;
  uppercase: boolean;
}>

export const defaultProps: PropsTypes = {
  label: undefined,
  color: 'primary',
  size: 'md',
  underlineBehavior: 'always',
  disabled: false,
  uppercase: false,
};
