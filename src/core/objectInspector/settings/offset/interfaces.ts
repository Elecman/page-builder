import type {ISettingsComponent} from '../../interfaces';
import type {IOffsetData} from '../../../styleEditor/offset/interfaces.ts';

export interface IOffsetSettings extends ISettingsComponent {
  label: string;
  data: IOffsetData[];
}
