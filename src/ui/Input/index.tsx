import {forwardRef} from 'react';
import {Input, InputRef} from 'antd';
import type {InputProps} from 'antd/es/input/Input';
import {baseStyle} from './styles.ts';

export const SInput = forwardRef<InputRef, InputProps>((props, ref) => {
  return <Input css={baseStyle} ref={ref} {...props} />;
});
