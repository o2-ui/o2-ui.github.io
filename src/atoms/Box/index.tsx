import type { ComponentProps } from 'react';

import React from 'react';

import style from './style.module.css';

import { mergeClassNames } from '@/utils/string-helper';

type PaddingType = '1rem' | '2rem' | '3rem' | '4rem';

const getPaddingClass = (padding?: PaddingType) => {
  switch (padding) {
    case '1rem':
      return style['padding1rem'];
    case '2rem':
      return style['padding2rem'];
    case '3rem':
      return style['padding3rem'];
    case '4rem':
      return style['padding4rem'];
    default:
      return '';
  }
};

type BgColorType = 'transparent' | 'gray-10' | 'gray-20' | 'light-gray-10' | 'light-gray-30';

const getBgColorClass = (bgColor: BgColorType) => {
  switch (bgColor) {
    case 'gray-10':
      return style['bgGray10'];
    case 'gray-20':
      return style['bgGray20'];
    case 'light-gray-10':
      return style['bgLightGray10'];
    case 'light-gray-30':
      return style['bgLightGray30'];
    case 'transparent':
    default:
      return style['bgTransparent'];
  }
};

interface Props extends ComponentProps<'div'> {
  padding?: PaddingType;
  bgColor?: BgColorType;
  fullWidth?: boolean;
  fullHeight?: boolean;
  hoverEffect?: boolean;
}

const Box = (props: Props) => {
  const { children, className, padding = '2rem', bgColor = 'transparent', fullHeight = false, fullWidth = false, hoverEffect = false, ...rest } = props;

  const widthClass = fullWidth ? style['widthFull'] : '';
  const heightClass = fullHeight ? style['heightFull'] : '';
  const hoverClass = hoverEffect ? style.hover : '';
  const paddingClass = getPaddingClass(padding);
  const bgColorClass = getBgColorClass(bgColor);

  return (
    <div className={mergeClassNames(style.layout, paddingClass, bgColorClass, widthClass, heightClass, hoverClass, className)} {...rest}>
      {children}
    </div>
  );
};

export default Box;
