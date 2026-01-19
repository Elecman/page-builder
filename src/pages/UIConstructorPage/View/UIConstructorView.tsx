import {Editor} from '@craftjs/core';
import {Layout} from 'antd';

import {HeaderView} from '@shared/components/Header';

import {ExportScheme, UIConstructor} from '@modules/UIConstructor';
import {ConstructorEntities} from '@modules/UIConstructor/consts/ConstructorEntities';

export const UIConstructorView = () => {
	return (
		<Editor resolver={{...ConstructorEntities}}>
			<Layout style={{height: '100vh', background: '#141414', padding: 8, userSelect: 'none'}}>
				<Layout style={{background: '#fff', borderRadius: 8}}>
					<HeaderView>
						<ExportScheme />
					</HeaderView>
					<Layout style={{borderBottomLeftRadius: 8, borderBottomRightRadius: 8, background: '#fff'}}>
						<UIConstructor />
					</Layout>
				</Layout>
			</Layout>
		</Editor>
	);
};
