import React from 'react';

import Flex from '@/atoms/Flex';
import { ICON_ITEM_LIST } from '@/contants/carmore-icon';
import IconItem from '@/molecules/carmore-icon/IconItem';

const OverviewIconList = () => {
  return (
    <Flex fullWidth wrap={'wrap'} gap={'2rem'}>
      {ICON_ITEM_LIST.map((item) => {
        const { icon, releasedVersion, updatedVersion, detailPath } = item;
        return <IconItem icon={icon} releasedVersion={releasedVersion} updatedVersion={updatedVersion} href={`/docs/${detailPath}`} />;
      })}
    </Flex>
  );
};

export default OverviewIconList;
