import type {UserComponent} from '@craftjs/core';
import {TDataSetSettings} from './settings';

export const TDataSet: UserComponent = (props) => {
  return <div hidden {...props} />;
};

TDataSet.craft = {
  displayName: 'TDataSet',
  related: {
    toolbar: TDataSetSettings
  },
  rules: {
    canDrag(): boolean {
      return false;
    }
  }
};
