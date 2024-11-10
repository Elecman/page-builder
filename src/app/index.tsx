import {Layout, Splitter, Tabs, type TabsProps, Typography} from 'antd';
import {Toolbox} from './Toolbox';
import {Topbar} from './Topbar';
import {Editor, Frame, Element} from '@craftjs/core';
import {Components} from '../core/entity';
import {ObjectInspector} from '../core/objectInspector';
import {Layers} from '@craftjs/layers';
import MonacoEditor from '@monaco-editor/react';

export const App = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Tab 1',
      children: <Editor resolver={Components}>
        <Layout style={{height: '100vh'}}>
          <Topbar />
          <Layout>
            <Splitter style={{height: '100%', width: '100%'}}>
              <Splitter.Panel defaultSize="15%">
                <Splitter layout="vertical">
                  <Splitter.Panel>
                    <Typography.Text children="Structure" />
                    <Layers />
                  </Splitter.Panel>
                  <Splitter.Panel>
                    <Typography.Title level={4} children="Object Inspector" />
                    <ObjectInspector />
                  </Splitter.Panel>
                </Splitter>
              </Splitter.Panel>
              <Splitter.Panel defaultSize="70%">
                <Layout style={{padding: '0 24px', margin: '24px 0', height: '100%'}}>
                  <Frame>
                    <Element
                      canvas
                      is={Components.CContainer}
                      id="ROOT_FORM"
                    />
                  </Frame>
                </Layout>
              </Splitter.Panel>
              <Splitter.Panel defaultSize="15%">
                <Toolbox />
              </Splitter.Panel>
            </Splitter>
          </Layout>
        </Layout>
      </Editor>,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: <MonacoEditor height="90vh" defaultLanguage="json" defaultValue="// some comment" />,
    },
  ];
  return (
    <Tabs defaultValue="1" items={items}/>
  );
};
