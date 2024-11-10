import {ColorPicker, Flex, Radio, type RadioChangeEvent, Slider, Typography} from 'antd';
import type {IColorEditor} from './interfaces.ts';
import {useCallback, useMemo} from 'react';
import {getColor, resetGradientType} from '../../../ui/utils/color';
import {AggregationColor} from 'antd/es/color-picker/color';
import {CONIC_GRADIENT, LINEAR_GRADIENT, RADIAL_GRADIENT} from '../../../ui/utils/color/const.ts';
import {replaceGradientAngle, replaceGradientPosition} from '../../../ui/utils/color/replaceGradient';
import {getGradientInfo} from '../../../ui/utils/color/getGradientInfo.ts';

export const ColorEditor = (props: IColorEditor) => {
  const {onChangeValue, summary, ...rest} = props;
  const memoValue = useMemo(() => {
    if (summary) {
      return {
        currentColor: getColor(summary),
        gradientInfo: getGradientInfo(summary)
      };
    }
    return undefined;
  }, [summary]);

  const handleChangeColor = useCallback((value: AggregationColor) => {
    onChangeValue(value.toCssString());
  }, [onChangeValue]);

  const handleChangeGradientType = useCallback((event: RadioChangeEvent) => {
    const {target} = event;
    if (memoValue?.currentColor && Array.isArray(memoValue?.currentColor)) {
      const replacedValue = resetGradientType(memoValue?.currentColor, target.value);
      if (replacedValue) {
        onChangeValue(replacedValue);
      }
    }
  }, [memoValue?.currentColor, onChangeValue]);

  const handleChangeAngle = useCallback((value: number) => {
    if (summary) {
      onChangeValue(replaceGradientAngle(summary, value));
    }
  }, [onChangeValue, summary]);
  const handleChangePosition = useCallback((value: number, position: string) => {
    if (summary) {
      onChangeValue(replaceGradientPosition(summary, value, position));
    }
  }, [onChangeValue, summary]);
  console.log(summary, 'summary');
  console.log(getGradientInfo(summary ?? ''), 'summary[1]2');
  console.log(memoValue, 'memoValue');
  return (
    <Flex gap={10} vertical>
      <Flex gap={10}>
        <ColorPicker
          {...rest}
          allowClear
          showText
          defaultValue={memoValue?.currentColor}
          onChangeComplete={handleChangeColor}
        />
      </Flex>
      {
        memoValue?.gradientInfo && (
          <Flex gap={10} vertical justify="space-between">
            <Flex flex="1 1" vertical justify="start" align="start">
              <Flex flex="1 1">
                <Typography.Text>Gradient</Typography.Text>
              </Flex>
              <Flex flex="1 1 100%">
                <Radio.Group
                  options={[
                    {label: 'Linear', value: 'linear-gradient'},
                    {label: 'Radial', value: 'radial-gradient'},
                    {label: 'Conic', value: 'conic-gradient'},
                  ]}
                  onChange={handleChangeGradientType}
                  value={memoValue?.gradientInfo.type} optionType="button" />
              </Flex>
            </Flex>
            {
              memoValue.gradientInfo && (
                <Flex gap={30} flex="1 1 auto" align="start" justify="space-between">
                  {
                    (memoValue?.gradientInfo.type === LINEAR_GRADIENT || memoValue.gradientInfo.type === CONIC_GRADIENT) && (
                      <Flex align="center" wrap flex="1 1">
                        <Flex flex="auto">
                          <Typography.Text>Angle</Typography.Text>
                        </Flex>
                        <Flex flex="100%">
                          <Slider
                            style={{width: '100%'}}
                            marks={{
                              0: '0',
                              360: '360',
                            }}
                            step={5}
                            min={0}
                            max={360}
                            defaultValue={memoValue?.gradientInfo.angle}
                            onChangeComplete={handleChangeAngle} />
                        </Flex>
                      </Flex>
                    )
                  }
                  {
                    (memoValue?.gradientInfo.type === RADIAL_GRADIENT || memoValue?.gradientInfo.type === CONIC_GRADIENT) && (
                      <Flex align="center" wrap flex="1 1">
                        <Flex>
                          <Typography.Text>Position</Typography.Text>
                        </Flex>
                        <Flex flex="1 1 100%" align="center">
                          <Flex flex="20%">
                            <Typography.Text>X</Typography.Text>
                          </Flex>
                          <Flex flex="1 1 80%">
                            <Slider
                              style={{width: '100%'}}
                              marks={{
                                0: '0',
                                100: '100',
                              }}
                              defaultValue={memoValue?.gradientInfo.x}
                              onChangeComplete={(value) => handleChangePosition(value, 'x')}
                              min={0}
                              step={5}
                              max={100} />
                          </Flex>
                        </Flex>
                        <Flex flex="1 1 100%" align="center">
                          <Flex flex="20%">
                            <Typography.Text>Y</Typography.Text>
                          </Flex>
                          <Flex flex="1 1 80%">
                            <Slider
                              style={{width: '100%'}}
                              marks={{
                                0: '0',
                                100: '100',
                              }}
                              step={5}
                              defaultValue={memoValue?.gradientInfo.y}
                              onChangeComplete={(value) => handleChangePosition(value, 'y')}
                              min={0}
                              max={100} />
                          </Flex>
                        </Flex>
                      </Flex>
                    )
                  }
                </Flex>
              )
            }
          </Flex>
        )
      }
    </Flex>
  );
};
