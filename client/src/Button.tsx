import React, { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { createPart, IPart, useSubcribeToNewPart } from './Api';

const StyledButton = styled.div`
  border: 1px solid #0c0c19;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

interface IProps {
  onClick?: () => void;
}

export const Button: FunctionComponent<IProps> = props => {
  return (
    <StyledButton onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};
