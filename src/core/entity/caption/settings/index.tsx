import {useNode} from '@craftjs/core';
import {Collapse} from 'antd';

export const CaptionSettings = () => {
	const {
		actions: {setCustom},
		customProps,
		node
	} = useNode((node) => ({
		customProps: node.data.custom,
		node
	}));
	console.log(node, 'node');
	return (
		<Collapse
			style={{width: '100%'}}
			size="small"
			items={[
				{
					key: 0,
					label: 'wow',
					children: <div>WOW</div>
				}
			]}
		/>
	);
};
