import {Button} from 'antd';
import styled from 'styled-components';
import type {IUnionStyledComponent} from '../interfaces';

export const StyledButton = styled(Button)<IUnionStyledComponent>(
  (props) => ({}),
  ({$margin}) => ({
    marginTop: $margin ? `${$margin[0]}` : 0,
    marginRight: $margin ? `${$margin[1]}` : 0,
    marginBottom: $margin ? `${$margin[2]}` : 0,
    marginLeft: $margin ? `${$margin[3]}` : 0,
  }),
  ({$padding}) => ({
    paddingTop: $padding && `${$padding[0]}`,
    paddingRight: $padding && `${$padding[1]}`,
    paddingBottom: $padding && `${$padding[2]}`,
    paddingLeft: $padding && `${$padding[3]}`,
  }),
  ({$background}) => ({
    background: $background
  })
);
