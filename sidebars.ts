import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'carmore-icon',
      collapsible: true,
      collapsed: false,
      items: [
        'carmore-icon/overview',
        'carmore-icon/installation',
        'carmore-icon/usage',
        {
          type: 'category',
          label: 'Icons',
          collapsible: true,
          collapsed: false,
          items: [
            'carmore-icon/icons/arrow-double-down',
            'carmore-icon/icons/arrow-double-up',
            'carmore-icon/icons/arrow-down',
            'carmore-icon/icons/arrow-up',
            'carmore-icon/icons/back-btn',
            'carmore-icon/icons/cancel',
            'carmore-icon/icons/chat',
            'carmore-icon/icons/check',
            'carmore-icon/icons/copy',
            'carmore-icon/icons/copy-link',
            'carmore-icon/icons/cs',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
