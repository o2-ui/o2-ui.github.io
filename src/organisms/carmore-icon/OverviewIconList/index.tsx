import type { IconType } from '@/types/carmore-icon';

import React from 'react';

import Flex from '@/atoms/Flex';
import IconItem from '@/molecules/carmore-icon/IconItem';

interface IIconItem {
  icon: IconType;
  releasedVersion: string;
}

const ICON_LIST: IIconItem[] = [
  { icon: 'arrow-double-down', releasedVersion: '1.0.0' },
  { icon: 'arrow-double-up', releasedVersion: '1.0.0' },
  { icon: 'arrow-down', releasedVersion: '1.0.0' },
  { icon: 'arrow-up', releasedVersion: '1.0.0' },
  { icon: 'back-btn', releasedVersion: '1.0.0' },
  { icon: 'cancel', releasedVersion: '1.0.0' },
  { icon: 'chat', releasedVersion: '1.0.0' },
  { icon: 'check', releasedVersion: '1.0.0' },
  { icon: 'copy', releasedVersion: '1.0.0' },
  { icon: 'copy-link', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ae', releasedVersion: '1.0.0' },
  { icon: 'country-flag-al', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ar', releasedVersion: '1.0.0' },
  { icon: 'country-flag-at', releasedVersion: '1.0.0' },
  { icon: 'country-flag-au', releasedVersion: '1.0.0' },
  { icon: 'country-flag-be', releasedVersion: '1.0.0' },
  { icon: 'country-flag-bg', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ca', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ch', releasedVersion: '1.0.0' },
  { icon: 'country-flag-cl', releasedVersion: '1.0.0' },
  { icon: 'country-flag-cr', releasedVersion: '1.0.0' },
  { icon: 'country-flag-cy', releasedVersion: '1.0.0' },
  { icon: 'country-flag-cz', releasedVersion: '1.0.0' },
  { icon: 'country-flag-de', releasedVersion: '1.0.0' },
  { icon: 'country-flag-dk', releasedVersion: '1.0.0' },
  { icon: 'country-flag-do', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ec', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ee', releasedVersion: '1.0.0' },
  { icon: 'country-flag-eg', releasedVersion: '1.0.0' },
  { icon: 'country-flag-es', releasedVersion: '1.0.0' },
  { icon: 'country-flag-fi', releasedVersion: '1.0.0' },
  { icon: 'country-flag-fj', releasedVersion: '1.0.0' },
  { icon: 'country-flag-fr', releasedVersion: '1.0.0' },
  { icon: 'country-flag-gb', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ge', releasedVersion: '1.0.0' },
  { icon: 'country-flag-gr', releasedVersion: '1.0.0' },
  { icon: 'country-flag-hr', releasedVersion: '1.0.0' },
  { icon: 'country-flag-hu', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ie', releasedVersion: '1.0.0' },
  { icon: 'country-flag-il', releasedVersion: '1.0.0' },
  { icon: 'country-flag-in', releasedVersion: '1.0.0' },
  { icon: 'country-flag-is', releasedVersion: '1.0.0' },
  { icon: 'country-flag-it', releasedVersion: '1.0.0' },
  { icon: 'country-flag-jm', releasedVersion: '1.0.0' },
  { icon: 'country-flag-jo', releasedVersion: '1.0.0' },
  { icon: 'country-flag-jp', releasedVersion: '1.0.0' },
  { icon: 'country-flag-kw', releasedVersion: '1.0.0' },
  { icon: 'country-flag-la', releasedVersion: '1.0.0' },
  { icon: 'country-flag-lk', releasedVersion: '1.0.0' },
  { icon: 'country-flag-lt', releasedVersion: '1.0.0' },
  { icon: 'country-flag-lu', releasedVersion: '1.0.0' },
  { icon: 'country-flag-lv', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ma', releasedVersion: '1.0.0' },
  { icon: 'country-flag-me', releasedVersion: '1.0.0' },
  { icon: 'country-flag-mt', releasedVersion: '1.0.0' },
  { icon: 'country-flag-mu', releasedVersion: '1.0.0' },
  { icon: 'country-flag-mx', releasedVersion: '1.0.0' },
  { icon: 'country-flag-my', releasedVersion: '1.0.0' },
  { icon: 'country-flag-nl', releasedVersion: '1.0.0' },
  { icon: 'country-flag-no', releasedVersion: '1.0.0' },
  { icon: 'country-flag-nz', releasedVersion: '1.0.0' },
  { icon: 'country-flag-pa', releasedVersion: '1.0.0' },
  { icon: 'country-flag-pe', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ph', releasedVersion: '1.0.0' },
  { icon: 'country-flag-pl', releasedVersion: '1.0.0' },
  { icon: 'country-flag-pt', releasedVersion: '1.0.0' },
  { icon: 'country-flag-py', releasedVersion: '1.0.0' },
  { icon: 'country-flag-qa', releasedVersion: '1.0.0' },
  { icon: 'country-flag-ro', releasedVersion: '1.0.0' },
  { icon: 'country-flag-rs', releasedVersion: '1.0.0' },
  { icon: 'country-flag-sa', releasedVersion: '1.0.0' },
  { icon: 'country-flag-se', releasedVersion: '1.0.0' },
  { icon: 'country-flag-sg', releasedVersion: '1.0.0' },
  { icon: 'country-flag-si', releasedVersion: '1.0.0' },
  { icon: 'country-flag-sk', releasedVersion: '1.0.0' },
  { icon: 'country-flag-th', releasedVersion: '1.0.0' },
  { icon: 'country-flag-tr', releasedVersion: '1.0.0' },
  { icon: 'country-flag-tw', releasedVersion: '1.0.0' },
  { icon: 'country-flag-us', releasedVersion: '1.0.0' },
  { icon: 'country-flag-vn', releasedVersion: '1.0.0' },
  { icon: 'country-flag-za', releasedVersion: '1.0.0' },
  { icon: 'cs', releasedVersion: '1.0.0' },
  { icon: 'download', releasedVersion: '1.0.0' },
  { icon: 'like', releasedVersion: '1.0.0' },
  { icon: 'loading-spinner', releasedVersion: '1.0.0' },
  { icon: 'nowhere', releasedVersion: '1.0.0' },
  { icon: 'out-link', releasedVersion: '1.0.0' },
  { icon: 'pin-map', releasedVersion: '1.0.0' },
  { icon: 'refresh', releasedVersion: '1.0.0' },
  { icon: 'reply', releasedVersion: '1.0.0' },
  { icon: 'search', releasedVersion: '1.0.0' },
  { icon: 'setting', releasedVersion: '1.0.0' },
  { icon: 'share', releasedVersion: '1.0.0' },
  { icon: 'stepper-minus', releasedVersion: '1.0.0' },
  { icon: 'stepper-plus', releasedVersion: '1.0.0' },
  { icon: 'switch-arrow', releasedVersion: '1.0.0' },
  { icon: 'thumb-up', releasedVersion: '1.0.0' },
  { icon: 'user', releasedVersion: '1.0.0' },
];

const OverviewIconList = () => {
  return (
    <Flex fullWidth wrap={'wrap'} gap={'2rem'}>
      {ICON_LIST.map(({ icon, releasedVersion }) => {
        return <IconItem icon={icon} version={releasedVersion} href={`/docs/carmore-icon/icons/${icon}`} />;
      })}
    </Flex>
  );
};

export default OverviewIconList;
