import {TDataSet} from '@/core/Entity/tDataSet';
import type {UserComponent} from '@craftjs/core';

import {
	Button,
	Checkbox,
	Container,
	DatePicker,
	Divider,
	Form,
	FormContent,
	Header,
	Input,
	Label,
	Select,
	TextArea
} from '@modules/UIConstructor/Components/ConstructorElements';
import {Entity} from '@modules/UIConstructor/types/enums.ts';

export const ConstructorEntities: Record<Entity, UserComponent> = Object.freeze({
	[Entity.Button]: Button,
	[Entity.Input]: Input,
	[Entity.Checkbox]: Checkbox,
	[Entity.DatePicker]: DatePicker,
	[Entity.TextArea]: TextArea,
	[Entity.Form]: Form,
	[Entity.Select]: Select,
	[Entity.Container]: Container,
	[Entity.TDataSet]: TDataSet,
	[Entity.Label]: Label,
	[Entity.Divider]: Divider,
	[Entity.FormContent]: FormContent,
	[Entity.Header]: Header
});
