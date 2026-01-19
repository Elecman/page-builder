import {css} from '@emotion/react';
import {Resizable} from 're-resizable';

import {StyledCorner} from './cornerRender/styles.ts';
import type {IResizerView} from './interfaces.ts';
import {StyledResizable, hoverStyle, selectedStyle} from './styles.ts';

export const ResizerView = (props: IResizerView) => {
	const {children, resizerRef, $isSelected, $isHover, onResize, onResizeStart, onResizeStop, ...rest} = props;

	return (
		<Resizable
			as={StyledResizable}
			css={css([$isHover && hoverStyle, $isSelected && selectedStyle])}
			ref={(ref) => {
				if (ref?.resizable) {
					resizerRef(ref);
					ref.resizable.style.flexShrink = 'unset';
				}
			}}
			onResizeStart={(e, dir, elementRef) => {
				e.preventDefault();
				e.stopPropagation();
				if (onResizeStart) {
					onResizeStart(e, dir, elementRef);
				}
			}}
			onResize={(e, dir, elementRef, delta) => {
				e.preventDefault();
				e.stopPropagation();
				if (onResize) {
					onResize(e, dir, elementRef, delta);
				}
			}}
			onResizeStop={(e, dir, elementRef, delta) => {
				e.preventDefault();
				e.stopPropagation();
				if (onResizeStop) {
					onResizeStop(e, dir, elementRef, delta);
				}
			}}
			handleComponent={{
				topLeft: $isSelected ? <StyledCorner /> : undefined,
				topRight: $isSelected ? <StyledCorner /> : undefined,
				bottomLeft: $isSelected ? <StyledCorner /> : undefined,
				bottomRight: $isSelected ? <StyledCorner /> : undefined
			}}
			{...rest}
		>
			{children}
		</Resizable>
	);
};
