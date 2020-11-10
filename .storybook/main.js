const vueWebpackConfig = require('../node_modules/@vue/cli-service/webpack.config.js');

const findPostCssRule = ({ test }) => test.toString() === '/\\.p(ost)?css$/';
const findPugRule = ({ test }) => test.toString() === '/\\.pug$/';
const vueWebpackPlugins = vueWebpackConfig.resolve.plugins;

module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    'storybook-dark-mode/register',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-typescript',
    '@storybook/addon-a11y',
  ],
  webpackFinal: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        (vueWebpackConfig.module.rules || []).find(findPostCssRule),
        (vueWebpackConfig.module.rules || []).find(findPugRule),
      ],
    },
    resolve: {
      ...config.resolve,
      plugins: [
        ...config.resolve.plugins,
        ...vueWebpackPlugins,
      ],
    },
  }),
}
