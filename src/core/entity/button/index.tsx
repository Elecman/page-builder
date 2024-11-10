import type {ButtonProps} from 'antd/es/button/button.js';
import {useNode, type UserComponent} from '@craftjs/core';
import {ButtonSettings} from './settings';
import {StyledButton} from './styles.ts';

const defaultProps = {
  padding: ['8px', '8px', '8px', '8px'],
  margin: ['0px', '0px', '0px', '0px'],
  // background: { r: 255, g: 255, b: 255, a: 1 },
  background: 'linear-gradient(90deg, rgb(38,150,231) 0%, rgb(135,208,104) 100%)',
  color: { r: 0, g: 0, b: 0, a: 1 },
};

export const Button: UserComponent<ButtonProps> = (props) => {
  const {customProps, connectors: {connect, drag}} = useNode((node) => ({
    selected: node.events.selected,
    customProps: node.data.custom.style
  }));
  return (
    <StyledButton
      $margin={customProps?.margin}
      $padding={customProps?.padding}
      $background={customProps?.background}
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      {...props}
    />
  );
};

Button.craft = {
  props: {
    children: 'Button',
  },
  custom: {
    style: {
      ...defaultProps
    }
  },
  related: {
    toolbar: ButtonSettings
  }
};
