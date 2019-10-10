import * as React from 'react';
import { ChassisEntity } from 'shared/Types';
import { getChassisData } from 'client/src/Api/Chassis';
import styled from 'styled-components';

interface IProps {
  chassisId: string;
}

const ChassisBorder = styled.div`
  border: 3px solid greenyellow;
  padding: 2em;
  margin: 1em 0px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ChassisDisplay: React.FunctionComponent<IProps> = props => {
  const [chassis, setChassis] = React.useState<ChassisEntity>();
  React.useEffect(() => {
    console.log('fetching chassis');
    getChassisData(props.chassisId).then(chassis => {
      console.log(`received chassis: ${JSON.stringify(chassis)}`);
      setChassis(chassis);
    });
  }, [props.chassisId, setChassis]);
  if (chassis) {
    return (
      <ChassisBorder>
        <h1>Name: {chassis.Data.Name}</h1>
        <div>Type: {chassis.Data.ChassisType}</div>
        <div>Dodge: {chassis.Data.Dodge}</div>
        <div>Speed: {chassis.Data.Speed}</div>
        <div>Max Health: {chassis.Data.MaxHealth}</div>
        <div>Power Capacity: {chassis.Data.PowerCapacity}</div>
        <div>Power Recharge Rate: {chassis.Data.PowerRecharge}</div>
        <div>Weapon Slots: {chassis.Data.WeaponSlots}</div>
        <div>Armor Slots: {chassis.Data.ArmorSlots}</div>
        <div>Mobility Slots: {chassis.Data.MobilitySlots}</div>
        <div>Power Slots: {chassis.Data.PowerSlots}</div>
      </ChassisBorder>
    );
  } else {
    return null;
  }
};
