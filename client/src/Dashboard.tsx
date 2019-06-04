import React, { FunctionComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard: FunctionComponent = props => {
  return (
    <Fragment>
      <div>
        <Link to={'/garage'}>Garage</Link>
      </div>
      <div>
        <Link to={'/arena'}>Arena</Link>
      </div>
      <div>
        <Link to={'/market'}>Market</Link>
      </div>
    </Fragment>
  );
};
