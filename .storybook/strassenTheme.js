import { create } from '@storybook/theming/create';
import { theme } from '../tailwind.config';

export default create({
  base: 'dark',

  // colorPrimary: theme.colors['brand-purple'],
  colorSecondary: theme.colors["brand-yellow"],

  // // UI
  // appBg: theme.colors.white,
  appContentBg: theme.colors.gray[900],
  // appBorderColor: theme.colors.gray[400],
  // appBorderRadius: 4,

  // // Typography
  // fontBase: '"Inter", sans-serif',
  // fontCode: 'monospace',

  // // Text colors
  // textColor: 'black',
  textInverseColor: theme.colors.gray[500],

  // Toolbar default and active colors
  // barTextColor: 'silver',
  // barSelectedColor: 'black',
  // barBg: 'hotpink',

  // Form colors
  // inputBg: 'white',
  // inputBorder: 'silver',
  // inputTextColor: 'black',
  // inputBorderRadius: 4,

  brandTitle: 'Storybook Strassen',
  // brandUrl: 'https://example.com',
  brandImage: '/images/strassen-logo-white.png',
})
