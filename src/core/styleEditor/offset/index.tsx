import {Flex, Select, Slider} from 'antd';
import type {IOffsetEditor} from './interfaces.ts';
import {useCallback, useEffect, useState} from 'react';
import type {DefaultOptionType} from 'rc-select/lib/Select';
import {DEFAULT_OPTION, PERCENTAGE} from './const.ts';

export const OffsetEditor = (props: IOffsetEditor) => {
  const {data, onChangeValue, summary, ...rest} = props;
  const [percentage, setPercentage] = useState<Record<string, DefaultOptionType>>({});

  const handleChangeSelect = useCallback((options: DefaultOptionType, key: string | number) => {
    setPercentage(prevState => ({
      ...prevState,
      [key]: options
    }));
  }, []);

  const handleChange = useCallback((value: number, changeField: string, changeKey: string | number) => {
    onChangeValue(value, changeField, changeKey, percentage[changeKey].value as string ?? PERCENTAGE[0]);
  }, [onChangeValue, percentage]);

  useEffect(() => {
    if (data.length) {
      data.map((value) => {
        setPercentage(prevState => ({
          ...prevState,
          [value.changeKey]: {
            ...DEFAULT_OPTION,
            key: value.changeKey
          }
        }));
      });
    }
  }, [data]);
  return (
    <Flex vertical>
      {
        data.map((data) => {
          return (
            <Flex style={{padding: '0 10px'}} gap={10} key={data.changeKey} justify="space-between">
              <Flex flex="80% 0">
                <Slider style={{width: '100%'}} marks={{label: data.label}}
                        value={typeof summary === 'object' ? parseInt(summary?.[data.changeField]?.[data.changeKey]) : summary}
                        onChange={(value) => handleChange(value, data.changeField, data.changeKey)} {...rest} />
              </Flex>
              <Flex flex="1 1">
                <Select style={{width: '100%'}}
                        onChange={(_, option) => handleChangeSelect(option, data.changeKey)}
                        options={PERCENTAGE.map((a) => ({value: a, label: a}))}
                        value={percentage[data.changeKey]?.value} />
              </Flex>
            </Flex>
          );
        })
      }
    </Flex>
  );
};
