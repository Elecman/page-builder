import {SRadioButton} from '@/ui/Radio/Button';
import {SRadioGroup} from '@/ui/Radio/Group';
import {SettingItemWrapper} from '@/ui/SettingItem/Wrapper';
import {Flex, type RadioChangeEvent, Tooltip, Typography} from 'antd';
import {useCallback} from 'react';
import {GoArrowDown, GoArrowRight} from 'react-icons/go';

import type {ISettingsComponent} from '@modules/UIConstructor/Components/ObjectInspector/Settings/interfaces/ISettingsComponent.tsx';

interface IDirectionProps extends ISettingsComponent {
	onChange: (value: string) => void;
}

export const Direction = ({summary, onChange}: IDirectionProps) => {
	const handleChange = useCallback(
		(e: RadioChangeEvent) => {
			onChange(e.target.value);
		},
		[onChange]
	);

	return (
		<SettingItemWrapper>
			<Flex>
				<Typography.Text>Direction</Typography.Text>
			</Flex>
			<Flex flex="1 1 auto" justify="end">
				<SRadioGroup size="small" onChange={handleChange} defaultValue={summary}>
					<Tooltip title="Place flex items horizontally">
						<SRadioButton value="row">
							<GoArrowRight />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="Place flex items vertically">
						<SRadioButton value="column">
							<GoArrowDown />
						</SRadioButton>
					</Tooltip>
				</SRadioGroup>
			</Flex>
		</SettingItemWrapper>
	);
};
