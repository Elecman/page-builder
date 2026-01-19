import {SettingItemWrapper} from '@/ui/SettingItem/Wrapper';
import {ColorPicker, Flex, Radio, type RadioChangeEvent, Slider, Typography} from 'antd';
import {AggregationColor} from 'antd/es/color-picker/color';
import {useCallback, useMemo} from 'react';

import {getColor, resetGradientType} from '@shared/utils/color';
import {CONIC_GRADIENT, LINEAR_GRADIENT, RADIAL_GRADIENT} from '@shared/utils/color/const.ts';
import {getGradientInfo} from '@shared/utils/color/getGradientInfo.ts';
import {replaceGradientAngle, replaceGradientPosition} from '@shared/utils/color/replaceGradient.ts';

import type {IColorEditor} from './interfaces.ts';

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
	// console.log(memoValue, 'memoValue');
	console.log(memoValue, 'memoValue');

	const handleChangeColor = useCallback(
		(value: AggregationColor) => {
			console.log(value.toCssString(), 'handleChangeColor');
			onChangeValue(value.toCssString());
		},
		[onChangeValue]
	);

	const handleChangeGradientType = useCallback(
		(event: RadioChangeEvent) => {
			const {target} = event;
			if (memoValue?.currentColor && Array.isArray(memoValue?.currentColor)) {
				const replacedValue = resetGradientType(memoValue?.currentColor, target.value);
				if (replacedValue) {
					onChangeValue(replacedValue);
				}
			}
		},
		[memoValue?.currentColor, onChangeValue]
	);

	const handleChangeAngle = useCallback(
		(value: number) => {
			if (summary) {
				onChangeValue(replaceGradientAngle(summary, value));
			}
		},
		[onChangeValue, summary]
	);
	const handleChangePosition = useCallback(
		(value: number, position: string) => {
			if (summary) {
				onChangeValue(replaceGradientPosition(summary, value, position));
			}
		},
		[onChangeValue, summary]
	);

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
			{memoValue?.gradientInfo && (
				<Flex gap={10} vertical justify="space-between">
					<SettingItemWrapper>
						<Flex>
							<Typography.Text>Gradient</Typography.Text>
						</Flex>
						<Radio.Group
							size="small"
							options={[
								{label: 'Linear', value: 'linear-gradient'},
								{label: 'Radial', value: 'radial-gradient'},
								{label: 'Conic', value: 'conic-gradient'}
							]}
							onChange={handleChangeGradientType}
							value={memoValue?.gradientInfo.type}
							optionType="button"
						/>
					</SettingItemWrapper>
					{memoValue.gradientInfo && (
						<>
							{(memoValue?.gradientInfo.type === LINEAR_GRADIENT ||
								memoValue.gradientInfo.type === CONIC_GRADIENT) && (
								<SettingItemWrapper>
									<Typography.Text>Angle</Typography.Text>
									<Flex style={{flexBasis: '60%'}}>
										<Slider
											style={{width: '100%'}}
											step={5}
											min={0}
											max={360}
											defaultValue={memoValue?.gradientInfo.angle}
											onChangeComplete={handleChangeAngle}
										/>
									</Flex>
								</SettingItemWrapper>
							)}
							{(memoValue?.gradientInfo.type === RADIAL_GRADIENT ||
								memoValue?.gradientInfo.type === CONIC_GRADIENT) && (
								<>
									<SettingItemWrapper>
										<Typography.Text>Position X</Typography.Text>
										<Flex style={{flexBasis: '60%'}}>
											<Slider
												style={{width: '100%'}}
												defaultValue={memoValue?.gradientInfo.x}
												onChangeComplete={(value) => handleChangePosition(value, 'x')}
												min={0}
												step={5}
												max={100}
											/>
										</Flex>
									</SettingItemWrapper>
									<SettingItemWrapper>
										<Typography.Text>Position Y</Typography.Text>
										<Flex style={{flexBasis: '60%'}}>
											<Slider
												style={{width: '100%'}}
												step={5}
												defaultValue={memoValue?.gradientInfo.y}
												onChangeComplete={(value) => handleChangePosition(value, 'y')}
												min={0}
												max={100}
											/>
										</Flex>
									</SettingItemWrapper>
								</>
							)}
						</>
					)}
				</Flex>
			)}
		</Flex>
	);
};
