import {SCollapse} from '@shared/ui/Collapse/SCollapse.tsx';

import {ComponentsSettings} from '@modules/UIConstructor/consts';

export const ContainerSettings = () => {
	return <SCollapse size="small" items={ComponentsSettings} />;
};
