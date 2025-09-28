import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

const LikeIconVariantsList = () => {
  return (
    <PropsListWrapper>
      <CarmoreIcon icon={'like'} variants={'fill'} width={25} height={25} />
      <CarmoreIcon icon={'like'} variants={'solid'} width={25} height={25} />
      <CarmoreIcon icon={'like'} variants={'active'} width={25} height={25} />
    </PropsListWrapper>
  );
};

export default LikeIconVariantsList;
