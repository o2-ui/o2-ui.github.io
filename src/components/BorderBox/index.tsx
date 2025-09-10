import type { ComponentProps } from 'react';

import React from 'react';

import style from './style.module.css';

const BorderBox = (props: ComponentProps<'div'>) => {
  const { children, ...rest } = props;
  return (
    <div className={style.layout} {...rest}>
      {children}
    </div>
  );
};

export default BorderBox;
