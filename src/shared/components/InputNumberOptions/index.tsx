import type {ValueType} from '@rc-component/mini-decimal/es/interface';
import {InputNumber, Select} from 'antd';
import type {DefaultOptionType} from 'rc-select/lib/Select';
import {useCallback, useEffect, useState} from 'react';

import type {IInputOptions} from '@shared/components/InputNumberOptions/interfaces';

import {parseNumber} from '@shared/utils/parseNumber.ts';

export const InputNumberOptions = ({
	inputValue,
	selectValue,
	name,
	options,
	onChangeInput,
	addonBefore,
	isDisabled
}: IInputOptions) => {
	const [selectOption, setSelected] = useState<DefaultOptionType>();
	const handleChange = useCallback(
		(value: ValueType | null) => {
			if (onChangeInput && selectOption) {
				onChangeInput(parseNumber(value), selectOption, name);
			}
		},
		[onChangeInput, selectOption, name]
	);

	const handleSelectOption = useCallback((_value: DefaultOptionType, option: DefaultOptionType) => {
		setSelected(option);
	}, []);

	useEffect(() => {
		if (selectValue) {
			setSelected(options.find((a) => a.value === selectValue));
		}
	}, [options, selectValue]);

	return (
		<InputNumber
			disabled={isDisabled}
			addonBefore={addonBefore}
			size="small"
			min={0}
			onChange={handleChange}
			value={parseNumber(inputValue)}
			name={name}
			addonAfter={<Select value={selectOption} onSelect={handleSelectOption} options={options} />}
		/>
	);
};
