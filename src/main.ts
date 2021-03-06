import { VueConstructor } from 'vue';
import NotificationSSR from 'vue-notification/dist/ssr';

import './assets/index.css';

// atoms
import StButton from './components/atoms/StButton/StButton.vue';
import StIcon from './components/atoms/StIcon/StIcon.vue';
import StLink from './components/atoms/StLink/StLink.vue';
import StTextInput from './components/atoms/StTextInput/StTextInput.vue';
import StNotificationGroup from './components/atoms/StNotification/StNotificationGroup.vue';
// molecules
import StChip from './components/molecules/StChip/StChip.vue';
import StLoadingIndicator from './components/molecules/StLoadingIndicator/StLoadingIndicator.vue';
import StSelectOption from './components/molecules/StSelectOption/StSelectOption.vue';
import StSelect from './components/molecules/StSelect/StSelect.vue';
// organisms

// This allows the user to do Vue.use(st) and register all the components
export function install(Vue: VueConstructor) {
  Vue.use(NotificationSSR);

  // atoms
  Vue.component('StButton', StButton);
  Vue.component('StIcon', StIcon);
  Vue.component('StLink', StLink);
  Vue.component('StTextInput', StTextInput);
  Vue.component('StNotificationGroup', StNotificationGroup);

  // molecules
  Vue.component('StChip', StChip);
  Vue.component('StLoadingIndicator', StLoadingIndicator);
  Vue.component('StSelectOption', StSelectOption);
  Vue.component('StSelect', StSelect);

  // organisms
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
  StChip,
  StLoadingIndicator,
  StSelectOption,
  StSelect,
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
