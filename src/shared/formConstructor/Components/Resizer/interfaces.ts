import type {Resizable, ResizableProps} from 're-resizable';
import type {ISelectedContainerProps} from '@shared/types/FormContainer.ts';

export interface IResizerView extends ResizableProps, ISelectedContainerProps {
  resizerRef: (ref: Resizable | null) => void
  onResizeStart?: ResizableProps['onResizeStart']
  onResizeStop?: ResizableProps['onResizeStop']
  onResize?: ResizableProps['onResize']
}
