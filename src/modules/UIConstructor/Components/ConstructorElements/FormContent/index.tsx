import {ResizerView} from '@/shared/formConstructor/Components/Resizer';
import {type Node, type UserComponent, useNode} from '@craftjs/core';
import {css} from '@emotion/react';
import type {PropsWithChildren} from 'react';

import {FormContentSettings} from '@modules/UIConstructor/Components/ConstructorElements/FormContent/Settings';
import {contentDescriptionStyle} from '@modules/UIConstructor/Components/ConstructorElements/styles/contentDescription.ts';
import {defaultLayoutProps, defaultStyleProps} from '@modules/UIConstructor/consts/ComponentsCustomProps';

export const FormContent: UserComponent<PropsWithChildren> = ({children}) => {
	const {
		isSelected,
		isHover,
		connectors: {connect, drag},
		id,
		style
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered,
		id: node.id,
		style: node.data.custom.style
	}));
	return (
		<ResizerView
			$isSelected={isSelected}
			$isHover={isHover}
			bounds="parent"
			enable={false}
			defaultSize={{
				width: 'max-content',
				height: 'max-content'
			}}
			css={css([!children && [contentDescriptionStyle, {justifyContent: 'center'}], {flexGrow: 1}, style])}
			resizerRef={(ref) => {
				if (ref?.resizable) connect(drag(ref.resizable));
			}}
		>
			{!children && <>FormContent {id}</>}
			{children}
		</ResizerView>
	);
};

FormContent.craft = {
	displayName: 'FormContent',
	custom: {
		type: 'Container',
		style: {
			...defaultStyleProps,
			...defaultLayoutProps
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
		toolbar: FormContentSettings
	}
};
