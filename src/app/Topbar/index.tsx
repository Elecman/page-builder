import {Col, Row, Switch, Typography, Layout, theme, Button} from 'antd';
import {useEditor} from '@craftjs/core';

const {Header} = Layout;

export const Topbar = () => {
  const {
    token: {colorBgContainer},
  } = theme.useToken();
  const {store} = useEditor();
  return (
    <Header style={{padding: '0 24px', background: colorBgContainer}}>
      <Row align="middle" justify="space-between">
        <Col><Switch /></Col>
        <Col><Typography.Title level={4} style={{margin: 0}}>Base page editor</Typography.Title></Col>
        <Col><Button onClick={() => {
          console.log(store.getState());
        }}>To JSON</Button></Col>
      </Row>
    </Header>
  );
};
