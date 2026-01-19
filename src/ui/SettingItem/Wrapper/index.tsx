import type {FC, PropsWithChildren} from 'react';
import {baseStyle} from './styles.ts';

export const SettingItemWrapper: FC<PropsWithChildren> = ({children}) => {
  return (
    <div css={baseStyle}>
      {children}
    </div>
  );
};
