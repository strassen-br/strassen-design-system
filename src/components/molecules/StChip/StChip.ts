export type EventsTypes = Readonly<{
  dismiss: undefined;
}>;

export type PropsTypes = Readonly<{
  label?: string;
  isDismissible?: boolean;
}>;

export const defaultProps: PropsTypes = {
  label: undefined,
  isDismissible: true,
};
