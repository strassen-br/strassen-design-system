import { VueConstructor } from 'vue';
import 'remixicon/fonts/remixicon.css';

import './assets/index.css';

// atoms
import StButton from './components/atoms/StButton/StButton.vue';
import StIcon from './components/atoms/StIcon/StIcon.vue';
// molecules
// organisms

const components = [
  // atoms
  StButton,
  StIcon,

  // molecules
  // organisms
];

// This allows the user to do Vue.use(st) and register all the components
export function install(Vue: VueConstructor) {
  components.forEach((component) => Vue.component(component.name, component));
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
