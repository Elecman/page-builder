import {SideItem} from '@/ui/SideItem';
import {Input, Space} from 'antd';
import {CiSearch} from 'react-icons/ci';

import {SCollapse} from '@shared/ui';

import {EntityList} from '@modules/UIConstructor/consts/EntityList';

export const ObjectsList = () => {
	return (
		<Space direction="vertical" size={0} css={{width: '100%'}}>
			<SideItem>
				<Input
					addonAfter={<CiSearch size={16} />}
					placeholder="Search elements"
					size="small"
					variant="borderless"
				/>
			</SideItem>
			<SCollapse size="small" items={EntityList} />
		</Space>
	);
};
