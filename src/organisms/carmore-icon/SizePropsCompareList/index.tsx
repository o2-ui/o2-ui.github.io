import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import { ICON_ITEM_MAP } from '@/contants/carmore-icon';
import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

interface Props {
  icon: IconType | string;
  sizes: (string | number)[];
}

const SizePropsCompareList = (props: Props) => {
  const { icon, sizes } = props;

  const { icon: iconName } = ICON_ITEM_MAP[icon];

  return (
    <PropsListWrapper>
      {sizes.map((size) => {
        return <CarmoreIcon icon={iconName} width={size} height={size} />;
      })}
    </PropsListWrapper>
  );
};

export default SizePropsCompareList;
