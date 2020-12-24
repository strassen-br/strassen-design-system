/* eslint-disable max-len */
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg'
export const componentSizes: readonly ComponentSize[] = <const> ['xs', 'sm', 'md', 'lg'];

export type ComponentColor = 'primary' | 'success' | 'danger' | 'brand';
export const componentColors: readonly ComponentColor[] = <const> ['primary', 'success', 'danger', 'brand'];

export type UnionSubset<T, U extends T> = U;
