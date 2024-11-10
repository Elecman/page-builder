import {OffsetEditor} from '../../../styleEditor/offset';
import {useCallback, useMemo} from 'react';
import {useNode} from '@craftjs/core';
import type {IOffsetSettings} from './interfaces.ts';

export const OffsetSettings = ({key, label, data}: IOffsetSettings) => {
  const {
    actions: {setCustom},
    propValue,
  } = useNode((node) => ({
    propValue: node.data.custom.style,
  }));
  const summaryMargin = useMemo(() => {
    return data.map(data => `${propValue[data.changeField][data.changeKey]}`);
  }, [data, propValue]);

  const handleChangeOffset = useCallback((value: number, field: string, key: string | number, percentage: string) => {
    setCustom(((props: any) => {
      props['style'][field][key] = `${value}${percentage}`;
    }), 500);
  }, [setCustom]);

  return {
    key,
    label: `${label} ${summaryMargin.join(' ')}`,
    children: <OffsetEditor summary={propValue} onChangeValue={handleChangeOffset} data={data} />
  };
};
