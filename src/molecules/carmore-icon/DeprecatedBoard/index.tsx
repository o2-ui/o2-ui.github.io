import type { IconType } from '@/types/carmore-icon';

import type { ReactElement } from 'react';

import { CarmoreIcon } from '@o2-ui/carmore-icon';
import React from 'react';

import style from './style.module.css';

import Box from '@/atoms/Box';
import Flex from '@/atoms/Flex';
import { ICON_ITEM_MAP } from '@/contants/carmore-icon';
import { checkTruthy } from '@/utils/type-checker';

interface Props {
  title: string;
  description: string;
  altIcon: IconType;
}

const DeprecatedBoard = (props: Props): ReactElement => {
  const { title, description, altIcon } = props;

  const altIconLink = `/docs/${ICON_ITEM_MAP[altIcon].detailPath}`;
  const altIconName = `${ICON_ITEM_MAP[altIcon].icon}`;

  return (
    <Box className={style['layout']} fullWidth bgColor={'red-30'} padding={'1rem'}>
      <Flex fullWidth gap={'0.25rem'} alignItems={'center'}>
        <CarmoreIcon className={style['icon']} width={'1.5rem'} height={'2rem'} icon={'error-info'} />
        <h3 className={style['title-text']}>{title}</h3>
      </Flex>
      <p className={style['description-text']}>{description}</p>
      {checkTruthy(altIconLink) && (
        <a className={'link'} href={altIconLink}>
          <b>{altIconName}</b>(<i>{altIconLink}</i>)
        </a>
      )}
    </Box>
  );
};

export default DeprecatedBoard;
