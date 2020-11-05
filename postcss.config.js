/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

module.exports = {
  plugins: [
    require('postcss-simple-vars'),
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nested'),
    require('autoprefixer'),
    require('postcss-font-magician')({
      display: 'swap',
    }),
  ],
};
