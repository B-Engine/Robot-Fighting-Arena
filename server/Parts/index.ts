import { IPartDefinition, PartType, EffectType, TargetType } from './Types';
import { ObjectDictionary } from 'server/Utilities';

const DefinedParts: IPartDefinition[] = [
  {
    Id: 'PU-00',
    Name: 'Power Cell',
    Type: PartType.Utility,
    Health: 5,
    AutoUse: true,
    Speed: 0,
    Behaviors: [
      {
        Target: TargetType.Self,
        Effect: EffectType.Power,
        Value: 3
      }
    ]
  },
  {
    Id: 'PW-01',
    Name: 'Gun',
    Type: PartType.Weapon,
    Health: 6,
    Speed: 2,
    Behaviors: [
      {
        Target: TargetType.Enemy,
        Effect: EffectType.Pierce,
        Value: 2,
        Cost: 1
      }
    ]
  },
  {
    Id: 'PW-02',
    Name: 'Blade',
    Type: PartType.Weapon,
    Health: 6,
    Speed: 1,
    Behaviors: [
      {
        Target: TargetType.Enemy,
        Effect: EffectType.Cut,
        Value: 1,
        Cost: 1
      }
    ]
  },
  {
    Id: "PW-03",
    Name: "Thrower",
    Type: PartType.Weapon,
    Health: 6,
    Speed: 3,
    Behaviors: [
      {
        Target: TargetType.Enemy,
        Effect: EffectType.Impact,
        Value: 3,
        Cost: 1
      }
    ]
  }
];

export const PartsDefinitions = new ObjectDictionary(DefinedParts);

/*
Power Cell:
  Energy: 3

Gun:
  Energy:-1
  Speed: 2
  Damage: 2
  Damage Type: Pierce

Blade:
  Energy:-1
  Speed: 1
  Damage: 1
  Damage Type: Cut

Thrower:
  Energy:-1
  Speed: 3
  Damage: 3
  Damage Type: Impact
*/

/*TODO: Modifiers
 *
Sharp:
  Damage: 1
  Damage Type: Cut

Heavy:
  Damage: 1
  Damage Type: Impact

Piercing:
  Damage: 1
  Damage Type: Pierce
 */
