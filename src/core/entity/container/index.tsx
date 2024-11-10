import type {BasicProps} from 'antd/es/layout/layout.js';
import {useNode, type UserComponent} from '@craftjs/core';
import {ContainerSettings} from './settings';
import {StyledLayout} from '../../../ui/Layout/styles.ts';
import {Resizable} from 're-resizable';

const defaultProps = {
  padding: ['0px', '0px', '0px', '0px'],
  margin: ['0px', '0px', '0px', '0px'],
  border: '1px solid E5E1DA',
  width: '100%',
  height: '100%',
  borderRadius: 0,
  background: '#E4E0E1',
  // background: 'linear-gradient(90deg, rgb(38,150,231) 0%, rgb(135,208,104) 100%)',
  color: {r: 0, g: 0, b: 0, a: 1},
};

export const Container: UserComponent<BasicProps> = (props) => {
  const {customProps, connectors: {connect, drag}} = useNode((node) => ({
    selected: node.events.selected,
    customProps: node.data.custom.style
  }));

  return (
    <Resizable minHeight="320px" minWidth="320px">
      <StyledLayout
        $margin={customProps?.margin}
        $padding={customProps?.padding}
        $background={customProps?.background}
        $width={customProps?.width}
        $height={customProps?.height}
        ref={ref => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        {...props}
      />
    </Resizable>
  );
};

Container.craft = {
  custom: {
    style: {
      ...defaultProps
    }
  },
  related: {
    toolbar: ContainerSettings
  }
};
