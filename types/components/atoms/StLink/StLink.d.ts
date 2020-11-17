import { ComponentColor, ComponentSize, UnionSubset } from '../../sharedConstants';
export declare type LinkColor = UnionSubset<ComponentColor, 'primary'>;
export declare const linkColors: readonly LinkColor[];
export declare type LinkSize = UnionSubset<ComponentSize, 'xs' | 'sm' | 'md'>;
export declare const linkSizes: readonly LinkSize[];
export declare const underlineBehaviors: readonly ["never", "on-hover", "always"];
export declare type UnderlineBehavior = typeof underlineBehaviors[number];
export declare type EventsTypes = Readonly<{
    click: undefined;
}>;
export declare type PropsTypes = Readonly<{
    label: string;
    color: LinkColor;
    size: LinkSize;
    underlineBehavior: UnderlineBehavior;
    disabled: boolean;
    uppercase: boolean;
}>;
export declare const defaultProps: PropsTypes;
