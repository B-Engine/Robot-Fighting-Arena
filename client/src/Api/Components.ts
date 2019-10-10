import { socket } from './Api';
import { Entity } from 'shared/Utilities/Entity';
import { EntityType } from 'shared/Utilities/EntityTypes';
import { BaseComponent } from 'shared/Types';

type ComponentEntity = Entity<EntityType.Component, BaseComponent, 0>;

export function getComponentData(id: string) {
  return new Promise<ComponentEntity | undefined>(resolve => {
    socket.emit('getComponentData', id, (data?: ComponentEntity) => {
      resolve(data);
    });
  });
}
