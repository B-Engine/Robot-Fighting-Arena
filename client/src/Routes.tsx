import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { Garage } from './Garage';
import { Arena } from './Arena';
import { Market } from './Market';

export const Routes: FunctionComponent = props => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/garage" component={Garage} />
    <Route path="/arena" component={Arena} />
    <Route path="/market" component={Market} />
    <Route component={Dashboard} />
  </Switch>
);
