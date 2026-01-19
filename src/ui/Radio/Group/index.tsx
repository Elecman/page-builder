import {type FC} from 'react';
import {Radio} from 'antd';
import type {RadioGroupProps} from 'antd/es/radio/interface';
import {baseStyle} from './styles.ts';
import {SRadioButton} from '../Button';

export const SRadioGroup: FC<RadioGroupProps> & {
  Button: typeof SRadioButton
} = (props) => {
  return (
    <Radio.Group css={baseStyle} {...props} />
  );
};

SRadioGroup.displayName = 'SRadioGroup';
SRadioGroup.Button = SRadioButton
