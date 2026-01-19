import {css} from '@emotion/react';

export const baseStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '& span': {
    '&.ant-typography': {
      fontSize: 12,
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    }
  }
});
