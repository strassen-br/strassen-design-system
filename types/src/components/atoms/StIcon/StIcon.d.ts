import { IconName } from './IconName';

export declare const iconKinds: readonly ['fill', 'line'];
export declare type IconKind = typeof iconKinds[number];
export declare type EventsTypes = Readonly<{
    click: undefined;
}>;
export declare type PropsTypes = Readonly<{
    name: IconName;
    kind: IconKind;
}>;
export declare const defaultProps: PropsTypes;
