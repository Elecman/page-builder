import type {ColorPickerProps} from 'antd/es/color-picker/interface';

export interface IColorEditor extends Omit<ColorPickerProps, 'value'> {
  onChangeValue: (value: string) => void
  summary?: string
}
