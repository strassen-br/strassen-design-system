import { ComponentColor } from './src/components/sharedConstants.d';

export interface StNotificationOptions {
  title?: string;
  text?: string;
  type?: ComponentColor;
  group?: string;
  duration?: number;
  // speed?: number;
  // data?: object;
  clean?: boolean;
}

declare module 'vue/types/vue' {
  interface Vue {
      $notify: (options: StNotificationOptions | string) => void;
  }
  interface VueConstructor {
      notify: (options: StNotificationOptions | string) => void;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $notify: (options: StNotificationOptions | string) => void;
  }
}
