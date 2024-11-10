import {Collapse} from 'antd';
import {Layout} from '../../../../ui/Layout';
import {OffsetSettings} from '../../../objectInspector/settings/offset';
import {MarginData, PaddingData} from '../../../objectInspector/settings/offset/const.ts';
import {BackgroundSettings} from '../../../objectInspector/settings/background';

export const ContainerSettings = () => {
  return (
    <Layout>
      <Collapse style={{width: '100%'}} size="small" items={
        [
          OffsetSettings({key: 1, label: 'Margin', data: MarginData}),
          OffsetSettings({key: 2, label: 'Padding', data: PaddingData}),
          BackgroundSettings({key: 3})
        ]
      }
      />
    </Layout>
  );
};
