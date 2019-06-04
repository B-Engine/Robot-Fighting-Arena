import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const Arena: FunctionComponent = props => {
  return (
    <div>
      <div>This is the Arena.</div>
      <Link to={'/dashboard'}>Back</Link>
    </div>
  );
};
