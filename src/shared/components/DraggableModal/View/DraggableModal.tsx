import Draggable, {type DraggableData, type DraggableEvent} from 'react-draggable';
import {StyledModal} from '@shared/ui/Modal';
import type {ModalFuncProps} from 'antd/es/modal/interface';
import {useRef, useState} from 'react';

type IDraggableModalProps = ModalFuncProps;

export const DraggableModal = (props: IDraggableModalProps) => {
  const {children, ...rest} = props;
  const [isDragging, setIsDragging] = useState(false);
  const [bounds, setBounds] = useState({left: 0, top: 0, bottom: 0, right: 0});
  const draggingRef = useRef<HTMLDivElement | null>(null);

  const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
    const {clientWidth, clientHeight} = window.document.documentElement;
    const targetRect = draggingRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };
  //
  // const [open, setOpen] = useState(false);
  // const [disabled, setDisabled] = useState(true);
  // const [bounds, setBounds] = useState({left: 0, top: 0, bottom: 0, right: 0});
  // const draggleRef = useRef<HTMLDivElement | null>(null);
  //
  // const [sizeModal, setSizeModal] = useState({
  //   width: 500,
  //   height: 500
  // });
  //
  // const showModal = () => {
  //   setOpen(true);
  // };
  //
  // const handleOk = (e: MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   setOpen(false);
  // };
  //
  // const handleCancel = (e: MouseEvent<HTMLElement>) => {
  //   console.log(e);
  //   setOpen(false);
  // };
  //
  // const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
  //   const {clientWidth, clientHeight} = window.document.documentElement;
  //   const targetRect = draggleRef.current?.getBoundingClientRect();
  //   if (!targetRect) {
  //     return;
  //   }
  //   setBounds({
  //     left: -targetRect.left + uiData.x,
  //     right: clientWidth - (targetRect.right - uiData.x),
  //     top: -targetRect.top + uiData.y,
  //     bottom: clientHeight - (targetRect.bottom - uiData.y),
  //   });
  // };
  //
  // const onResize: ResizeCallback = (event, direction, elementRef, delta) => {
  //   // console.log(elementRef.offsetWidth, 'offsetWidth');
  //   // console.log(elementRef.offsetHeight, 'offsetHeight');
  //   setSizeModal((prevState) => ({
  //     width: elementRef.offsetWidth,
  //     height: elementRef.offsetHeight
  //   }));
  // };

  return (
    <StyledModal
      {...rest}
      title={
        <div
          style={{width: '100%', cursor: 'move'}}
          onMouseOver={() => {
            if (isDragging) {
              setIsDragging(false);
            }
          }}
          onMouseOut={() => {
            setIsDragging(true);
          }}
        >
          Draggable Modal
        </div>
      }
      open={props.open}
      modalRender={(modal) => (
        <Draggable
          disabled={isDragging}
          bounds={bounds}
          nodeRef={draggingRef}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggingRef}>{modal}</div>
        </Draggable>
      )}
    >
      {children}
    </StyledModal>
  );
};
