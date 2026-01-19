import {E_UNITS} from '@shared/enums/SizeUnits.ts';

export const getSizeUnit = (value?: string | number) => {
	if (typeof value === 'number') return E_UNITS.px;

	if (value) {
		const matchUnit = value.match(/px|em|%/);
		if (matchUnit) {
			return matchUnit[0];
		}
	}

	return E_UNITS.px;
};
