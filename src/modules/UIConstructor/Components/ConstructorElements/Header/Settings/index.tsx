import {SCollapse} from '@shared/ui';

import {SizeSettings} from '../../../ObjectInspector/Settings';

export const HeaderSettings = () => {
	const settingItems = [
		{
			key: 'Size',
			label: 'Size',
			children: <SizeSettings />
		}
	];

	return <SCollapse size="small" items={settingItems} />;
};
