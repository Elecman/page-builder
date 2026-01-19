import {forwardRef} from 'react';
import {Radio} from 'antd';
import {RadioRef} from 'antd/es/radio';
import type {RadioButtonProps} from 'antd/es/radio/radioButton';
import {baseStyle} from './styles.ts';

export const SRadioButton = forwardRef<RadioRef, RadioButtonProps>((props, ref) => {
  return (
    <Radio.Button css={baseStyle} ref={ref} {...props} />
  );
});
