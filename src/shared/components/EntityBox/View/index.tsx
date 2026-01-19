import {type PropsWithChildren, forwardRef} from 'react';

import {baseStyle} from './styles.ts';

export const EntityBox = forwardRef<HTMLDivElement, PropsWithChildren>(({children}, ref) => {
	return (
		<div css={baseStyle} ref={ref}>
			{children}
		</div>
	);
});
