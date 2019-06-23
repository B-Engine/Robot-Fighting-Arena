import { WEAPONS, MODIFIERS } from 'server/WordLists';

export enum PartType {
  'Armor',
  'Weapon',
  'Utility'
}

export interface Part {
  Id: string;
  Name: string;
  Type: PartType;
  CombatTypeId: string;
  CurrentSpeed: number;
  MaxSpeed: number;
  CurrentHealth: number;
  MaxHealth: number;
}

const PartsDatabase: { [key: string]: Part } = {};
