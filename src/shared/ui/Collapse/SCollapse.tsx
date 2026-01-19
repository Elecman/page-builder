import {Collapse} from 'antd';
import type {CollapseProps} from 'antd/es/collapse/Collapse';
import {forwardRef} from 'react';

import {baseStyle} from './styles';

export const SCollapse = forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
	return <Collapse ref={ref} {...props} css={baseStyle} />;
});
