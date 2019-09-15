import React, { FunctionComponent } from 'react';
import { Link } from 'client/src/Components/Link';

export const Arena: FunctionComponent = props => {
  return (
    <div>
      <div>This is the Arena.</div>
      <Link to={'/dashboard'}>Back</Link>
    </div>
  );
};
