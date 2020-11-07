import { create } from '@storybook/theming/create';
import { theme } from '../tailwind.config';

export const dark = create({
  base: 'dark',
  colorPrimary: theme.colors['brand-yellow'],
  colorSecondary: theme.colors['brand-yellow'],
  // UI
  appBg: theme.colors.gray[900],
  appContentBg: theme.colors.gray[800],
  appBorderColor: theme.colors.gray[500],
  appBorderRadius: 0,
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  // Text colors
  textColor: theme.colors.gray[300],
  textInverseColor: theme.colors.gray[200],
  // Toolbar default and active colors
  barTextColor: theme.colors.gray[400],
  barSelectedColor: theme.colors['brand-yellow'],
  barBg: theme.colors.gray[800],
  // Form colors
  inputBg: theme.colors.transparent,
  inputBorder: theme.colors.gray[700],
  inputTextColor: theme.colors.white,
  inputBorderRadius: 0,
  brandTitle: 'Storybook Strassen',
  brandUrl: 'https://strassen.com.br',
  brandImage: '/images/strassen-logo-white.png',
});

export const light = create({
  base: 'light',
  colorPrimary: theme.colors['brand-purple'],
  colorSecondary: theme.colors['brand-purple'],
  // UI
  appBg: theme.colors.gray[100],
  appContentBg: theme.colors.white,
  appBorderColor: theme.colors.gray[400],
  appBorderRadius: 0,
  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  // Text colors
  textColor: theme.colors.gray[900],
  textInverseColor: theme.colors.gray[200],
  // Toolbar default and active colors
  barTextColor: theme.colors.gray[600],
  barSelectedColor: theme.colors['brand-purple'],
  barBg: theme.colors.white,
  // Form colors
  inputBg: theme.colors.white,
  inputBorder: theme.colors.gray[600],
  inputTextColor: theme.colors.black,
  inputBorderRadius: 0,
  brandTitle: 'Storybook Strassen',
  brandUrl: 'https://strassen.com.br',
  brandImage: '/images/strassen-logo-black.png',
});

export default dark;
