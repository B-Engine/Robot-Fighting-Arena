import { BaseChassis, ChassisType } from 'shared/Types';
import { Entity } from 'shared/Utilities/Entity';
import { EntityType } from 'shared/Utilities/EntityTypes';

const DefinedChassis: BaseChassis[] = [
  {
    Name: 'Light',
    ChassisType: ChassisType.Light,
    MaxHealth: 10,
    Dodge: 3,
    Speed: 3,
    PowerCapacity: 1,
    PowerRecharge: 1,
    WeaponSlots: 1,
    ArmorSlots: 0,
    PowerSlots: 1,
    MobilitySlots: 1
  },
  {
    Name: 'Medium',
    ChassisType: ChassisType.Medium,
    MaxHealth: 20,
    Dodge: 2,
    Speed: 2,
    PowerCapacity: 2,
    PowerRecharge: 2,
    WeaponSlots: 2,
    ArmorSlots: 2,
    PowerSlots: 2,
    MobilitySlots: 2
  },
  {
    Name: 'Heavy',
    ChassisType: ChassisType.Heavy,
    MaxHealth: 30,
    Dodge: 1,
    Speed: 1,
    PowerCapacity: 3,
    PowerRecharge: 3,
    WeaponSlots: 3,
    ArmorSlots: 3,
    PowerSlots: 3,
    MobilitySlots: 3
  }
];

export const Chassis = DefinedChassis.map((part, index) => {
  const entity = new Entity(`CH_${index}`, EntityType.Chassis, { ...part }, 0);
  console.log(
    `part: ${JSON.stringify(part)} index: ${index} entity: ${JSON.stringify(
      entity
    )}`
  );
  return entity;
});
