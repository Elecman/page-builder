import {SRadioButton} from '@/ui/Radio/Button';
import {SRadioGroup} from '@/ui/Radio/Group';
import {SettingItemWrapper} from '@/ui/SettingItem/Wrapper';
import {Flex, Tooltip, Typography} from 'antd';
import {BsAlignCenter, BsAlignEnd, BsAlignStart} from 'react-icons/bs';
import {LuAlignHorizontalSpaceAround} from 'react-icons/lu';
import {RxSpaceBetweenHorizontally} from 'react-icons/rx';

export const Justify = () => {
	return (
		<SettingItemWrapper>
			<Flex>
				<Typography.Text>Justify</Typography.Text>
			</Flex>
			<Flex flex="1 1 auto" justify="end">
				<SRadioGroup size="small">
					<Tooltip title="Start">
						<SRadioButton value="1">
							<BsAlignStart />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="Center">
						<SRadioButton value="2">
							<BsAlignCenter />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="End">
						<SRadioButton value="3">
							<BsAlignEnd />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="Between">
						<SRadioButton value="4">
							<RxSpaceBetweenHorizontally />
						</SRadioButton>
					</Tooltip>
					<Tooltip title="Around">
						<SRadioButton value="5">
							<LuAlignHorizontalSpaceAround />
						</SRadioButton>
					</Tooltip>
				</SRadioGroup>
			</Flex>
		</SettingItemWrapper>
	);
};
