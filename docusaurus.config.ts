import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

import webpackAliasPlugin from './plugins/webpack-alias';

const config: Config = {
  title: 'o2-ui Docs',
  tagline: 'UI Components Documentation',
  favicon: 'img/favicon.ico',

  // GitHub Pages URL
  url: 'https://o2-ui.github.io',
  baseUrl: '/',

  // GitHub 설정
  organizationName: 'o2-ui', // GitHub 사용자 또는 조직명
  projectName: 'o2-ui.github.io',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  themeConfig: {
    navbar: {
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.css'), require.resolve('@o2-ui/carmore-icon/index.css')],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [webpackAliasPlugin],
};

export default config;
