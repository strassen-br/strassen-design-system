import Vue from 'vue';
declare type Data = {};
declare type Methods = {
    emitInput: (event: InputEvent) => void;
    emitClickIfNotDisabled: () => void;
};
declare type Computed = {
    wrapperClasses: string;
    hasTopLabel: boolean;
    hasBottomLabel: boolean;
    inputListeners: Record<string, Function>;
};
declare const _default: import("vue/types/vue").ExtendedVue<Vue, Data, Methods, Computed, Readonly<{
    topLabelText?: string | undefined;
    bottomLabelText?: string | undefined;
    value?: string | undefined;
    color: "primary" | "success" | "danger";
    size: import("../../sharedConstants").ComponentSize;
    disabled: boolean;
    uppercase: boolean;
}>>;
export default _default;
