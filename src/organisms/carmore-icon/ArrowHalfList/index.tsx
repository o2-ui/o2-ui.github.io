import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

interface Props {
  icon: Extract<IconType, 'arrow-left' | 'arrow-right'>;
}

const ArrowHalfList = (props: Props) => {
  const { icon } = props;

  return (
    <PropsListWrapper>
      <CarmoreIcon className={style.layout} icon={icon} width={60} height={60} />
      <CarmoreIcon className={style.layout} icon={icon} half width={30} height={60} />
    </PropsListWrapper>
  );
};

export default ArrowHalfList;
