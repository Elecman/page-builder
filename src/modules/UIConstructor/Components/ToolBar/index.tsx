import {useEditor} from '@craftjs/core';
import {RiArrowGoBackFill} from '@react-icons/all-files/ri/RiArrowGoBackFill';
import {RiArrowGoForwardFill} from '@react-icons/all-files/ri/RiArrowGoForwardFill';
import {Button, Col, Row, Space} from 'antd';

import {baseStyle} from './styles.ts';

export const ToolBar = () => {
	const {canUndo, canRedo, actions} = useEditor((_, query) => ({
		canUndo: query.history.canUndo(),
		canRedo: query.history.canRedo()
	}));
	return (
		<div css={baseStyle}>
			<Row justify="space-between" gutter={[8, 8]}>
				<Col>
					<Space>
						<Button
							disabled={!canUndo}
							onClick={() => actions.history.undo()}
							type="text"
							size="small"
							icon={<RiArrowGoBackFill />}
						/>
						<Button
							disabled={!canRedo}
							onClick={() => actions.history.redo()}
							type="text"
							size="small"
							icon={<RiArrowGoForwardFill />}
						/>
					</Space>
				</Col>
			</Row>
		</div>
	);
};
