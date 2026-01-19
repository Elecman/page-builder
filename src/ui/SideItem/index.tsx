import {baseStyle} from './styles.ts';
import type {FC, PropsWithChildren} from 'react';

export const SideItem: FC<PropsWithChildren> = ({children}) => {
  return (
    <div css={baseStyle}>
      {children}
    </div>
  );
};
