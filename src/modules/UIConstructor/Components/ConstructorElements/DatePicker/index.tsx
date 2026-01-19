import {type UserComponent, useNode} from '@craftjs/core';
import {DatePicker as AntDatePicker} from 'antd';

export const DatePicker: UserComponent = () => {
	const {
		connectors: {connect, drag},
		id
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered,
		id: node.id
	}));
	return (
		<AntDatePicker
			ref={(ref) => {
				if (ref?.nativeElement) {
					connect(drag(ref?.nativeElement));
				}
			}}
			placeholder={id}
		/>
	);
};
