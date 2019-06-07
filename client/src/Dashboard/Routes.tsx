import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Garage } from '../Garage';
import { Arena } from '../Arena/Arena';
import { Market } from '../Market';

export const Routes: FunctionComponent = props => (
  <Switch>
    <Route path="/garage" component={Garage} />
    <Route path="/arena" component={Arena} />
    <Route path="/market" component={Market} />
    <Route path="/news">THIS IS THE NEWS!</Route>
    <Route>Welcome to the dashboard.</Route>
  </Switch>
);
