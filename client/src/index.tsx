import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'client/css/style.css';
import { Routes } from './Routes';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

render(<App />, document.getElementById('react-root'));
