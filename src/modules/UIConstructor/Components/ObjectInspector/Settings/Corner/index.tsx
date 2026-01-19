import {SettingItem} from '@/ui/SettingItem';
import {Button, Input, Space} from 'antd';
import {useCallback, useState} from 'react';
import {LuLockKeyhole, LuLockKeyholeOpen} from 'react-icons/lu';
import {PiCornersOut} from 'react-icons/pi';

import {EntityBox} from '@shared/components/EntityBox';

export const CornerSettings = () => {
	const [isIndividual, setIndividual] = useState(false);
	const handleSetIndividual = useCallback(() => {
		setIndividual((prevState) => !prevState);
	}, []);
	return (
		<EntityBox>
			<SettingItem>
				<Space.Compact size="small" style={{width: '100%'}}>
					<Button disabled icon={<PiCornersOut />} />
					{!isIndividual && (
						<>
							<Input size="small" />
							<Input size="small" />
							<Input size="small" />
							<Input size="small" />
						</>
					)}

					{isIndividual && <Input size="small" />}

					{isIndividual && <Button onClick={handleSetIndividual} icon={<LuLockKeyholeOpen />} />}
					{!isIndividual && <Button onClick={handleSetIndividual} icon={<LuLockKeyhole />} />}
				</Space.Compact>
			</SettingItem>
		</EntityBox>
	);
};
