import { Entity } from './Utilities/Entity';
import { EntityType } from './Utilities/EntityTypes';
export interface UserData {
  chassis: string[];
  components: string[];
}
export type User = Entity<EntityType.User, UserData, 0>;
