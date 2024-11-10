import type {SliderSingleProps} from 'antd/es/slider';
import {PERCENTAGE} from './const.ts';

export interface IOffsetEditor extends SliderSingleProps {
  summary?: number | Record<string, never>;
  onChangeValue: (value: number, field: string, key: string | number, percentage: string) => void;
  data: IOffsetData[];
}

export interface IOffsetData {
  changeKey: string | number;
  changeField: string;
  label: string;
  percentage?: keyof typeof PERCENTAGE;
}
