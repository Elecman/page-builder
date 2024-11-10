import {type FC, type PropsWithChildren} from 'react';
import {useEditor, Element} from '@craftjs/core';
import {Space, Typography} from 'antd';
import type {IRenderItem} from './types.ts';
import {Components, Entity} from '../../../core/entity';
import {Button} from '../../../core/entity/button';

export const RenderItem: FC<PropsWithChildren<IRenderItem>> = ({children, type, icon}) => {
  const {connectors} = useEditor();

  return (
    <Space align="start" ref={(ref) => {
      if (ref) {
        if (type === Entity.CContainer) {
          connectors.create(ref, <Element canvas is={Components[type]} />);
        } else {
          connectors.create(ref, <Button />);
        }
      }
    }}>
      {icon}
      <Typography.Text>{children}</Typography.Text>
    </Space>
  );
};
