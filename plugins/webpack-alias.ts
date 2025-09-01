import type { Plugin } from '@docusaurus/types';

import path from 'path';

function webpackAliasPlugin(): Plugin {
  return {
    name: 'webpack-alias-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../src'),
          },
        },
      };
    },
  };
}

export default webpackAliasPlugin;
