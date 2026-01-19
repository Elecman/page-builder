import {forwardRef} from 'react';
import {Button} from 'antd';
import type {ButtonProps} from 'antd/es/button/button';
import {css} from '@emotion/react';
import {smStyle} from './styles.ts';


export const SButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, ref) => {
  return (
    <Button ref={ref} {...props} css={css([smStyle])} />
  );
});
