import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

interface Props {
  icon: IconType;
  sizes: (string | number)[];
}

const SizePropsCompareList = (props: Props) => {
  const { icon, sizes } = props;
  return (
    <PropsListWrapper>
      {sizes.map((size) => {
        return <CarmoreIcon icon={icon} width={size} height={size} />;
      })}
    </PropsListWrapper>
  );
};

export default SizePropsCompareList;
