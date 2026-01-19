import {SettingItem} from '@/ui/SettingItem';
import {useNode} from '@craftjs/core';
import {useCallback} from 'react';

import {EntityBox} from '@shared/components/EntityBox';

import {ColorEditor} from './ColorEditor';

export const BackgroundSettings = () => {
	const {
		actions: {setCustom},
		propValue
	} = useNode((node) => ({
		propValue: node.data.custom.style
	}));
	const handleChangeBackground = useCallback(
		(value: string) => {
			console.log(value, 'value');
			setCustom((props: any) => {
				props['style']['background'] = value;
			}, 1500);
		},
		[setCustom]
	);
	console.log(propValue['background'], "propValue['background']");
	return (
		<EntityBox>
			<SettingItem>
				<ColorEditor
					mode={['single', 'gradient']}
					summary={propValue['background']}
					onChangeValue={handleChangeBackground}
				/>
			</SettingItem>
		</EntityBox>
	);
};
