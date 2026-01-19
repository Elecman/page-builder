import {css} from '@emotion/react';

export const baseContainerStyle = css({
	display: 'flex',
	flexGrow: 1,
	flexDirection: 'column',
	background: '#fff',
	borderRadius: 4,
	border: '1px dashed #f0f0f0',
	padding: '10px 6px 6px',
	transition: '0.3s all',
	transitionTimingFunction: 'cubic-bezier(.4,0,.2,1)',
	userSelect: 'none',
	flexBasis: 89,

	'& span': {
		fontSize: 11
	},

	'&:hover': {
		cursor: 'grab',
		borderColor: '#0050b3',

		'& svg': {
			color: '#0050b3'
		}
	}
});

export const baseWrapperItemStyle = css({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	gap: 4
});
