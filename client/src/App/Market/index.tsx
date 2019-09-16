import React, { FunctionComponent, useState } from 'react';
import { Button } from '../../Components/Button';
import { useSubcribeToNewPart, IPart, createPart } from '../../Api/Api';

export const Market: FunctionComponent = props => {
  const [currentParts, setParts] = useState<IPart[]>([]);
  useSubcribeToNewPart(
    part => setParts([...currentParts, part]),
    currentParts,
    setParts
  );
  return (
    <div>
      <div>Market</div>
      <Button onClick={() => createPart()}>Create Part</Button>
      <div>Parts Created</div>
      <ul>
        {currentParts.map((part, index) => (
          <li key={index}>{part.name}</li>
        ))}
      </ul>
    </div>
  );
};
