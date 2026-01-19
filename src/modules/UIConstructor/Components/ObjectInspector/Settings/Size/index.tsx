import {SettingItem} from '@/ui/SettingItem';
import {useNode} from '@craftjs/core';
import {Flex} from 'antd';

import {EntityBox} from '@shared/components/EntityBox';

import {SizeItem} from './RenderItem';

export const SizeSettings = () => {
	const {excludedSettings} = useNode((node) => ({
		excludedSettings: node.data.custom.excludedSettings
	}));
	return (
		<EntityBox>
			<SettingItem>
				<Flex vertical gap={8}>
					<Flex gap={6}>
						<SizeItem isActive label="Width" propName="width" />
						<SizeItem isActive={excludedSettings?.size?.height} label="Height" propName="height" />
					</Flex>
					<Flex gap={6}>
						<SizeItem isActive label="Min Width" propName="minWidth" />
						<SizeItem isActive label="Min Height" propName="minHeight" />
					</Flex>
					<Flex gap={6}>
						<SizeItem isActive label="Max Width" propName="maxWidth" />
						<SizeItem isActive label="Max Height" propName="maxHeight" />
					</Flex>
				</Flex>
			</SettingItem>
		</EntityBox>
	);
};
