import { ComponentColor } from '../../sharedConstants';
export declare const buttonKinds: readonly ["filled", "outline"];
export declare type ButtonKind = typeof buttonKinds[number];
export declare type EventsTypes = Readonly<{
    click: undefined;
}>;
export declare type PropsTypes = Readonly<{
    label?: string;
    color: ComponentColor;
    kind: ButtonKind;
    disabled: boolean;
}>;
export declare const defaultProps: PropsTypes;
