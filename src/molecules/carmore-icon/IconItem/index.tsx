import type { ComponentProps } from 'react';

import Link from '@docusaurus/Link';
import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import Box from '@/atoms/Box';

interface Props {
  icon: ComponentProps<typeof CarmoreIcon>['icon'];
  href?: string;
}

const IconItem = (props: Props) => {
  const { href = '', icon } = props;

  return (
    <Link className={style.link} href={href}>
      <Box className={style.box} padding={'1rem'} bgColor={'gray-10-a-50'} hoverEffect>
        <CarmoreIcon width={65} height={65} icon={icon} />
        <p className={style.iconLabel}>{icon.toString()}</p>
      </Box>
    </Link>
  );
};
export default IconItem;
