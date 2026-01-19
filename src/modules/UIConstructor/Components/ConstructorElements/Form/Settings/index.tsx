import {SCollapse} from '@shared/ui';

import {ComponentsSettings} from '@modules/UIConstructor/consts';

export const FormSettings = () => {
	return <SCollapse size="small" items={ComponentsSettings} />;
};
