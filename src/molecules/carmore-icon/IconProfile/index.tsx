import type { ComponentProps } from 'react';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';
import { ICON_ITEM_MAP } from '@/contants/carmore-icon';
import { checkTruthy } from '@/utils/type-checker';

interface Props {
  icon: ComponentProps<typeof CarmoreIcon>['icon'];
}

const IconProfile = (props: Props) => {
  const { icon } = props;

  const { icon: iconName, releasedVersion, deprecatedVersion } = ICON_ITEM_MAP[icon];

  return (
    <Flex fullWidth alignItems={'flex-end'} direction={'column'} gap={'0.5rem'}>
      <div>
        <p className={style['version-label']}>released version: {releasedVersion}</p>
        {checkTruthy(deprecatedVersion) && <p className={style['version-label']}>deprecated version: {deprecatedVersion}</p>}
      </div>
      <Box fullWidth padding={'4rem'} bgColor={'gray-10'}>
        <Flex fullWidth alignItems={'center'} justifyContent={'center'}>
          <CarmoreIcon icon={iconName} width={'15rem'} height={'15rem'} />
        </Flex>
      </Box>
    </Flex>
  );
};

export default IconProfile;
