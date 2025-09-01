import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'react-icon',
      collapsible: true,
      collapsed: false,
      items: ['react-icon/overview', 'react-icon/installation'],
    },
  ],
};

export default sidebars;
