import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'client/css/style.css';
import { Dashboard } from './Dashboard/Dashboard';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
);

render(<App />, document.getElementById('react-root'));
