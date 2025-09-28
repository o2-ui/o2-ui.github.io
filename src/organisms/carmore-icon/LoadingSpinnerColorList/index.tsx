import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

const LoadingSpinnerColorList = () => {
  return (
    <PropsListWrapper>
      <CarmoreIcon className={style['loading-spinner-icon-1']} icon={'loading-spinner'} width={60} height={60} />
      <CarmoreIcon className={style['loading-spinner-icon-2']} icon={'loading-spinner'} width={60} height={60} />
    </PropsListWrapper>
  );
};

export default LoadingSpinnerColorList;
