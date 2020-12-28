export type EventsTypes = Readonly<{
  click: undefined;
  input: string;
}>;

export type PropsTypes = Readonly<{
  label?: string;
  value?: any;
}>;

export const defaultProps: PropsTypes = {
  label: undefined,
  value: undefined,
};
