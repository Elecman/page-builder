import {useNode} from '@craftjs/core';
import type {ValueType} from '@rc-component/mini-decimal/es/interface';
import {Flex, Typography} from 'antd';
import {isNumber, isString} from 'lodash';
import type {DefaultOptionType} from 'rc-select/lib/Select';
import {useCallback} from 'react';

import {InputNumberOptions} from '@shared/components/InputNumberOptions';

import {LIST_OPTIONS} from '@shared/const/SizeOptions.ts';

// import {LIST_OPTIONS} from '@shared/consts/SizeOptions';

interface ISizeItem {
	propName: string;
	label: string;
	isActive?: boolean;
}

export const SizeItem = ({propName, label, isActive}: ISizeItem) => {
	const {
		actions: {setCustom},
		propValue
	} = useNode((node) => ({
		propValue: node.data.custom.style
	}));

	const handleChangeSize = useCallback(
		(value: ValueType | null, option: DefaultOptionType) => {
			setCustom((props: any) => {
				props['style'][propName] = value ? `${value}${option.value}` : undefined;
			}, 500);
		},
		[propName, setCustom]
	);

	return (
		<Flex vertical gap={5}>
			<Typography.Text style={{fontSize: 11}}>{label}</Typography.Text>
			<InputNumberOptions
				isDisabled={isActive}
				onChangeInput={handleChangeSize}
				inputValue={propValue?.[propName]}
				name={propName}
				options={LIST_OPTIONS}
				selectValue={
					(isNumber(propValue[propName]) ??
					(isString(propValue[propName]) && propValue[propName].endsWith('px')))
						? 'px'
						: '%'
				}
			/>
		</Flex>
	);
};
