export const notificationGroupPositions = <const> [
  'top left', 'top center', 'top right',
  'bottom left', 'bottom center', 'bottom right',
];

export type NotificationGroupPosition = typeof notificationGroupPositions[number];

export type PropsTypes = Readonly<{
  group?: string;
  position: NotificationGroupPosition;
  durationInMs?: number;
  closeOnClick?: boolean;
  ignoreDuplicates?: boolean;
}>

export const defaultProps: PropsTypes = {
  group: undefined,
  position: 'top right',
  durationInMs: 3000,
  closeOnClick: false,
  ignoreDuplicates: false,
};
