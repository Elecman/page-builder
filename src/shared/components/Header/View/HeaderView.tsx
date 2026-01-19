import {DiAtom} from '@react-icons/all-files/di/DiAtom';
import {Col, Layout, Row, Space, Typography} from 'antd';
import type {FC, PropsWithChildren} from 'react';

import {baseStyle} from './styles.ts';

const {Header} = Layout;

export const HeaderView: FC<PropsWithChildren> = ({children}) => {
	return (
		<Header css={baseStyle}>
			<Row justify="space-between">
				<Col>
					<Space direction="horizontal" align="start">
						<DiAtom size={30} style={{color: '#002c8c'}} />
						<Typography.Title level={4} style={{margin: 0}}>
							Page Constructor
						</Typography.Title>
					</Space>
				</Col>
				<Col>{children}</Col>
			</Row>
		</Header>
	);
};
