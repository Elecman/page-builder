import {SelectableContainer} from '@/shared/formConstructor';
import {type Node, type UserComponent, useNode} from '@craftjs/core';

export const Label: UserComponent = () => {
	const {
		isSelected,
		isHover,
		id,
		connectors: {connect, drag}
	} = useNode((node) => ({
		id: node.id,
		isSelected: node.events.selected,
		isHover: node.events.hovered
	}));
	return (
		<SelectableContainer
			$isSelected={isSelected}
			$isHover={isHover}
			ref={(ref) => {
				if (ref) connect(drag(ref));
			}}
		>
			CLabel {id}
		</SelectableContainer>
	);
};

Label.craft = {
	displayName: 'Label',
	rules: {
		canDrop(dropTarget: Node): boolean {
			return dropTarget.data.custom.type === 'FormHeader' || dropTarget.data.custom.type === 'Input';
		}
	}
};
