import { Component, ComponentType, DamageType, TargetType } from 'shared/Types';
import { Entity } from 'shared/Utilities/Entity';
import { EntityType } from 'shared/Utilities/EntityTypes';
const DefinedComponents: Component[] = [
  {
    Name: 'Power Cell',
    ComponentType: ComponentType.Power,
    Capacity: 3,
    RechargeSpeed: 1
  },
  {
    Name: 'Gun',
    ComponentType: ComponentType.Weapon,
    Damage: 2,
    DamageType: DamageType.Pierce,
    TargetType: TargetType.Enemy,
    Range: 2,
    PrepTime: 2,
    PowerDraw: 1
  },
  {
    Name: 'Blade',
    ComponentType: ComponentType.Weapon,
    Damage: 1,
    DamageType: DamageType.Cut,
    TargetType: TargetType.Enemy,
    Range: 1,
    PrepTime: 1,
    PowerDraw: 1
  },
  {
    Name: 'Thrower',
    ComponentType: ComponentType.Weapon,
    Damage: 3,
    DamageType: DamageType.Impact,
    TargetType: TargetType.Enemy,
    Range: 3,
    PrepTime: 3,
    PowerDraw: 3
  }
];
export const Components = DefinedComponents.map(
  (part, index) => new Entity(`PA_${index}`, EntityType.Component, part, 0)
);
