import { socket } from './Api';
import { Entity } from 'shared/Utilities/Entity';
import { EntityType } from 'shared/Utilities/EntityTypes';
import { UserData } from 'shared/UserTypes';

export function getUser() {
  return new Promise<Entity<EntityType.User, UserData, 0> | null>(function(
    resolve
  ) {
    console.log('running promise');
    socket.emit(
      'getUserData',
      (data: Entity<EntityType.User, UserData, 0> | null) => {
        console.log('get User Data answer receieved');
        resolve(data);
      }
    );
  });
}

export function createNewUser() {
  return new Promise<boolean>(resolve => {
    socket.emit('createNewUser', (result: boolean) => resolve(result));
  });
}
