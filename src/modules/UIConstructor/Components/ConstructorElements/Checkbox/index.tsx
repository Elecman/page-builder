import {type UserComponent, useNode} from '@craftjs/core';
import {Checkbox as AntCheckbox} from 'antd';

export const Checkbox: UserComponent = () => {
	const {
		connectors: {connect, drag},
		id
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered,
		id: node.id
	}));
	return (
		<AntCheckbox
			ref={(ref) => {
				if (ref?.nativeElement) {
					connect(drag(ref?.nativeElement));
				}
			}}
		/>
	);
};
