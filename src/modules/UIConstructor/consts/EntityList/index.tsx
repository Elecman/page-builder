import {BsBoundingBoxCircles} from '@react-icons/all-files/bs/BsBoundingBoxCircles';
import {GoDatabase} from '@react-icons/all-files/go/GoDatabase';
import {Typography} from 'antd';
import type {CollapseProps} from 'antd/es/collapse/Collapse';
import {BsCalendar2Date, BsFillMenuButtonWideFill, BsTextareaResize} from 'react-icons/bs';
import {LuCaptions, LuTableColumnsSplit} from 'react-icons/lu';
import {PiTable} from 'react-icons/pi';
import {RxButton, RxCheckbox, RxInput, RxVideo} from 'react-icons/rx';
import {TfiLayoutTab} from 'react-icons/tfi';

import {EntityBox, EntityItem} from '@shared/components/EntityBox';

import {DraggedEntity} from '@modules/UIConstructor/Components/ObjectsList/withEntityBox';
import {Entity} from '@modules/UIConstructor/types/enums.ts';

export const EntityList: CollapseProps['items'] = [
	{
		key: 'Containers',
		label: 'Containers',
		children: (
			<EntityBox>
				<DraggedEntity type={Entity.Container}>
					<BsBoundingBoxCircles size={18} />
					<Typography.Text>Container</Typography.Text>
				</DraggedEntity>
			</EntityBox>
		)
	},
	{
		key: 'Basic',
		label: 'Basic',
		children: (
			<EntityBox>
				<DraggedEntity type={Entity.Button}>
					<RxButton size={18} />
					<Typography.Text>Button</Typography.Text>
				</DraggedEntity>
				<DraggedEntity type={Entity.Divider}>
					<LuTableColumnsSplit size={18} />
					<Typography.Text>Divider</Typography.Text>
				</DraggedEntity>
				<DraggedEntity type={Entity.Label}>
					<LuCaptions size={18} />
					<Typography.Text>Label</Typography.Text>
				</DraggedEntity>
			</EntityBox>
		)
	},
	{
		key: 'Navigation',
		label: 'Navigation',
		children: (
			<EntityBox>
				<EntityItem>
					<TfiLayoutTab size={18} />
					<Typography.Text>Tabs</Typography.Text>
				</EntityItem>
			</EntityBox>
		)
	},
	{
		key: 'Media',
		label: 'Media',
		children: (
			<EntityBox>
				<EntityItem>
					<RxVideo size={18} />
					<Typography.Text>Video</Typography.Text>
				</EntityItem>
			</EntityBox>
		)
	},
	{
		key: 'Data',
		label: 'Data',
		children: (
			<EntityBox>
				<DraggedEntity type={Entity.TDataSet}>
					<GoDatabase size={18} />
					<Typography.Text>DataSet</Typography.Text>
				</DraggedEntity>
				<EntityItem>
					<PiTable size={18} />
					<Typography.Text>Table</Typography.Text>
				</EntityItem>
			</EntityBox>
		)
	},
	{
		key: 'Form',
		label: 'Form',
		children: (
			<EntityBox>
				<DraggedEntity type={Entity.Input}>
					<RxInput size={18} />
					<Typography.Text>Input</Typography.Text>
				</DraggedEntity>
				<DraggedEntity type={Entity.Select}>
					<BsFillMenuButtonWideFill size={18} />
					<Typography.Text>Select</Typography.Text>
				</DraggedEntity>
				<DraggedEntity type={Entity.Checkbox}>
					<RxCheckbox size={18} />
					<Typography.Text>Checkbox</Typography.Text>
				</DraggedEntity>
				<DraggedEntity type={Entity.DatePicker}>
					<BsCalendar2Date size={18} />
					<Typography.Text>Date Picker</Typography.Text>
				</DraggedEntity>
				<DraggedEntity type={Entity.TextArea}>
					<BsTextareaResize size={18} />
					<Typography.Text>Text Area</Typography.Text>
				</DraggedEntity>
			</EntityBox>
		)
	}
];
