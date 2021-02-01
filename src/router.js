import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import history from './history/history';

import Home from './container/Home/Home';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </Router>
);

export default Routes;