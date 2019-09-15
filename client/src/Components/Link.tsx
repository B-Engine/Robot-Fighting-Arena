import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(RouterLink)`
  color: yellow;
  text-decoration: none;
  &:visited {
    color: yellow;
    text-decoration: none;
  }
  &:hover {
    color: yellow;
    text-decoration: none;
  }
`;
