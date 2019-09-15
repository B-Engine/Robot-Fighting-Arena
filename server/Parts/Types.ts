import { IGameEntity } from "server/Types/IGameEntity";

export enum PartType {
  Armor = 'ARMOR',
  Weapon = 'WEAPON',
  Utility = 'UTILITY'
}

export enum TargetExtentType {
  Part = 'PART',
  Mech = 'MECH',
  Team = 'TEAM'
}

export enum TargetType {
  Self = 'SELF',
  Enemy = 'ENEMY',
  Teammate = 'TEAMMATE',
  Squad = 'SQUAD',
  EnemySquad = 'ENEMYSQUAD'
}

export enum EffectType {
  Pierce = 'PIERCE',
  Cut = 'CUT',
  Impact = 'IMPACT',
  Repair = 'REPAIR',
  Power = 'POWER'
}

export type Behavior = {
  Target: TargetType;
  Effect: EffectType;
  Value: number;
  Cost?: number;
};

export interface IPartDefinition {
  Id: string;
  Name: string;
  Type: PartType;
  Health: number;
  Behaviors: Behavior[];
  AutoUse?: boolean;
  Speed: number;
}

export interface IPart extends IGameEntity {
  PartId: string;
}