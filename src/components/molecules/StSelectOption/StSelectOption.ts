/* eslint-disable @typescript-eslint/no-explicit-any */
export type EventsTypes = Readonly<{
  click: any;
}>;

export type PropsTypes = Readonly<{
  label?: string;
  value: any;
}>;

export const defaultProps: PropsTypes = {
  label: '',
  value: undefined,
};
