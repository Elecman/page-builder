import {SRadioGroup} from '@/ui/Radio/Group';
import {SettingItem} from '@/ui/SettingItem';
import {SettingItemWrapper} from '@/ui/SettingItem/Wrapper';
import {Button, ColorPicker, Flex, Input, Typography} from 'antd';
import {BiBorderAll} from 'react-icons/bi';
import {FaBorderNone} from 'react-icons/fa';
import {LuSquareDashed} from 'react-icons/lu';
import {
	MdBorderRight,
	MdBorderTop,
	MdOutlineBorderBottom,
	MdOutlineBorderLeft,
	MdOutlineBorderOuter
} from 'react-icons/md';

import {EntityBox} from '@shared/components/EntityBox';

export const BorderSettings = () => {
	return (
		<EntityBox>
			<SettingItem>
				<Flex style={{width: '100%'}} justify="space-between" align="stretch">
					<Flex style={{width: '30%'}} vertical gap={2}>
						<Flex style={{width: '100%'}} justify="center">
							<Button icon={<MdBorderTop />} size="small" />
						</Flex>
						<Flex justify="center" gap={2}>
							<Flex>
								<Button icon={<MdOutlineBorderLeft />} size="small" />
							</Flex>
							<Flex>
								<Button icon={<MdOutlineBorderOuter />} size="small" />
							</Flex>
							<Flex>
								<Button icon={<MdBorderRight />} size="small" />
							</Flex>
						</Flex>
						<Flex style={{flexBasis: '100%'}} justify="center">
							<Button icon={<MdOutlineBorderBottom />} size="small" />
						</Flex>
					</Flex>

					<Flex style={{width: '60%'}} vertical align="end" gap={4}>
						<Flex style={{width: '100%'}} gap={5} justify="end" align="center">
							<Typography.Text>Style</Typography.Text>
							<SRadioGroup size="small">
								<SRadioGroup.Button>
									<MdOutlineBorderOuter />
								</SRadioGroup.Button>
								<SRadioGroup.Button>
									<LuSquareDashed />
								</SRadioGroup.Button>
								<SRadioGroup.Button>
									<FaBorderNone />
								</SRadioGroup.Button>
								<SRadioGroup.Button>
									<BiBorderAll />
								</SRadioGroup.Button>
							</SRadioGroup>
						</Flex>
						<Flex style={{width: '100%'}} gap={5} justify="end" align="center">
							<Typography.Text>Width</Typography.Text>
							<Input size="small" css={{width: 100}} />
						</Flex>
						<Flex style={{width: '100%'}} gap={5} justify="end" align="center">
							<Typography.Text>Color</Typography.Text>
							<ColorPicker size="small" showText allowClear />
						</Flex>
					</Flex>
				</Flex>
			</SettingItem>
		</EntityBox>
	);
};
