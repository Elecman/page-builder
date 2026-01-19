import type {DefaultOptionType} from 'rc-select/lib/Select';

import {E_UNITS} from '@shared/enums/SizeUnits.ts';

export const DEFAULT_OPTION: DefaultOptionType = {
	value: E_UNITS.px,
	label: E_UNITS.px
};

export const LIST_OPTIONS: DefaultOptionType[] = [
	{
		value: E_UNITS.px,
		label: E_UNITS.px
	},
	{
		value: E_UNITS['%'],
		label: E_UNITS['%']
	},
	{
		value: E_UNITS.em,
		label: E_UNITS.em
	},
	{
		value: E_UNITS.rem,
		label: E_UNITS.rem
	},
	{
		value: E_UNITS.vh,
		label: E_UNITS.vh
	},
	{
		value: E_UNITS.vw,
		label: E_UNITS.vw
	}
];
