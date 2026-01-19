import {ResizerView} from '@/shared/formConstructor/Components/Resizer';
import {type Node, type UserComponent, useNode} from '@craftjs/core';
import {css} from '@emotion/react';
import type {ResizableProps} from 're-resizable';
import {type PropsWithChildren} from 'react';

import {getPadding} from '@shared/utils/dom/getPadding.ts';
import {pxToPercent} from '@shared/utils/dom/pxToPercent.ts';

import {contentDescriptionStyle} from '../styles/contentDescription.ts';
import {HeaderSettings} from './Settings';

export const Header: UserComponent<PropsWithChildren> = ({children}) => {
	const {
		isSelected,
		isHover,
		connectors: {connect},
		actions: {setCustom},
		customStyle,
		id,
		parentElement
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered,
		id: node.id,
		customStyle: node.data.custom.style,
		parentElement: node.dom?.parentElement
	}));

	const handleStopResize: ResizableProps['onResizeStop'] = (_event, _dir, elementRef) => {
		const styles = getComputedStyle(elementRef);

		// let width: string | number = parseInt(styles.width);
		let height: string | number = parseInt(styles.height);

		if (elementRef.style.width.endsWith('%') || elementRef.style.height.endsWith('%')) {
			if (parentElement) {
				const padding = getPadding(parentElement);
				// const parentWidth = parentElement.offsetWidth;
				const parentHeight = parentElement.offsetHeight;
				// width = `${pxToPercent(elementRef.offsetWidth, (parentWidth - padding.left - padding.right))}%`;
				height = `${pxToPercent(elementRef.offsetHeight, parentHeight - padding.top - padding.bottom)}%`;
			}
		}
		setCustom((props: any) => {
			props['style']['height'] = height;
		}, 500);
	};
	return (
		<ResizerView
			resizerRef={(ref) => {
				if (ref?.resizable) {
					connect(ref.resizable);
				}
			}}
			enable={
				isSelected && {
					bottom: true
				}
			}
			defaultSize={{
				width: '100%',
				height: customStyle['height']
			}}
			size={{
				height: customStyle?.height ?? 50
			}}
			onResizeStop={handleStopResize}
			$isSelected={isSelected}
			$isHover={isHover}
			css={css([!children && contentDescriptionStyle, {flexGrow: 0}])}
		>
			{!children && <>Header {id}</>}
			{children}
		</ResizerView>
	);
};

Header.craft = {
	displayName: 'FormHeader',
	isCanvas: true,
	rules: {
		canDrag(): boolean {
			return false;
		},
		canDrop(dropTarget: Node): boolean {
			return dropTarget.data.custom.name === 'header';
		}
	},
	custom: {
		type: 'FormHeader',
		style: {
			height: 50
		}
	},
	related: {
		toolbar: HeaderSettings
	}
};
