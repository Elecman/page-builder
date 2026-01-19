import {Layers} from '@craftjs/layers';
import {IoLayersOutline} from 'react-icons/io5';
import {PiPlusSquare} from 'react-icons/pi';

import {STabs} from '@shared/ui';

import {ObjectsList} from '@modules/UIConstructor/Components';

export const LeftPanel = () => {
	return (
		<STabs
			indicator={{
				size: 0
			}}
			defaultActiveKey="1"
			tabPosition="left"
			items={[
				{
					label: <PiPlusSquare size={24} />,
					key: 'elements',
					children: <ObjectsList />
				},
				{
					label: <IoLayersOutline size={24} />,
					key: 'layers',
					children: <Layers />
				}
			]}
		/>
	);
};
