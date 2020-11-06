export const buttonColors = <const> ['primary', 'danger', 'success'];
export const buttonKinds = <const> ['filled', 'outline'];

export type EventsTypes = {
  click: undefined;
}

export type PropsTypes = {
  label?: string;
  color: typeof buttonColors[number];
  kind: typeof buttonKinds[number];
}
