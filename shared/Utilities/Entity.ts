import { EntityType } from './EntityTypes';

export class Entity<Type extends EntityType, Data, Version extends number> {
  public Id: string;
  public Type: Type;
  public Data: Data;
  public Version: Version;
  public constructor(Id: string, Type: Type, Data: Data, Version: Version) {
    this.Id = Id;
    this.Type = Type;
    this.Data = Data;
    this.Version = Version;
  }
}
