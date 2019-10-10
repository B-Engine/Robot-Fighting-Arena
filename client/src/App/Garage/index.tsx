import React, { FunctionComponent, useState } from 'react';
import { Link } from 'client/src/Components/Link';
import { ChassisEntity } from 'shared/Types';
import { IUserProp, WithUser } from 'client/src/Api/WithUser';
import { ChassisDisplay } from './ChassisDisplay';
import { Row } from 'client/src/Components/Row';
import { Column } from 'client/src/Components/Column';

const Garage: FunctionComponent<IUserProp> = props => {
  return (
    <Column>
      <Row style={{ justifyContent: 'center' }}>
        <h1>Garage</h1>
      </Row>
      <Column>
        Chassis You Own:
        {props.user.Data.chassis.map(chassis => (
          <ChassisDisplay key={chassis} chassisId={chassis} />
        ))}
      </Column>
    </Column>
  );
};

const BoundGarage = WithUser<{}>(Garage);

export { BoundGarage as Garage };
