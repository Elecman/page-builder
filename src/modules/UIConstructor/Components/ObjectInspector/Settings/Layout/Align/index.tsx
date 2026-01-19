import {SRadioButton} from '@/ui/Radio/Button';
import {SRadioGroup} from '@/ui/Radio/Group';
import {SettingItemWrapper} from '@/ui/SettingItem/Wrapper';
import {Flex, Tooltip, Typography} from 'antd';
import {LuBaseline} from 'react-icons/lu';
import {
	MdAlignHorizontalCenter,
	MdAlignVerticalBottom,
	MdAlignVerticalCenter,
	MdAlignVerticalTop
} from 'react-icons/md';

export const Align = () => {
	return (
		<SettingItemWrapper>
			<Flex>
				<Typography.Text>Align</Typography.Text>
			</Flex>
			<Flex flex="1 1 auto" justify="end">
				<SRadioGroup size="small">
					<Tooltip title="Start">
						<SRadioButton value="start">
							<MdAlignVerticalTop />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="Center">
						<SRadioButton value="center">
							<MdAlignVerticalCenter />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="End">
						<SRadioButton value="1">
							<MdAlignVerticalBottom />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="Stretch">
						<SRadioButton value="2">
							<MdAlignHorizontalCenter />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="Baseline">
						<SRadioButton value="3">
							<LuBaseline />
						</SRadioButton>
					</Tooltip>
				</SRadioGroup>
			</Flex>
		</SettingItemWrapper>
	);
};
