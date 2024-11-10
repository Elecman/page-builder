import {useNode, useEditor} from '@craftjs/core';
import {getDOMInfo, ROOT_NODE, useMethods} from '@craftjs/utils';

import {ArrowUpOutlined, DeleteOutlined, DragOutlined} from '@ant-design/icons';
import {Button, Popover, Space} from 'antd';

export const RenderNode = ({render}) => {
  const {id, dom, isHover} = useNode(node => ({
    dom: node.dom,
    isHover: node.events.hovered
  }));
  const {isSelected} = useEditor((_, query) => ({
    isSelected: query.getEvent('selected').contains(id),
  }));

  return (
    <Popover
      placement="topLeft"
      open={id !== ROOT_NODE && isSelected}
      arrow={false}
      content={
        <Space.Compact>
          <Button size="small" icon={<ArrowUpOutlined />} />
          <Button size="small" icon={<DeleteOutlined />} />
          <Button size="small" icon={<DragOutlined />} />
        </Space.Compact>
      }
    >
      {render}
    </Popover>
  );
};
