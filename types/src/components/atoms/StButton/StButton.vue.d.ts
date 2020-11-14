import Vue from 'vue';
declare type Data = {};
declare type Methods = {
    emitClickIfNotDisabled: () => void;
};
declare type Computed = {
    wrapperClasses: string;
};
declare const _default: import('vue/types/vue').ExtendedVue<Vue, Data, Methods, Computed, Readonly<{
    label?: string | undefined;
    color: import('../../sharedConstants').ComponentColor;
    kind: 'filled' | 'outline';
    disabled: boolean;
}>>;
export default _default;
