export declare const notificationGroupPositions: readonly ["top left", "top center", "top right", "bottom left", "bottom center", "bottom right"];
export declare type NotificationGroupPosition = typeof notificationGroupPositions[number];
export declare type PropsTypes = Readonly<{
    group?: string;
    position: NotificationGroupPosition;
    durationInMs?: number;
    closeOnClick?: boolean;
    ignoreDuplicates?: boolean;
}>;
export declare const defaultProps: PropsTypes;
