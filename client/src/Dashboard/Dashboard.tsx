import React, { FunctionComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Routes } from './Routes';
import { Sidebar } from './Sidebar';

const ContentArea = styled.div`
  position: relative;
  display: flex;
`;

export const Dashboard: FunctionComponent = props => {
  return (
    <Fragment>
      <Sidebar />
      <ContentArea>
        <Routes />
      </ContentArea>
    </Fragment>
  );
};
