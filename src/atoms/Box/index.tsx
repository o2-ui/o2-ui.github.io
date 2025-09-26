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

interface Props extends ComponentProps<'div'> {
  padding?: PaddingType;
  fullWidth?: boolean;
  fullHeight?: boolean;
  hoverEffect?: boolean;
}

const Box = (props: Props) => {
  const { children, className, padding = '2rem', fullHeight = false, fullWidth = false, hoverEffect = false, ...rest } = props;

  const widthClass = fullWidth ? style['widthFull'] : '';
  const heightClass = fullHeight ? style['heightFull'] : '';
  const hoverClass = hoverEffect ? style.hover : '';
  const paddingClass = getPaddingClass(padding);

  return (
    <div className={mergeClassNames(style.layout, paddingClass, widthClass, heightClass, hoverClass, className)} {...rest}>
      {children}
    </div>
  );
};

export default Box;
