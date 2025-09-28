import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import PropsListWrapper from '@/molecules/carmore-icon/PropsListWrapper';

type ColorType = 'red' | 'orange' | 'green' | 'blue' | 'purple';

const getColorClass = (color: ColorType) => {
  switch (color) {
    case 'red':
      return style.colorRed;
    case 'orange':
      return style.colorOrange;
    case 'green':
      return style.colorGreen;
    case 'blue':
      return style.colorBlue;
    case 'purple':
      return style.colorPurple;
    default:
      return '';
  }
};

interface Props {
  icon: IconType;
  colors: ColorType[];
}

const ColorPropsCompareList = (props: Props) => {
  const { icon, colors } = props;
  return (
    <PropsListWrapper>
      {colors.map((color) => {
        const colorClass = getColorClass(color);
        return <CarmoreIcon className={colorClass} icon={icon} width={60} height={60} />;
      })}
    </PropsListWrapper>
  );
};

export default ColorPropsCompareList;
