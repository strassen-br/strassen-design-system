import { ComponentColor, ComponentSize, UnionSubset } from '../../sharedConstants';
export declare type TextInputColor = UnionSubset<ComponentColor, 'primary' | 'success' | 'danger'>;
export declare const textInputColors: readonly TextInputColor[];
export declare type EventsTypes = Readonly<{
    click: undefined;
    input: string;
}>;
export declare type PropsTypes = Readonly<{
    topLabelText?: string;
    bottomLabelText?: string;
    value?: string;
    color: UnionSubset<ComponentColor, 'primary' | 'success' | 'danger'>;
    size: ComponentSize;
    disabled: boolean;
    uppercase: boolean;
}>;
export declare const defaultProps: PropsTypes;
