import type {UserComponent} from '@craftjs/core';
import {Container} from './container';
import {Button} from './button';

export enum Entity {
  CContainer = 'CContainer',
  CButton = 'CButton'
}

export const Components: Record<Entity, UserComponent> = {
  [Entity.CButton]: Button,
  [Entity.CContainer]: Container
};
