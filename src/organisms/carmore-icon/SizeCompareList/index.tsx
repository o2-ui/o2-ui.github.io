import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';

interface Props {
  icon: IconType;
  sizes: (string | number)[];
}

const SizeCompareList = (props: Props) => {
  const { icon, sizes } = props;
  return (
    <Box>
      <Flex direction={'row'} gap={'3rem'} alignItems={'center'} justifyContent={'center'}>
        {sizes.map((size) => {
          return <CarmoreIcon icon={icon} width={size} height={size} />;
        })}
      </Flex>
    </Box>
  );
};

export default SizeCompareList;
