import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Market: FunctionComponent = props => {
  return (
    <div>
      <div>This is the Market.</div>
      <Link to={'/dashboard'}>Back</Link>
    </div>
  );
};
