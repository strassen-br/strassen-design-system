import { Meta, Story } from '../../../storybook';
import { PropsTypes } from './StNotificationGroup';
/**
 * Notification group template, focus on showing how to control the notification group component
 */
export declare const Base: Story<PropsTypes>;
declare const _default: Meta<Readonly<{
    group?: string | undefined;
    position: "top left" | "top center" | "top right" | "bottom left" | "bottom center" | "bottom right";
    durationInMs?: number | undefined;
    closeOnClick?: boolean | undefined;
    ignoreDuplicates?: boolean | undefined;
}>>;
/**
 * Notify method template, focus on showing how to create notifications using Vue.notify
 */
export default _default;
