import { VueConstructor } from 'vue';
import 'remixicon/fonts/remixicon.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import NotificationSSR from 'vue-notification/dist/ssr';

import './assets/index.css';

// atoms
import StButton from './components/atoms/StButton/StButton.vue';
import StIcon from './components/atoms/StIcon/StIcon.vue';
import StLink from './components/atoms/StLink/StLink.vue';
import StTextInput from './components/atoms/StTextInput/StTextInput.vue';
import StNotificationGroup from './components/atoms/StNotification/StNotificationGroup.vue';
// molecules
// organisms

// This allows the user to do Vue.use(st) and register all the components
export function install(Vue: VueConstructor) {
  Vue.use(NotificationSSR);

  Vue.component('StButton', StButton);
  Vue.component('StIcon', StIcon);
  Vue.component('StLink', StLink);
  Vue.component('StTextInput', StTextInput);
  Vue.component('StNotificationGroup', StNotificationGroup);
}

// This allows the user to independently register components
export {
  // atoms
  StButton,
  StIcon,
  StLink,
  StTextInput,
  StNotificationGroup,
  // molecules
  // organisms
};

// Plugin
const plugin = {
  install,
};

export default plugin;

// Auto-install, when used in a <script> tag
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}
