import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

import { ICON_ITEM_LIST } from './src/contants/carmore-icon';

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
          items: ICON_ITEM_LIST.map((item) => item.detailPath),
        },
      ],
    },
  ],
};

export default sidebars;
