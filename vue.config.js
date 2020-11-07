/* eslint-disable @typescript-eslint/no-var-requires */
const tsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  productionSourceMap: false,
  css: {
    sourceMap: true,
  },
  chainWebpack(config) {
    config.resolve.alias.delete('@');
    config.resolve
      .plugin('tsconfig-paths')
      .use(tsconfigPathsPlugin);
  },
};
