import {SRadioButton} from '@/ui/Radio/Button';
import {SRadioGroup} from '@/ui/Radio/Group';
import {SettingItem} from '@/ui/SettingItem';
import {css} from '@emotion/react';
import {Flex, Input, Tooltip, Typography} from 'antd';
import {useCallback, useState} from 'react';
import {LuLockKeyhole, LuLockKeyholeOpen} from 'react-icons/lu';

import {EntityBox} from '@shared/components/EntityBox';

import {ESizes} from '../enums.ts';
import {
	bottomInputBorder,
	leftInputBorder,
	marginContainerStyle,
	marginText,
	paddingContainerStyle,
	paddingText,
	rightInputBorder,
	topInputBorder
} from './styles.ts';

export const SpacingSettings = () => {
	const [isIndividual, setIndividual] = useState<ESizes>(ESizes.ALL);

	const handleSelectIndividual = useCallback(() => {
		setIndividual(ESizes.INDIVIDUAL);
	}, []);

	const handleSelectAll = useCallback(() => {
		setIndividual(ESizes.ALL);
	}, []);

	return (
		<EntityBox>
			<SettingItem>
				<div css={marginContainerStyle}>
					<Flex css={marginText}>
						<Typography.Text>margin</Typography.Text>
					</Flex>
					<Flex css={css({width: '100%'})} justify="center">
						<Flex css={topInputBorder}>
							<Input size="small" variant="filled" />
						</Flex>
					</Flex>
					<Flex css={css({width: '20%'})} justify="center">
						<Flex css={leftInputBorder}>
							<Input size="small" variant="filled" />
						</Flex>
					</Flex>
					<Flex css={css({width: '60%'})}>
						<div css={paddingContainerStyle}>
							<Flex css={paddingText}>
								<Typography.Text>padding</Typography.Text>
							</Flex>
							<Flex css={css({width: '100%'})} justify="center">
								<Flex
									css={css({
										width: '35%',
										padding: '2px 0'
									})}
								>
									<Input size="small" variant="filled" />
								</Flex>
							</Flex>
							<Flex css={css({width: '35%'})} justify="center">
								<Flex
									css={css({
										width: '100%',
										padding: '0 2px'
									})}
								>
									<Input size="small" variant="filled" />
								</Flex>
							</Flex>
							<Flex css={css({width: '30%'})} justify="center">
								{isIndividual === ESizes.ALL && (
									<SRadioGroup size="small" onChange={handleSelectIndividual}>
										<Tooltip title="Individual Padding and Margin">
											<SRadioButton value={ESizes.INDIVIDUAL}>
												<LuLockKeyholeOpen />
											</SRadioButton>
										</Tooltip>
									</SRadioGroup>
								)}

								{isIndividual === ESizes.INDIVIDUAL && (
									<SRadioGroup size="small" value={isIndividual}>
										<Tooltip title="Individual Padding and Margin">
											<SRadioButton onClick={handleSelectAll} value={ESizes.INDIVIDUAL}>
												<LuLockKeyhole />
											</SRadioButton>
										</Tooltip>
									</SRadioGroup>
								)}
							</Flex>
							<Flex css={css({width: '35%'})} justify="center">
								<Flex
									css={css({
										width: '100%',
										padding: '0 2px'
									})}
								>
									<Input size="small" variant="filled" />
								</Flex>
							</Flex>
							<Flex css={css({width: '100%'})} justify="center">
								<Flex
									css={css({
										width: '35%',
										padding: '2px 0'
									})}
								>
									<Input size="small" variant="filled" />
								</Flex>
							</Flex>
						</div>
					</Flex>
					<Flex css={css({width: '20%'})} justify="center">
						<Flex css={rightInputBorder}>
							<Input size="small" variant="filled" />
						</Flex>
					</Flex>
					<Flex css={css({width: '100%'})} justify="center">
						<Flex css={bottomInputBorder}>
							<Input size="small" variant="filled" />
						</Flex>
					</Flex>
				</div>
			</SettingItem>
		</EntityBox>
	);
};
