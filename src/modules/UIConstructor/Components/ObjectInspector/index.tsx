import {useEditor} from '@craftjs/core';
import {Fragment, createElement} from 'react';

export const ObjectInspector = () => {
	const {active, related} = useEditor((state, query) => {
		const currentlySelectedNodeId = query.getEvent('selected').first();
		return {
			active: currentlySelectedNodeId,
			related: currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related
		};
	});

	return (
		<Fragment>
			{active && related.toolbar && createElement(related.toolbar)}
			{!active && <h2>You could also double click on the layers below to edit their names, like in Photoshop</h2>}
		</Fragment>
	);
};
