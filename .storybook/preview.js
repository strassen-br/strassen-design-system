import Vue from 'vue';
import Notifications from 'vue-notification';
import '../src/assets/index.css';
import 'remixicon/fonts/remixicon.css'
import { dark, light } from './strassenTheme';

Vue.use(Notifications);

export const parameters = {
  darkMode: {
    dark,
    light,
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true
  },
};
