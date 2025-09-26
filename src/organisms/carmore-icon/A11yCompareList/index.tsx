import type { IconType } from '@/types/carmore-icon';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';

interface Props {
  icon: IconType;
  ariaLabels: (undefined | string)[];
}

const A11yCompareList = (props: Props) => {
  const { icon, ariaLabels } = props;
  return (
    <Box>
      <Flex direction={'row'} gap={'3rem'} alignItems={'center'} justifyContent={'center'}>
        {ariaLabels.map((ariaLabel) => {
          return <CarmoreIcon icon={icon} width={60} height={60} aria-label={ariaLabel} />;
        })}
      </Flex>
    </Box>
  );
};

export default A11yCompareList;
