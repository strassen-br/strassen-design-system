import { Meta, Story } from '@/storybook';

export declare const Base: Story<Readonly<{
    label?: string | undefined;
    color: 'primary';
    size: 'xs' | 'sm' | 'md';
    underlineBehavior: 'never' | 'on-hover' | 'always';
    disabled: boolean;
    uppercase: boolean;
}> & Readonly<{
    click: undefined;
}>>;
declare const _default: Meta<Readonly<{
    label?: string | undefined;
    color: 'primary';
    size: 'xs' | 'sm' | 'md';
    underlineBehavior: 'never' | 'on-hover' | 'always';
    disabled: boolean;
    uppercase: boolean;
}> & Readonly<{
    click: undefined;
}>>;
export default _default;