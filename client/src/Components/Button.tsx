import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  border: 2px solid yellow;
  border-radius: 5px;
  background-color: #1e1e1e;
  color: yellow;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
  user-select: none;
  transition: all 0.2s;
`;

interface IProps {
  onClick?: () => void;
}

export const Button: FunctionComponent<IProps> = props => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};
