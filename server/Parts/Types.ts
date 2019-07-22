export enum PartType {
  Armor = 'ARMOR',
  Weapon = 'WEAPON',
  Utility = 'UTILITY'
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
};

export interface Part {
  Id: string;
  Name: string;
  Type: PartType;
  Health: number;
  Behaviors: Behavior[];
  AutoUse?: boolean;
  Speed: number;
}
