import {css} from '@emotion/react';

export const baseStyle = css({
  '&:has(> span > svg)': {
    display: 'inline-flex',
    alignItems: 'center'
  },
  '& > span': {
    '&:has(> svg)': {
      display: 'inline-flex'
    }
  }
});
