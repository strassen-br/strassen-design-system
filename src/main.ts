import { VueConstructor } from 'vue';
import 'remixicon/fonts/remixicon.css';
import Notification from 'vue-notification';

import './assets/index.css';

// atoms
import StButton from './components/atoms/StButton/StButton.vue';
import StIcon from './components/atoms/StIcon/StIcon.vue';
import StLink from './components/atoms/StLink/StLink.vue';
import StTextInput from './components/atoms/StTextInput/StTextInput.vue';
// molecules
// organisms

// This allows the user to do Vue.use(st) and register all the components
export function install(Vue: VueConstructor) {
  Vue.use(Notification);

  Vue.component('StButton', StButton);
  Vue.component('StIcon', StIcon);
  Vue.component('StLink', StLink);
  Vue.component('StTextInput', StTextInput);
}

// This allows the user to independently register components
export {
  // atoms
  StButton,
  StIcon,
  StLink,
  StTextInput,
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
