import type { ComponentProps } from 'react';

import React from 'react';

import style from './style.module.css';

import { mergeClassNames } from '@/utils/string-helper';

type ThemeType = 'default' | 'primary' | 'secondary';

const getThemeClass = (theme: ThemeType) => {
  switch (theme) {
    case 'primary':
      return style['theme-primary'];
    case 'secondary':
      return style['theme-secondary'];
    case 'default':
    default:
      return style['theme-default'];
  }
};

interface Props extends ComponentProps<'div'> {
  label: string;
  theme?: ThemeType;
}

const Badge = (props: Props) => {
  const { className, label, theme = 'default', ...rest } = props;

  const themeClass = getThemeClass(theme);

  return (
    <div className={mergeClassNames(style.layout, themeClass, className)} {...rest}>
      <p className={style.label}>{label}</p>
    </div>
  );
};

export default Badge;
