import React, { FunctionComponent, Fragment } from 'react';
import styled from 'styled-components';
import { Routes } from 'client/src/Dashboard/Routes';
import { Sidebar } from './Sidebar';

const ContentArea = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
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
