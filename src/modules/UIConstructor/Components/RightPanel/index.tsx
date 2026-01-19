import {SButton} from '@/ui/Button';
import {SideItem} from '@/ui/SideItem';
import {useEditor} from '@craftjs/core';
import {BsBoundingBoxCircles} from '@react-icons/all-files/bs/BsBoundingBoxCircles';
import {Button, Input, Space, Typography} from 'antd';
import {GoCopy} from 'react-icons/go';
import {PiTrashLight} from 'react-icons/pi';

import {ObjectInspector} from '@modules/UIConstructor/Components';

export const RightPanel = () => {
	const {nodeId, node, isDeletable, actions} = useEditor((_, query) => {
		const currentlySelectedNodeId = query.getEvent('selected').first();
		if (!currentlySelectedNodeId) {
			return undefined;
		}
		return {
			nodeId: currentlySelectedNodeId,
			node: query.node(currentlySelectedNodeId).get(),
			isDeletable: query.node(currentlySelectedNodeId).isDeletable()
		};
	});
	return (
		<Space direction="vertical">
			{nodeId && (
				<>
					<SideItem>
						<Space.Compact
							block
							style={{
								alignItems: 'center'
							}}
						>
							<BsBoundingBoxCircles size={16} />
							<Input disabled placeholder={node.data.name} size="small" variant="borderless" />
							<Button
								danger
								disabled={!isDeletable}
								onClick={() => actions.delete(nodeId)}
								type="text"
								icon={<PiTrashLight size={16} />}
								size="small"
							/>
						</Space.Compact>
					</SideItem>
					<SideItem>
						<Space.Compact block>
							<Input
								addonBefore={<Typography.Text>Element ID</Typography.Text>}
								disabled
								size="small"
								placeholder={nodeId}
								variant="outlined"
							/>
							<SButton size="small" type="primary" icon={<GoCopy size={14} />} />
						</Space.Compact>
					</SideItem>
				</>
			)}
			<ObjectInspector />
		</Space>
	);
};
