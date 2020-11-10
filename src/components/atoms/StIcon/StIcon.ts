import { IconName } from './IconName';

export const iconKinds = <const> ['fill', 'line'];
export type IconKind = typeof iconKinds[number];

export type EventsTypes = {
  click: undefined;
}

export type PropsTypes = {
  name: IconName;
  kind: IconKind;
}
