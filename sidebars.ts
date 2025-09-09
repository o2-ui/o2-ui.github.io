import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'carmore-icon',
      collapsible: true,
      collapsed: false,
      items: ['carmore-icon/overview', 'carmore-icon/installation'],
    },
  ],
};

export default sidebars;
