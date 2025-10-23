import type { ComponentProps } from 'react';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';
import { ICON_ITEM_MAP } from '@/contants/carmore-icon';

interface Props {
  icon: ComponentProps<typeof CarmoreIcon>['icon'];
}

const IconProfile = (props: Props) => {
  const { icon } = props;

  const { releasedVersion } = ICON_ITEM_MAP[icon];

  return (
    <Flex fullWidth alignItems={'flex-end'} direction={'column'} gap={'0.5rem'}>
      <i className={style['version-label']}>released version: {releasedVersion}</i>
      <Box fullWidth padding={'4rem'} bgColor={'gray-10'}>
        <Flex fullWidth alignItems={'center'} justifyContent={'center'}>
          <CarmoreIcon icon={icon} width={'15rem'} height={'15rem'} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default IconProfile;
