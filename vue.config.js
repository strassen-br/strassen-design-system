/* eslint-disable no-param-reassign */
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
    // These are some necessary steps changing the default webpack config of the Vue CLI
    // that need to be changed in order for Typescript based components to generate their
    // declaration (.d.ts) files.
    //
    // Discussed here https://github.com/vuejs/vue-cli/issues/1081
    if (process.env.NODE_ENV === 'production') {
      config.module.rule('ts').uses.delete('cache-loader');

      config.module
        .rule('ts')
        .use('ts-loader')
        .loader('ts-loader')
        .tap((opts) => {
          opts.transpileOnly = false;
          opts.happyPackMode = false;
          return opts;
        });
    }
  },
  parallel: false,
};
