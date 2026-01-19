import {css} from '@emotion/react';

export const baseStyle = css({
  height: 32,
  display: 'flex',
  alignItems: 'center',
  padding: '4px 8px',
  borderBottom: '1px solid #f0f0f0',

  '& span': {
    fontSize: 11
  }
});
