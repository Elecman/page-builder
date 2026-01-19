import {type PropsWithChildren, forwardRef} from 'react';

import {baseContainerStyle, baseWrapperItemStyle} from './styles.ts';

export const EntityItem = forwardRef<HTMLDivElement, PropsWithChildren>(({children}, ref) => {
	return (
		<div css={baseContainerStyle} ref={ref}>
			<div css={baseWrapperItemStyle}>{children}</div>
		</div>
	);
});
