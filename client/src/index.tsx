import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'client/css/style.css';
import { Dashboard } from './Dashboard';
import { createGlobalStyle } from 'styled-components';

const BodyStyle = createGlobalStyle`
  body #react-root {
    display: flex;
    background-color: #1E1E1E;
    width: 100%;
    height: 100%;
    color: greenyellow;
  }
  * {
    box-sizing: border-box;
  }
`;

const App: FunctionComponent = () => (
  <>
    <BodyStyle />
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  </>
);

render(<App />, document.getElementById('react-root'));
