import {createHashRouter} from 'react-router';

export const AppRoutes = createHashRouter([
	{
		path: '',
		index: true,
		lazy: async () => {
			const Page = await import('@pages/UIConstructorPage');
			return {Component: Page.UIConstructorView};
		}
	}
]);
