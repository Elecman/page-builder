import {Avatar, Flex} from 'antd';
import {ColorEditor} from '../../../styleEditor/color';
import type {ISettingsComponent} from '../../interfaces';
import {useCallback} from 'react';
import {useNode} from '@craftjs/core';


export const BackgroundSettings = ({key}:ISettingsComponent) => {
  const {
    actions: {setCustom},
    propValue,
  } = useNode((node) => ({
    propValue: node.data.custom.style,
  }));
  const handleChangeBackground = useCallback((value: string) => {
    setCustom(((props) => {
      props['style']['background'] = value;
    }), 500);
  }, [setCustom]);
  return {
    key,
    label:
      (
        <Flex justify="space-between">
          Background
          <Avatar style={{backgroundColor: 'red', verticalAlign: 'middle'}} size="small">
            B
          </Avatar>
        </Flex>
      ),
    style: {
      width: '100%',
    },
    children: <ColorEditor mode={['single', 'gradient']} summary={propValue['background']} onChangeValue={handleChangeBackground} />
  }
}
