import * as path from 'node:path';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react',
			babel: {
				plugins: [['@babel/plugin-proposal-decorators', {version: '2023-11'}]]
			}
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@config': path.resolve(__dirname, './src/app/config'),
			'@providers': path.resolve(__dirname, './src/app/providers'),
			'@routes': path.resolve(__dirname, './src/app/routes'),
			'@services': path.resolve(__dirname, './src/app/services'),
			'@stores': path.resolve(__dirname, './src/app/stores'),
			'@modules': path.resolve(__dirname, './src/modules'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@shared': path.resolve(__dirname, './src/shared/'),
			'@shared/components': path.resolve(__dirname, './src/shared/components'),
			'@shared/const': path.resolve(__dirname, './src/shared/const'),
			'@shared/enums': path.resolve(__dirname, './src/shared/enums'),
			'@shared/styles': path.resolve(__dirname, './src/shared/styles'),
			'@shared/types': path.resolve(__dirname, './src/shared/types'),
			'@shared/ui': path.resolve(__dirname, './src/shared/ui'),
			'@shared/utils': path.resolve(__dirname, './src/shared/utils')
		}
	},
	base: '/#'
});
