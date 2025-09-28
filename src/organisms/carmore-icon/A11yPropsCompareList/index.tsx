import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

interface Props {
  icon: IconType;
  ariaLabels: (undefined | string)[];
}

const A11yPropsCompareList = (props: Props) => {
  const { icon, ariaLabels } = props;
  return (
    <PropsListWrapper>
      {ariaLabels.map((ariaLabel) => {
        return <CarmoreIcon icon={icon} width={60} height={60} aria-label={ariaLabel} />;
      })}
    </PropsListWrapper>
  );
};

export default A11yPropsCompareList;
