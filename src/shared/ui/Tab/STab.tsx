import {forwardRef} from 'react';
import {Tabs, type TabsProps} from 'antd';
import {baseStyles} from './styles.ts';

export const STabs = forwardRef<unknown, TabsProps>((props) => {
  return (
    <Tabs css={baseStyles} {...props} />
  );
});
