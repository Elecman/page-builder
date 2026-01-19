import {Element, Frame, useEditor} from '@craftjs/core';
import {Layout, Splitter} from 'antd';

import {Form} from '@modules/UIConstructor/Components/ConstructorElements';

import {LeftPanel, RightPanel, ToolBar} from '../Components';

export const UIConstructor = () => {
	const {connectors} = useEditor();

	return (
		<Splitter style={{height: '100%'}}>
			<Splitter.Panel defaultSize="15%">
				<LeftPanel />
			</Splitter.Panel>
			<Splitter.Panel defaultSize="70%">
				<Layout
					css={{width: '100%', height: '100%'}}
					ref={(ref) => {
						if (ref) {
							connectors.select(connectors.hover(ref, ''), '');
						}
					}}
				>
					<ToolBar />
					<Layout
						css={{
							margin: 12
						}}
					>
						<Frame>
							<Element canvas id="CForm" is={Form} />
						</Frame>
					</Layout>
				</Layout>
			</Splitter.Panel>
			<Splitter.Panel defaultSize="15%">
				<RightPanel />
			</Splitter.Panel>
		</Splitter>
	);
};
