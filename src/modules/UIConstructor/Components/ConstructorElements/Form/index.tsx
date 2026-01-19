import {Element, type UserComponent, useNode} from '@craftjs/core';
import {css} from '@emotion/react';

import {ResizerView} from '@shared/formConstructor/Components/Resizer';

import {defaultStyleProps} from '@modules/UIConstructor/consts/ComponentsCustomProps';

import {FormContent} from '../FormContent';
import {Header} from '../Header';
import {FormSettings} from './Settings';

export const Form: UserComponent = () => {
	const {
		connectors: {connect},
		isSelected,
		isHover
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered
	}));
	return (
		<ResizerView
			$isSelected={isSelected}
			$isHover={isHover}
			bounds="parent"
			enable={
				isSelected && {
					bottom: true,
					right: true,
					bottomRight: true
				}
			}
			defaultSize={{
				width: '100%',
				height: '100%'
			}}
			css={css({
				background: '#fff',
				display: 'flex',
				flexDirection: 'column',
				flexWrap: 'nowrap'
			})}
			resizerRef={(ref) => {
				if (ref?.resizable) {
					connect(ref.resizable);
				}
			}}
		>
			<Element id="CFormHeader" canvas is={Header} />
			<Element id="CFormContent" canvas is={FormContent} />
		</ResizerView>
	);
};

Form.craft = {
	displayName: 'Form',
	custom: {
		style: {
			...defaultStyleProps
		}
	},
	related: {
		toolbar: FormSettings
	}
};
