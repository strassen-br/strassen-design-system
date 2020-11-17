import Vue from 'vue';
declare type Data = {};
declare type Methods = {};
declare type Computed = {
    notificationsProps: Record<string, unknown>;
};
declare const _default: import("vue/types/vue").ExtendedVue<Vue, Data, Methods, Computed, Readonly<{
    group?: string | undefined;
    position: "top left" | "top center" | "top right" | "bottom left" | "bottom center" | "bottom right";
    durationInMs?: number | undefined;
    closeOnClick?: boolean | undefined;
    ignoreDuplicates?: boolean | undefined;
}>>;
export default _default;
