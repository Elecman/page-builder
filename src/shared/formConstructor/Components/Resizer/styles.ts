import {css} from '@emotion/react';
import styled from 'styled-components';

import type {IUnionStyledComponent} from '@shared/types/FormContainer.ts';

export const StyledResizable = styled('div')<IUnionStyledComponent>(() => ({
	border: '1px dashed transparent'
}));

export const hoverStyle = css({
	border: '1px dashed #7AB2D3'
});
export const selectedStyle = css({
	border: '1px solid #7AB2D3',

	'& .corner': {
		width: 10,
		height: 10,
		background: '#fff',
		border: '2px solid #7AB2D3',
		borderRadius: '50%',
		position: 'relative',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)'
	}
});
