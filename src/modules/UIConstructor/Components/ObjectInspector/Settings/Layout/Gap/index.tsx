import {SInput} from '@/ui/Input';
import {SRadioButton} from '@/ui/Radio/Button';
import {SRadioGroup} from '@/ui/Radio/Group';
import {SettingItemWrapper} from '@/ui/SettingItem/Wrapper';
import {Flex, Input, Tooltip, Typography} from 'antd';
import {useCallback, useState} from 'react';
import {LuLockKeyhole, LuLockKeyholeOpen} from 'react-icons/lu';

import {ESizes} from '../../enums.ts';

export const Gap = () => {
	const [isIndividual, setIndividual] = useState<ESizes>(ESizes.ALL);

	const handleSelectIndividual = useCallback(() => {
		setIndividual(ESizes.INDIVIDUAL);
	}, []);

	const handleSelectAll = useCallback(() => {
		setIndividual(ESizes.ALL);
	}, []);

	return (
		<SettingItemWrapper>
			<Flex>
				<Typography.Text>Gap</Typography.Text>
			</Flex>
			{isIndividual === ESizes.ALL && (
				<Flex justify="end" gap={4} style={{flexBasis: '60%'}}>
					<Input size="small" />
					<SRadioGroup size="small" onChange={handleSelectIndividual}>
						<Tooltip title="Individual gaps for columns and rows">
							<SRadioButton value={ESizes.INDIVIDUAL}>
								<LuLockKeyholeOpen />
							</SRadioButton>
						</Tooltip>
					</SRadioGroup>
				</Flex>
			)}

			{isIndividual === ESizes.INDIVIDUAL && (
				<Flex gap={4} align="start" style={{flexBasis: '70%'}}>
					<Flex vertical align="center">
						<SInput size="small" addonAfter="px" />
						<Typography.Text style={{fontSize: 11}}>Row</Typography.Text>
					</Flex>
					<Flex vertical align="center">
						<SInput size="small" addonAfter="px" />
						<Typography.Text style={{fontSize: 11}}>Column</Typography.Text>
					</Flex>
					<SRadioGroup size="small" value={isIndividual}>
						<Tooltip title="Individual gaps for columns and rows">
							<SRadioButton onClick={handleSelectAll} value={ESizes.INDIVIDUAL}>
								<LuLockKeyhole />
							</SRadioButton>
						</Tooltip>
					</SRadioGroup>
				</Flex>
			)}
		</SettingItemWrapper>
	);
};
