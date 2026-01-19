import styled from 'styled-components';
import type {ISelectedContainerProps} from '@shared/types/FormContainer.ts';

export const SelectableContainer = styled.div<ISelectedContainerProps>(
  {
    border: '1px solid transparent',
  },
  ({$isHover}) => ({
    border: $isHover ? '1px dashed #7AB2D3' : undefined,
  }),
  ({$isSelected}) => ({
    border: $isSelected ? '1px solid #7AB2D3' : undefined,
  })
);
