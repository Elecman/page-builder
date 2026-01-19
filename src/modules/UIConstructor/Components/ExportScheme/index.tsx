import {dataMapper} from '@/models/FormModel/dataMapper.ts';
import {useEditor} from '@craftjs/core';
import {Button, Space, Switch} from 'antd';

export const ExportScheme = () => {
	const {query} = useEditor();

	return (
		<Space>
			<Switch checkedChildren="Active" unCheckedChildren="Active" />
			<Button
				onClick={() => {
					console.log(query.getState());
					console.log(dataMapper(query.getState()));
				}}
			>
				To JSON
			</Button>
		</Space>
	);
};
