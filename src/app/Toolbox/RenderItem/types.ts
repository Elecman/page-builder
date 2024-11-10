import {Entity} from '../../../core/entity';
import type {ReactElement} from 'react';

export interface IRenderItem {
  type: Entity;
  icon: ReactElement
}
