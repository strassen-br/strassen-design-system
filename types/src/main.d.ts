import { VueConstructor } from 'vue';
import 'remixicon/fonts/remixicon.css';
import './assets/index.css';
import StButton from './components/atoms/StButton/StButton.vue';
import StIcon from './components/atoms/StIcon/StIcon.vue';
import StLink from './components/atoms/StLink/StLink.vue';
export declare function install(Vue: VueConstructor): void;
export { StButton, StIcon, StLink };
declare const plugin: {
    install: typeof install;
};
export default plugin;
