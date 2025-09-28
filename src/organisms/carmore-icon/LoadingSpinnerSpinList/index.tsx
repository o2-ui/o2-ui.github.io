import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

const LoadingSpinnerSpinList = () => {
  return (
    <PropsListWrapper>
      <CarmoreIcon icon={'loading-spinner'} width={60} height={60} />
      <CarmoreIcon icon={'loading-spinner'} spin={false} width={60} height={60} />
    </PropsListWrapper>
  );
};

export default LoadingSpinnerSpinList;
