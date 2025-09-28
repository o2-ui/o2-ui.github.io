import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

const ActiveLikeIconList = () => {
  return (
    <PropsListWrapper>
      <CarmoreIcon className={style['like-icon-1']} icon={'like'} variants={'active'} width={25} height={25} />
      <CarmoreIcon className={style['like-icon-2']} icon={'like'} variants={'active'} width={25} height={25} />
    </PropsListWrapper>
  );
};

export default ActiveLikeIconList;
