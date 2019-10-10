import { EntityType } from './Utilities/EntityTypes';
import { Entity } from './Utilities/Entity';

export enum ComponentType {
  Armor = 'ARMOR',
  Weapon = 'WEAPON',
  Power = 'POWER',
  Mobility = 'MOBILITY'
}

export enum DamageType {
  Pierce = 'PIERCE',
  Cut = 'CUT',
  Impact = 'IMPACT'
}

export enum TargetType {
  Self = 'SELF',
  Enemy = 'ENEMY',
  Ally = 'ALLY',
  Team = 'TEAM',
  EnemyTeam = 'ENEMYTEAM'
}

export interface BaseComponent {
  Name: string;
  ComponentType: ComponentType;
}

export interface WeaponComponent extends BaseComponent {
  ComponentType: ComponentType.Weapon;
  Damage: number;
  DamageType: DamageType;
  TargetType: TargetType;
  Range: number;
  PrepTime: number;
  PowerDraw: number;
}

export interface PowerComponent extends BaseComponent {
  ComponentType: ComponentType.Power;
  Capacity: number;
  RechargeSpeed: number;
}

export interface ArmorComponent extends BaseComponent {
  ComponentType: ComponentType.Armor;
  DamageReduction: number;
  ArmorType: DamageType;
  Bulk: number;
}

export interface MobilityComponent extends BaseComponent {
  ComponentType: ComponentType.Mobility;
  Speed: number;
  Dodge: number;
  PowerDraw: number;
}

export type Component =
  | WeaponComponent
  | PowerComponent
  | ArmorComponent
  | MobilityComponent;

export enum ChassisType {
  Light = 'LIGHT',
  Medium = 'MEDIUM',
  Heavy = 'HEAVY'
}

export interface BaseChassis {
  Name: string;
  ChassisType: ChassisType;
  MaxHealth: number;
  Dodge: number;
  Speed: number;
  PowerCapacity: number;
  PowerRecharge: number;
  WeaponSlots: number;
  ArmorSlots: number;
  PowerSlots: number;
  MobilitySlots: number;
}

export type ComponentEntity = Entity<EntityType.Component, BaseComponent, 0>;
export type ChassisEntity = Entity<EntityType.Chassis, BaseChassis, 0>;
