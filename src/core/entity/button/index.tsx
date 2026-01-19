import type {ButtonProps} from 'antd/es/button/button.js';
import {Element, type Node, type NodeHelpersType, useNode, type UserComponent} from '@craftjs/core';
import {ButtonSettings} from './settings';
import {StyledButton} from './styles.ts';
import {Caption} from '../caption';

const defaultProps = {
  padding: ['8px', '8px', '8px', '8px'],
  margin: ['0px', '0px', '0px', '0px'],
  // background: { r: 255, g: 255, b: 255, a: 1 },
  background: 'linear-gradient(90deg, rgb(38,150,231) 0%, rgb(135,208,104) 100%)',
  color: {r: 0, g: 0, b: 0, a: 1},
};

export const CaptionGroup: UserComponent = ({children, ...props}) => {
  const {
    connectors: {connect},
  } = useNode();
  return (
    <div ref={connect} className="w-full mt-5" {...props}>
      {children}
    </div>
  );
};

CaptionGroup.craft = {
  rules: {
    canMoveOut(canMoveOut: Node[], self: Node, helpers: NodeHelpersType): boolean {
      return false;
    },
    canDrag(node: Node, helpers: NodeHelpersType): boolean {
      return false;
    }
  },
};

export const Button: UserComponent<ButtonProps> = (props) => {
  const {customStyles, connectors: {connect, drag}} = useNode((node) => ({
    customStyles: node.data.custom.style
  }));
  return (
    <StyledButton
      $marginTop={customStyles?.marginTop}
      $marginRight={customStyles?.marginRight}
      $marginBottom={customStyles?.marginBottom}
      $marginLeft={customStyles?.marginLeft}
      $paddingTop={customStyles?.paddingTop}
      $paddingRight={customStyles?.paddingRight}
      $paddingBottom={customStyles?.paddingBottom}
      $paddingLeft={customStyles?.paddingLeft}
      $background={customStyles?.background}
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
    >
      <Element is={CaptionGroup} canvas id="CaptionGroup">
        <Caption />
      </Element>
    </StyledButton>
  );
};

Button.craft = {
  custom: {
    style: {
      ...defaultProps
    },
  },
  related: {
    toolbar: ButtonSettings
  }
};
