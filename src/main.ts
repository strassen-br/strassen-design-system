import { VueConstructor } from 'vue';
import './assets/index.css';

import StButton from './components/atoms/StButton.vue';

// This allows the user to do Vue.use(st) and register all the components
export function install(Vue: VueConstructor) {
  // atoms
  Vue.component('StButton', StButton);
  // molecules
  // organisms
}

// This allows the user to independently register components
export {
  // atoms
  StButton,
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
