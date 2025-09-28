import type { ComponentProps } from 'react';

import React from 'react';

import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';

interface Props extends ComponentProps<'div'> {
  gap?: ComponentProps<typeof Flex>['gap'];
}

const PropsListWrapper = (props: Props) => {
  const { gap = '3rem', children } = props;

  return (
    <Box bgColor={'gray-10'}>
      <Flex direction={'row'} gap={gap} alignItems={'center'} justifyContent={'center'}>
        {children}
      </Flex>
    </Box>
  );
};

export default PropsListWrapper;
