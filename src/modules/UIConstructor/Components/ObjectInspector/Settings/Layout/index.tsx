import {SettingItem} from '@/ui/SettingItem';
import {useNode} from '@craftjs/core';
import {useCallback} from 'react';

import {EntityBox} from '@shared/components/EntityBox';

import {Align} from './Align';
import {Direction} from './Direction';
import {Gap} from './Gap';
import {Justify} from './Justify';
import {Wrap} from './Wrap';

export const LayoutSettings = () => {
	const {
		style,
		actions: {setCustom}
	} = useNode((node) => ({
		style: node.data.custom.style
	}));
	const handleSetDirection = useCallback(
		(e: string) => {
			setCustom((props: any) => {
				props['style']['flexDirection'] = e;
			}, 500);
		},
		[setCustom]
	);
	return (
		<EntityBox>
			<SettingItem>
				<Direction onChange={handleSetDirection} summary={style?.flexDirection} />
				<Align />
				<Justify />
				<Gap />
				<Wrap />
			</SettingItem>
		</EntityBox>
	);
};
