import {ROOT_NODE, useEditor} from '@craftjs/core';
import type {PropsWithChildren} from 'react';

import {EntityItem} from '@shared/components/EntityBox';

import {ConstructorEntities} from '@modules/UIConstructor/consts/ConstructorEntities';
import {Entity} from '@modules/UIConstructor/types/enums.ts';

const withEntityBox = (Component: typeof EntityItem) => (props: PropsWithChildren<{type: Entity}>) => {
	const {type} = props;
	const {
		connectors: {create},
		actions,
		rootNode
	} = useEditor((_, query) => ({
		rootNode: query.node(ROOT_NODE)
	}));
	return (
		<Component
			ref={(ref) => {
				if (ref) {
					const Component = ConstructorEntities[type];
					if (type === Entity.Container) {
						create(ref, <Component />);
					} else if (type === Entity.TDataSet) {
						create(ref, <Component />, {
							onCreate: (nodeTree) => {
								actions.move(nodeTree.rootNodeId, rootNode.get().id, 0);
							}
						});
					} else {
						create(ref, <Component />);
					}
				}
			}}
			{...props}
		/>
	);
};

export const DraggedEntity = withEntityBox(EntityItem);
