import type { ComponentProps } from 'react';

import Link from '@docusaurus/Link';
import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import Badge from '@/atoms/Badge';
import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';
import { CAREMORE_ICON_LATEST_VERSION } from '@/contants/version';

interface Props {
  icon: ComponentProps<typeof CarmoreIcon>['icon'];
  href?: string;
  releasedVersion?: string;
  updatedVersion?: string;
}

const IconItem = (props: Props) => {
  const { icon, releasedVersion = '', updatedVersion = '', href = '' } = props;

  const isLatestReleased = releasedVersion.includes(CAREMORE_ICON_LATEST_VERSION);
  const isLatestUpdated = updatedVersion.includes(CAREMORE_ICON_LATEST_VERSION);

  return (
    <Link className={style.link} href={href}>
      <Box className={style.box} padding={'1rem'} bgColor={'gray-10-a-50'} hoverEffect>
        <Flex className={style['badge-container']} alignItems={'center'}>
          {isLatestReleased && <Badge label={'NEW'} theme={'primary'} />}
          {isLatestUpdated && <Badge label={'UPDATE'} theme={'secondary'} />}
        </Flex>
        <CarmoreIcon width={65} height={65} icon={icon} />
        <p className={style['icon-label']}>{icon.toString()}</p>
      </Box>
    </Link>
  );
};
export default IconItem;
