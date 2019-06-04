import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Garage: FunctionComponent = props => {
  return (
    <div>
      <div>This is the Garage.</div>
      <Link to={'/dashboard'}>Back</Link>
    </div>
  );
};
