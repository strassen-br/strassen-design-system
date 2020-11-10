import { IconName } from './IconName';

export const iconKinds = <const> ['fill', 'line'];
export type IconKind = typeof iconKinds[number];

export type EventsTypes = Readonly<{
  click: undefined;
}>;

export type PropsTypes = Readonly<{
  name: IconName;
  kind: IconKind;
}>;

export const defaultProps: PropsTypes = {
  name: 'error-warning',
  kind: 'fill',
};
