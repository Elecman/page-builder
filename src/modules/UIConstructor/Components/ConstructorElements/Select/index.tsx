import {Element, type UserComponent, useNode} from '@craftjs/core';
import {Select as AntSelect} from 'antd';

export const Select: UserComponent = () => {
	const {
		connectors: {connect, drag},
		isSelected,
		isHover
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered
	}));
	return (
		<AntSelect
			ref={(ref) => {
				if (ref?.nativeElement) {
					connect(drag(ref.nativeElement));
				}
			}}
			placeholder="Component Select"
			options={[
				{
					label: 'Component Select',
					value: 'Component Select'
				}
			]}
		/>
	);
};
