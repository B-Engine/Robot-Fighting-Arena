import { IPart } from "./Parts/Types";
import { ObjectDictionary } from "./Utilities";
import { IGameEntity } from "./Types/IGameEntity";

export interface IUser extends IGameEntity {
  Name: string;
  Parts: IPart[]
}

const users = new ObjectDictionary<IUser>([]);
