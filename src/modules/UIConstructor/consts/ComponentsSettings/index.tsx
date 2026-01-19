import type {ItemType} from 'rc-collapse/es/interface';

import {
	BackgroundSettings,
	BorderSettings,
	CornerSettings,
	LayoutSettings,
	SizeSettings,
	SpacingSettings
} from '@modules/UIConstructor/Components/ObjectInspector/Settings';

export const ComponentsSettings: ItemType[] = [
	{
		key: 'Common',
		label: 'Common'
	},
	{
		key: 'Typography',
		label: 'Typography'
	},
	{
		key: 'Layout',
		label: 'Layout',
		children: <LayoutSettings />
	},
	{
		key: 'Size',
		label: 'Size',
		children: <SizeSettings />
	},
	{
		key: 'Spacing',
		label: 'Spacing',
		children: <SpacingSettings />
	},
	{
		key: 'Background',
		label: 'Background',
		children: <BackgroundSettings />
	},
	{
		key: 'Corner',
		label: 'Corner Radius',
		children: <CornerSettings />
	},
	{
		key: 'Border',
		label: 'Border',
		children: <BorderSettings />
	}
];
