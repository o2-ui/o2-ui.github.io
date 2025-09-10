import type { ComponentProps } from 'react';

import React from 'react';

import style from './style.module.css';

import { mergeClassNames } from '@/utils/string-helper';

interface Props extends ComponentProps<'div'> {
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const OverviewBox = (props: Props) => {
  const { children, className, fullWidth, fullHeight, ...rest } = props;

  const widthClass = fullWidth ? style['widthFull'] : '';
  const heightClass = fullHeight ? style['heightFull'] : '';

  return (
    <div className={mergeClassNames(style.layout, widthClass, heightClass, className)} {...rest}>
      {children}
    </div>
  );
};

export default OverviewBox;
