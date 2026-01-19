import {SRadioButton} from '@/ui/Radio/Button';
import {SRadioGroup} from '@/ui/Radio/Group';
import {SettingItemWrapper} from '@/ui/SettingItem/Wrapper';
import {Flex, Tooltip, Typography} from 'antd';
import {GrFormClose} from 'react-icons/gr';

export const Wrap = () => {
	return (
		<SettingItemWrapper>
			<Flex>
				<Typography.Text>Wrap</Typography.Text>
			</Flex>
			<Flex flex="1 1 auto" justify="end">
				<SRadioGroup size="small">
					<Tooltip title="Nowrap">
						<SRadioButton value="nowrap">
							<GrFormClose />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="Wrap">
						<SRadioButton value="wrap">Wrap</SRadioButton>
					</Tooltip>
					<Tooltip title="Reverse">
						<SRadioButton value="reverse">Reverse</SRadioButton>
					</Tooltip>
				</SRadioGroup>
			</Flex>
		</SettingItemWrapper>
	);
};
