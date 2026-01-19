import {type Node, type NodeHelpersType, useNode, type UserComponent} from '@craftjs/core';
import {CaptionSettings} from './settings';
import {Button} from '../button';

export const Caption: UserComponent = (props) => {
  const {connectors: {connect, drag}} = useNode();

  return <div {...props} ref={ref => {
    if (ref) {
      connect(drag(ref));
    }
  }}>Caption</div>;
};

Caption.craft = {
  displayName: 'CCaption',
  rules: {
    canDrop(dropTarget: Node, self: Node, helpers: NodeHelpersType): boolean {
      console.log(dropTarget, 'dropTarget');
      return true;
    },
    canDrag(): boolean {
      return true;
    }
  },
  related: {
    toolbar: CaptionSettings
  }
};
