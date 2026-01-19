import {ResizerView} from '@/shared/formConstructor/Components/Resizer';
import {type Node, type UserComponent, useNode} from '@craftjs/core';
import type {PropsWithChildren} from 'react';

import {ContainerSettings} from '@modules/UIConstructor/Components/ConstructorElements/Container/Settings';
import {defaultStyleProps} from '@modules/UIConstructor/consts/ComponentsCustomProps';

export const Container: UserComponent<PropsWithChildren> = ({children}) => {
	const {
		isSelected,
		isHover,
		connectors: {connect, drag},
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
			enable={
				isSelected && {
					bottom: true,
					right: true
				}
			}
			defaultSize={{
				width: 'max-content',
				height: 'max-content'
			}}
			css={{backgroundColor: 'gainsboro'}}
			resizerRef={(ref) => {
				if (ref?.resizable) connect(drag(ref.resizable));
			}}
		>
			{!children && <span>Container {id}</span>}
			{children}
		</ResizerView>
	);
};

Container.craft = {
	displayName: 'Container',
	custom: {
		type: 'Container',
		style: {
			...defaultStyleProps
		}
	},
	isCanvas: true,
	rules: {
		canDrop(dropTarget: Node): boolean {
			return dropTarget.data.custom.type === 'Container';
		},
		canMoveOut(): boolean {
			return true;
		},
		canMoveIn(): boolean {
			return true;
		}
	},
	related: {
		toolbar: ContainerSettings
	}
};
