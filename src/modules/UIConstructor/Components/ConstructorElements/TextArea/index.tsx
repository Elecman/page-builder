import {type UserComponent, useNode} from '@craftjs/core';
import {Input as AntInput} from 'antd';

export const TextArea: UserComponent = () => {
	const {
		connectors: {connect, drag},
		id
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered,
		id: node.id
	}));
	return (
		<AntInput.TextArea
			ref={(ref) => {
				if (ref?.resizableTextArea) {
					connect(drag(ref?.resizableTextArea?.textArea));
				}
			}}
			placeholder={id}
		/>
	);
};
