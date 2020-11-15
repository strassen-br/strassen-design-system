import Vue from 'vue';
import NotificationSSR from 'vue-notification/dist/ssr';
import '../src/assets/index.css';
import 'remixicon/fonts/remixicon.css'
import { dark, light } from './strassenTheme';

Vue.use(NotificationSSR);

export const parameters = {
  darkMode: {
    dark,
    light,
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true
  },
};
