import {forwardRef} from 'react';
import type {BasicProps} from 'antd/es/layout/layout';
import {StyledLayout} from './styles.ts';

export const Layout = forwardRef<HTMLElement, BasicProps>((props, ref) => {
  return (
    <StyledLayout ref={ref} {...props}/>
  )
})
