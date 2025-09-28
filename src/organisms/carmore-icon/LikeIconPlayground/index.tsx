import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React, { useState } from 'react';

import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';

type LikeIconVariantsType = 'fill' | 'solid' | 'active';
const LIKE_ICON_VARIANTS_LIST: LikeIconVariantsType[] = ['fill', 'solid', 'active'];

const LikeIconPlayground = () => {
  const [variantsIndex, setVariantsIndex] = useState<number>(0);

  const iconVariants = LIKE_ICON_VARIANTS_LIST[variantsIndex];
  const handleClick = () => {
    setVariantsIndex((prev) => (prev + 1) % LIKE_ICON_VARIANTS_LIST.length);
  };

  return (
    <Box>
      <Flex fullWidth direction={'column'} gap={'0.25rem'} alignItems={'center'} justifyContent={'center'}>
        <CarmoreIcon icon={'like'} width={80} height={80} variants={iconVariants} onClick={handleClick} />
        <p>{iconVariants.toString()}</p>
      </Flex>
    </Box>
  );
};

export default LikeIconPlayground;
