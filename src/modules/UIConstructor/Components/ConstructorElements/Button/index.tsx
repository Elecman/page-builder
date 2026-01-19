import {type UserComponent, useNode} from '@craftjs/core';
import {css} from '@emotion/react';
import {Button as AntButton} from 'antd';
import type {PropsWithChildren} from 'react';

import {contentDescriptionStyle} from '@modules/UIConstructor/Components/ConstructorElements/styles/contentDescription.ts';

export const Button: UserComponent<PropsWithChildren> = ({children}) => {
	const {
		connectors: {connect, drag},
		id
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered,
		id: node.id
	}));
	return (
		<AntButton
			ref={(ref) => {
				if (ref) {
					connect(drag(ref));
				}
			}}
			css={css([!children && [contentDescriptionStyle, {fontSize: 12}]])}
		>
			{!children && <>Button {id}</>}
			{children}
		</AntButton>
	);
};
