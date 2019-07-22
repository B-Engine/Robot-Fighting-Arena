import { Part, PartType, EffectType, TargetType, Behavior } from './Types';

interface Id {
  Id: string;
}

type TransitionalPart = Omit<Part, 'Id'>;

const DefinedParts: TransitionalPart[] = [
  {
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
    Name: 'Gun',
    Type: PartType.Weapon,
    Health: 6,
    Speed: 2,
    Behaviors: [
      {
        Target: TargetType.Enemy,
        Effect: EffectType.Pierce,
        Value: 2
      },
      {
        Target: TargetType.Self,
        Effect: EffectType.Power,
        Value: -1
      }
    ]
  },
  {
    Name: 'Blade',
    Type: PartType.Weapon,
    Health: 6,
    Speed: 1,
    Behaviors: [
      {
        Target: TargetType.Enemy,
        Effect: EffectType.Cut,
        Value: 1
      },
      {
        Target: TargetType.Self,
        Effect: EffectType.Power,
        Value: -1
      }
    ]
  },
  {
    Name: 'Thrower',
    Type: PartType.Weapon,
    Health: 6,
    Speed: 3,
    Behaviors: [
      {
        Target: TargetType.Enemy,
        Effect: EffectType.Impact,
        Value: 3
      },
      {
        Target: TargetType.Self,
        Effect: EffectType.Power,
        Value: -1
      }
    ]
  }
];

export const Parts: Part[] = DefinedParts.map((part, index) => ({
  ...part,
  Id: `P_${index}`
}));

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
