import type { ComponentProps, ReactNode } from 'react';

import React from 'react';

import style from './style.module.css';

import { mergeClassNames } from '@/utils/string-helper';

type GapType = '0.125rem' | '0.25rem' | '0.5rem' | '0.625rem' | '0.75rem' | '1rem' | '1.25rem' | '1.5rem' | '1.75rem' | '2rem' | '2.5rem' | '3rem' | '4rem';

const getGapClass = (gap?: GapType) => {
  switch (gap) {
    case '0.125rem':
      return style['gap0_125rem'];
    case '0.25rem':
      return style['gap0_25rem'];
    case '0.5rem':
      return style['gap0_5rem'];
    case '0.625rem':
      return style['gap0_625rem'];
    case '0.75rem':
      return style['gap0_75rem'];
    case '1rem':
      return style['gap1rem'];
    case '1.25rem':
      return style['gap1_25rem'];
    case '1.5rem':
      return style['gap1_5rem'];
    case '1.75rem':
      return style['gap1_75rem'];
    case '2rem':
      return style['gap2rem'];
    case '2.5rem':
      return style['gap2_5rem'];
    case '3rem':
      return style['gap3rem'];
    case '4rem':
      return style['gap3rem'];
    default:
      return '';
  }
};

type AlignItemsType = 'flex-start' | 'center' | 'flex-end';

const getAlignItemsClass = (alignItems?: AlignItemsType) => {
  switch (alignItems) {
    case 'flex-start':
      return style['alignItemsStart'];
    case 'center':
      return style['alignItemsCenter'];
    case 'flex-end':
      return style['alignItemsEnd'];
    default:
      return '';
  }
};

type JustifyContentType = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';

const getJustifyContentClass = (justifyContent?: JustifyContentType) => {
  switch (justifyContent) {
    case 'flex-start':
      return style['justifyContentStart'];
    case 'center':
      return style['justifyContentCenter'];
    case 'flex-end':
      return style['justifyContentEnd'];
    case 'space-between':
      return style['justifyContentBetween'];
    case 'space-around':
      return style['justifyContentAround'];
    default:
      return '';
  }
};

type WrapType = 'wrap' | 'nowrap' | 'wrap-reverse';

const getWrapClass = (wrap?: WrapType) => {
  switch (wrap) {
    case 'wrap':
      return style['flexWrap'];
    case 'nowrap':
      return style['flexNoWrap'];
    case 'wrap-reverse':
      return style['flexWrapReverse'];
    default:
      return '';
  }
};

type DirectionType = 'row' | 'column';

const getDirectionClass = (direction?: DirectionType) => {
  switch (direction) {
    case 'row':
      return style['flexRow'];
    case 'column':
      return style['flexColumn'];
    default:
      return '';
  }
};

interface Props extends ComponentProps<'div'> {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  fullHeight?: boolean;
  alignItems?: AlignItemsType;
  justifyContent?: JustifyContentType;
  direction?: DirectionType;
  gap?: GapType;
  wrap?: WrapType;
}

const Flex = (props: Props) => {
  const { className, children, alignItems, justifyContent, direction, fullHeight = false, fullWidth = false, gap, wrap, ...rest } = props;

  const widthClass = fullWidth ? style['widthFull'] : '';
  const heightClass = fullHeight ? style['heightFull'] : '';
  const directionClass = getDirectionClass(direction);
  const alignItemsClass = getAlignItemsClass(alignItems);
  const justifyContentClass = getJustifyContentClass(justifyContent);
  const gapClass = getGapClass(gap);
  const wrapClass = getWrapClass(wrap);

  return (
    <div className={mergeClassNames(style.layout, widthClass, heightClass, directionClass, alignItemsClass, justifyContentClass, gapClass, wrapClass, className)} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
