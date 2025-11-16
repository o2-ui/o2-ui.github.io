import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import { ICON_ITEM_MAP } from '@/contants/carmore-icon';
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
  icon: IconType | string;
  colors: ColorType[];
}

const ColorPropsCompareList = (props: Props) => {
  const { icon, colors } = props;

  const { icon: iconName } = ICON_ITEM_MAP[icon];

  return (
    <PropsListWrapper>
      {colors.map((color) => {
        const colorClass = getColorClass(color);
        return <CarmoreIcon className={colorClass} icon={iconName} width={60} height={60} />;
      })}
    </PropsListWrapper>
  );
};

export default ColorPropsCompareList;
