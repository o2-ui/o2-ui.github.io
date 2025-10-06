import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

interface Props {
  icon: Extract<IconType, 'arrow-down' | 'arrow-left' | 'arrow-right' | 'arrow-up'>;
}

const ArrowThinList = (props: Props) => {
  const { icon } = props;

  return (
    <PropsListWrapper>
      <CarmoreIcon icon={icon} width={60} height={60} />
      <CarmoreIcon icon={icon} thin width={60} height={60} />
    </PropsListWrapper>
  );
};

export default ArrowThinList;
