import {Col, Layout, Row, Space, theme, Typography} from 'antd';

import {Entity} from '../../core/entity';
import {RenderItem} from './RenderItem';
import {RxButton} from 'react-icons/rx';
import {PiRectangleDuotone} from 'react-icons/pi';

const {Sider} = Layout;
const ToolBoxData = [
  {
    label: 'CContainer',
    type: Entity.CContainer,
    icon: <PiRectangleDuotone />,
  },
  {
    label: 'CButton',
    type: Entity.CButton,
    icon: <RxButton />,
  }
];
export const Toolbox = () => {
  const {
    token: {colorBgContainer},
  } = theme.useToken();

  return (
    <Sider width="100%" style={{background: colorBgContainer, padding: 5}}>
      <Row gutter={[10, 20]}>
        <Col span={24}><Typography.Title level={4}>Palette</Typography.Title></Col>
        {
          ToolBoxData.map((data) => {
            return (
              <Col span={24} key={data.type}>
                <RenderItem type={data.type} icon={data.icon}>
                  {data.label}
                </RenderItem>
              </Col>
            );
          })
        }
      </Row>
    </Sider>
  );
};
