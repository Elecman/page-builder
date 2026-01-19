import type {InputNumberProps} from 'antd/es/input-number';
import type {DefaultOptionType, SelectProps} from 'rc-select/lib/Select';

export interface IInputOptions {
	inputValue: InputNumberProps['value'];
	selectValue: SelectProps['value'];
	name: string;
	options: DefaultOptionType[];
	onChangeInput: (value: SelectProps['value'], option: DefaultOptionType, name: string) => void;
	addonBefore?: InputNumberProps['addonBefore'];
	isDisabled?: InputNumberProps['disabled'];
}
