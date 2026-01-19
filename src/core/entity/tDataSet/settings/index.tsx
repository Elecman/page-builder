import {Button, Card, Collapse, Divider, Flex, Form, Input, Typography} from 'antd';
import {IoSettingsOutline} from 'react-icons/io5';
import {useWatch} from 'antd/es/form/Form';
import {CloseOutlined} from '@ant-design/icons';
import {useNode} from '@craftjs/core';

export const TDataSetSettings = () => {
  const [form] = Form.useForm();
  const data = useWatch('keyMapping', form);
  const {
    actions: {setCustom},
    customProps,
    node,
  } = useNode((node) => ({
    customProps: node.data.custom,
    node,
  }));
  console.log(node, 'node');
  return (
    <Collapse
      style={{width: '100%'}}
      size="small"
      items={
        [
          {
            key: 0,
            label: (
              <Flex>
                Settings
              </Flex>
            ),
            children: (
              <Flex vertical gap={10}>
                <Flex gap={10}>
                  <Input addonBefore="name" defaultValue="" />
                </Flex>
                <Flex gap={10}>
                  <Input disabled addonBefore="id" defaultValue={node.id} />
                </Flex>
                <Flex gap={10}>
                  <Input addonBefore="type" disabled defaultValue="TDataSet" />
                </Flex>
                <Flex vertical gap={10}>
                  <Form
                    form={form}
                    name="dynamic_form_complex"
                    autoComplete="off"
                    initialValues={{keyMapping: [], primaryKeys: [], params: []}}
                  >
                    <Flex vertical gap={10}>
                      <Flex>
                        <Input addonBefore="dbClass" name="dbClass" />
                      </Flex>
                      <Flex>
                        <Input addonBefore="dbTable" name="dbTable" />
                      </Flex>
                      <Flex>
                        <Input addonBefore="dbView" name="dbView" />
                      </Flex>
                      <Flex>
                        <Input addonBefore="masterDS" name="masterDS" />
                      </Flex>
                      <Flex vertical>
                        <Card size="small" title="Add keyMapping">
                          <Form.List name="keyMapping">
                            {(fields, {add, remove}) => (
                              <Flex vertical gap={10}>
                                {fields.map((field) => (
                                  <Form.Item noStyle key={field.key} name={[field.name, 'value']}>
                                    <Input addonBefore="value" addonAfter={<CloseOutlined
                                      onClick={() => {
                                        remove(field.name);
                                      }}
                                    />} />
                                  </Form.Item>
                                ))}

                                <Button type="dashed" onClick={() => add()} block>
                                  + Add Item
                                </Button>
                              </Flex>
                            )}
                          </Form.List>
                        </Card>
                      </Flex>
                      <Flex vertical>
                        <Card size="small" title="Add primaryKeys">
                          <Form.List name="primaryKeys">
                            {(fields, {add, remove}) => (
                              <Flex vertical gap={10}>
                                {fields.map((field) => (
                                  <Form.Item noStyle key={field.key} name={[field.name, 'value']}>
                                    <Input addonBefore="value" addonAfter={<CloseOutlined
                                      onClick={() => {
                                        remove(field.name);
                                      }}
                                    />} />
                                  </Form.Item>
                                ))}

                                <Button type="dashed" onClick={() => add()} block>
                                  + Add Item
                                </Button>
                              </Flex>
                            )}
                          </Form.List>
                        </Card>
                      </Flex>
                      <Flex vertical>
                        <Card size="small" title="Add params">
                          <Form.List name="params">
                            {(fields, {add, remove}) => (
                              <Flex vertical gap={10}>
                                {fields.map((field) => (
                                  <Flex vertical justify="space-between" gap={5}>
                                    <Flex gap={10}>
                                      <Flex vertical gap={10}>
                                        <Form.Item noStyle name={[field.name, 'name']}>
                                          <Input addonBefore="name" />
                                        </Form.Item>
                                        <Form.Item noStyle name={[field.name, 'type']}>
                                          <Input addonBefore="type" />
                                        </Form.Item>
                                        <Form.Item noStyle name={[field.name, 'value']}>
                                          <Input addonBefore="value" />
                                        </Form.Item>
                                      </Flex>
                                      <Flex>
                                        <CloseOutlined
                                          onClick={() => {
                                            remove(field.name);
                                          }}
                                        />
                                      </Flex>
                                    </Flex>
                                    {fields.length > 1 && <Divider />}
                                  </Flex>
                                ))}

                                <Button type="dashed" onClick={() => add()} block>
                                  + Add Item
                                </Button>
                              </Flex>
                            )}
                          </Form.List>
                        </Card>
                      </Flex>
                    </Flex>

                    <Form.Item noStyle shouldUpdate>
                      {() => (
                        <Typography>
                          <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
                        </Typography>
                      )}
                    </Form.Item>
                  </Form>
                </Flex>
              </Flex>
            ),
            extra: <IoSettingsOutline size={20} />
          },
        ]
      }
    />
  );
};
