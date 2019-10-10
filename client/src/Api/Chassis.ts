import { socket } from './Api';
import { Entity } from 'shared/Utilities/Entity';
import { EntityType } from 'shared/Utilities/EntityTypes';
import { BaseChassis } from 'shared/Types';

type ChassisEntity = Entity<EntityType.Chassis, BaseChassis, 0>;

export function getChassisData(id: string) {
  return new Promise<ChassisEntity | undefined>(resolve => {
    socket.emit('getChassisData', id, (data?: ChassisEntity) => {
      resolve(data);
    });
  });
}
