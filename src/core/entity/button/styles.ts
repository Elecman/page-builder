import {Button} from 'antd';
import styled from 'styled-components';
import type {IUnionStyledComponent} from '../interfaces';

export const StyledButton = styled(Button)<IUnionStyledComponent>(
  ({$marginTop, $marginRight, $marginBottom, $marginLeft,}) => ({
    marginTop: $marginTop ? $marginTop : undefined,
    marginRight: $marginRight ? $marginRight : undefined,
    marginBottom: $marginBottom ? $marginBottom : undefined,
    marginLeft: $marginLeft ? $marginLeft : undefined,
  }),
  ({$paddingTop, $paddingRight, $paddingBottom, $paddingLeft,}) => ({
    paddingTop: $paddingTop ? $paddingTop : undefined,
    paddingRight: $paddingRight ? $paddingRight : undefined,
    paddingBottom: $paddingBottom ? $paddingBottom : undefined,
    paddingLeft: $paddingLeft ? $paddingLeft : undefined,
  }),
  ({$background}) => ({
    background: $background
  }),
  ({style}) => ({
    width: style?.width
  })
);
