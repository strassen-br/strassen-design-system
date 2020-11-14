import Vue from 'vue';

declare type Data = {};
declare type Methods = {
    emitClick: () => void;
};
declare type Computed = {
    underlineClass: string;
    wrapperClasses: string[];
};
export declare type Events = {
    click: void;
};
declare const _default: import('vue/types/vue').ExtendedVue<Vue, Data, Methods, Computed, Readonly<{
    label?: string | undefined;
    color: 'primary';
    size: 'xs' | 'sm' | 'md';
    underlineBehavior: 'never' | 'on-hover' | 'always';
    disabled: boolean;
    uppercase: boolean;
}>>;
export default _default;
