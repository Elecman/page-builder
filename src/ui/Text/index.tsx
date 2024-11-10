import {Typography} from 'antd';
import type {TextProps} from 'antd/es/typography/Text.js';
import {useNode} from '@craftjs/core';

export const Text = (props: TextProps) => {
  const {connectors: {connect, drag}} = useNode();
  return <Typography.Text style={{margin: 0}} ref={ref => {
    if (ref) {
      connect(drag(ref));
    }
  }} {...props} />;
};
