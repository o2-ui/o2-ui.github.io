import type { ComponentProps } from 'react';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';

interface Props {
  icon: ComponentProps<typeof CarmoreIcon>['icon'];
}

const IconProfile = (props: Props) => {
  const { icon } = props;

  return (
    <Box fullWidth padding={'4rem'} bgColor={'gray-10'}>
      <Flex fullWidth alignItems={'center'} justifyContent={'center'}>
        <CarmoreIcon icon={icon} width={'15rem'} height={'15rem'} />
      </Flex>
    </Box>
  );
};

export default IconProfile;
