import type { IconType } from '@/types/carmore-icon';

import Link from '@docusaurus/Link';
import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import Badge from '@/atoms/Badge';
import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';
import { CAREMORE_ICON_LATEST_VERSION } from '@/contants/version';
import { checkUndefined } from '@/utils/type-checker';
import { checkIsPreviousVersion, checkIsSameVersion } from '@/utils/version-helper';

interface Props {
  icon: IconType;
  label: string;
  releasedVersion?: string;
  updatedVersion?: string;
  deprecatedVersion?: string;
  href?: string;
}

const IconItem = (props: Props) => {
  const { icon, label, releasedVersion, updatedVersion, deprecatedVersion, href = '' } = props;

  const isLatestReleased = !checkUndefined(releasedVersion) && checkIsSameVersion(releasedVersion, CAREMORE_ICON_LATEST_VERSION);
  const isLatestUpdated = !checkUndefined(updatedVersion) && checkIsSameVersion(updatedVersion, CAREMORE_ICON_LATEST_VERSION);
  const isDeprecated =
    !checkUndefined(deprecatedVersion) && (checkIsSameVersion(deprecatedVersion, CAREMORE_ICON_LATEST_VERSION) || checkIsPreviousVersion(deprecatedVersion, CAREMORE_ICON_LATEST_VERSION));

  return (
    <Link className={style.link} href={href}>
      <Box className={style.box} padding={'1rem'} bgColor={isDeprecated ? 'gray-30' : 'gray-10-a-50'} hoverEffect={!isDeprecated}>
        <Flex className={style['badge-container']} alignItems={'center'}>
          {isLatestReleased && <Badge label={'NEW'} theme={'primary'} />}
          {isLatestUpdated && <Badge label={'UPDATE'} theme={'secondary'} />}
          {isDeprecated && <Badge label={'DEPRECATED'} theme={'red'} />}
        </Flex>
        <CarmoreIcon width={65} height={65} icon={icon} />
        <p className={style['icon-label']}>{label}</p>
      </Box>
    </Link>
  );
};
export default IconItem;
