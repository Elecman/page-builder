import {Element, type Node, type NodeHelpersType, type UserComponent, useNode} from '@craftjs/core';
import {Input as AntInput} from 'antd';
import type {PropsWithChildren} from 'react';

import {ResizerView} from '@shared/formConstructor/Components/Resizer';

export const Input: UserComponent<PropsWithChildren> = ({children}) => {
	const {
		connectors: {connect, drag},
		isSelected,
		isHover,
		id
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered,
		id: node.id
	}));
	return (
		<ResizerView
			$isSelected={isSelected}
			$isHover={isHover}
			bounds="parent"
			enable={{
				bottom: true,
				right: true
			}}
			css={{
				width: 'max-content',
				height: 'max-content',
				display: 'flex'
			}}
			defaultSize={{
				width: 'max-content',
				height: 'max-content'
			}}
			resizerRef={(ref) => {
				if (ref?.resizable) connect(drag(ref.resizable));
			}}
		>
			{children}
			<AntInput placeholder={id} />
		</ResizerView>
	);
};

Input.craft = {
	displayName: 'Input',
	isCanvas: true,
	custom: {
		type: 'Input'
	}
};
