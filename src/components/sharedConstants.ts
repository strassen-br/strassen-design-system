export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg'
export const componentSizes: readonly ComponentSize[] = <const> ['xs', 'sm', 'md', 'lg'];

export type ComponentColor = 'primary' | 'success' | 'danger';
export const componentColors: readonly ComponentColor[] = <const> ['primary', 'success', 'danger'];

export type UnionSubset<T, U extends T> = U;
