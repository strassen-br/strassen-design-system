export type EventsTypes = Readonly<{
  click: undefined;
  input: string;
}>;

export type PropsTypes = Readonly<{
  topLabelText?: string;
  value?: any;
  disabled: boolean;
}>;

export const defaultProps: PropsTypes = {
  topLabelText: undefined,
  value: undefined,
  disabled: false,
};
