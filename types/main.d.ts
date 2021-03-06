import { VueConstructor } from 'vue';
import './assets/index.css';
import StButton from './components/atoms/StButton/StButton.vue';
import StIcon from './components/atoms/StIcon/StIcon.vue';
import StLink from './components/atoms/StLink/StLink.vue';
import StTextInput from './components/atoms/StTextInput/StTextInput.vue';
import StNotificationGroup from './components/atoms/StNotification/StNotificationGroup.vue';
import StChip from './components/molecules/StChip/StChip.vue';
import StLoadingIndicator from './components/molecules/StLoadingIndicator/StLoadingIndicator.vue';
import StSelectOption from './components/molecules/StSelectOption/StSelectOption.vue';
import StSelect from './components/molecules/StSelect/StSelect.vue';
export declare function install(Vue: VueConstructor): void;
export { StButton, StIcon, StLink, StTextInput, StNotificationGroup, StChip, StLoadingIndicator, StSelectOption, StSelect, };
declare const plugin: {
    install: typeof install;
};
export default plugin;
