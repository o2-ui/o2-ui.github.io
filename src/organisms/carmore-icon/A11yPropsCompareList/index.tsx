import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import { ICON_ITEM_MAP } from '@/contants/carmore-icon';
import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

interface Props {
  icon: IconType | string;
  ariaLabels: (undefined | string)[];
}

const A11yPropsCompareList = (props: Props) => {
  const { icon, ariaLabels } = props;

  const { icon: iconName } = ICON_ITEM_MAP[icon];

  return (
    <PropsListWrapper>
      {ariaLabels.map((ariaLabel) => {
        return <CarmoreIcon icon={iconName} width={60} height={60} aria-label={ariaLabel} />;
      })}
    </PropsListWrapper>
  );
};

export default A11yPropsCompareList;
