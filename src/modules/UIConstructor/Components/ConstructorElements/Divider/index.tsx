import {type UserComponent, useNode} from '@craftjs/core';
import {Divider as AntDivider} from 'antd';

import {ResizerView} from '@shared/formConstructor/Components/Resizer';

export const Divider: UserComponent = () => {
	const {
		connectors: {connect, drag},
		isSelected,
		isHover
	} = useNode((node) => ({
		isSelected: node.events.selected,
		isHover: node.events.hovered
	}));

	return (
		<ResizerView resizerRef={console.log} $isSelected={isSelected} $isHover={isHover}>
			<AntDivider type="horizontal" />
		</ResizerView>
	);
};
