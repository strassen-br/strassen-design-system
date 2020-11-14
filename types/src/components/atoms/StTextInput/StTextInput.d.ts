import { ComponentColor, ComponentSize } from '../../sharedConstants';
export declare type EventsTypes = Readonly<{
    click: undefined;
    input: string;
}>;
export declare type PropsTypes = Readonly<{
    topLabelText?: string;
    bottomLabelText?: string;
    value?: string;
    color: ComponentColor;
    size: ComponentSize;
    disabled: boolean;
    uppercase: boolean;
}>;
export declare const defaultProps: PropsTypes;
