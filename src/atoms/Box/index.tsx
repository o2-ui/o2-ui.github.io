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

type BgColorType =
  | 'transparent'
  | 'gray-10'
  | 'gray-10-a-10'
  | 'gray-10-a-20'
  | 'gray-10-a-30'
  | 'gray-10-a-40'
  | 'gray-10-a-50'
  | 'gray-10-a-60'
  | 'gray-10-a-70'
  | 'gray-10-a-80'
  | 'gray-10-a-90'
  | 'gray-20'
  | 'gray-30'
  | 'gray-40'
  | 'gray-50'
  | 'light-gray-10'
  | 'light-gray-30'
  | 'red-10'
  | 'red-20'
  | 'red-30'
  | 'red-40'
  | 'red-50'
  | 'red-60'
  | 'red-70'
  | 'red-80'
  | 'red-90';

const getBgColorClass = (bgColor: BgColorType) => {
  switch (bgColor) {
    case 'gray-10':
      return style['bgGray10'];
    case 'gray-10-a-10':
      return style['bgGray10Alpha10'];
    case 'gray-10-a-20':
      return style['bgGray10Alpha20'];
    case 'gray-10-a-30':
      return style['bgGray10Alpha30'];
    case 'gray-10-a-40':
      return style['bgGray10Alpha40'];
    case 'gray-10-a-50':
      return style['bgGray10Alpha50'];
    case 'gray-10-a-60':
      return style['bgGray10Alpha60'];
    case 'gray-10-a-70':
      return style['bgGray10Alpha70'];
    case 'gray-10-a-80':
      return style['bgGray10Alpha80'];
    case 'gray-10-a-90':
      return style['bgGray10Alpha90'];
    case 'gray-20':
      return style['bgGray20'];
    case 'gray-30':
      return style['bgGray30'];
    case 'gray-40':
      return style['bgGray40'];
    case 'gray-50':
      return style['bgGray50'];
    case 'light-gray-10':
      return style['bgLightGray10'];
    case 'light-gray-30':
      return style['bgLightGray30'];
    case 'red-10':
      return style['bg-red-10'];
    case 'red-20':
      return style['bg-red-20'];
    case 'red-30':
      return style['bg-red-30'];
    case 'red-40':
      return style['bg-red-40'];
    case 'red-50':
      return style['bg-red-50'];
    case 'red-60':
      return style['bg-red-60'];
    case 'red-70':
      return style['bg-red-70'];
    case 'red-80':
      return style['bg-red-80'];
    case 'red-90':
      return style['bg-red-90'];
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
