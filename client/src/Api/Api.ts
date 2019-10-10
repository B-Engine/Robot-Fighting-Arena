import openSocket from 'socket.io-client';
import { useEffect } from 'react';
import { Entity } from 'shared/Utilities/Entity';
import { EntityType } from 'shared/Utilities/EntityTypes';
export const socket = openSocket();

export function useSubscribe<
  Type extends EntityType,
  EntityData,
  EntityVersion extends number
>(
  event: string,
  callback: (entity: Entity<Type, EntityData, EntityVersion>) => void,
  ...dependencies: any[]
) {
  useEffect(() => {
    socket.on(event, callback);
    return () => {
      socket.off(event, callback);
    };
  }, [event, callback, ...dependencies]);
}
