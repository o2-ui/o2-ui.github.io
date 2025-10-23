import React from 'react';

import Box from '@/atoms/Box';

interface ILog {
  version: string;
  content?: string;
}

interface Props {
  logList: ILog[];
}

const UpdateLog = (props: Props) => {
  const { logList } = props;

  return (
    <Box fullWidth bgColor={'gray-10-a-50'} padding={'1rem'}>
      <ul>
        {logList.map((log) => {
          const { version, content = '-' } = log;
          return (
            <li key={version} aria-labelledby={version}>
              <b>{version}</b>: <span id={version}>{content}</span>
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default UpdateLog;
