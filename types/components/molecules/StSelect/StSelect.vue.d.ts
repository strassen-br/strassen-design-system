import Vue from 'vue';
declare type Data = {
    isOptionsContainerVisible: boolean;
};
declare type Methods = {
    hideOptions: () => void;
    onArrowDropdownClick: () => void;
};
declare type Computed = {
    hasSelectedOption: boolean;
    selectedOptionLabel: string;
    optionsSlotProps: Record<string, Function>;
    arrowDropdownIconClasses: Record<string, boolean>;
};
declare const _default: import("vue/types/vue").ExtendedVue<Vue, Data, Methods, Computed, Readonly<{
    label?: string | undefined;
    value?: any;
}>>;
export default _default;
