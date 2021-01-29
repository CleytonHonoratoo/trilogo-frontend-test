import React from 'react';
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom';
import history from './history/history';

import HomeScreen from './container/HomeScreen/HomeScreen';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/' component={HomeScreen} />
    </Switch>
  </Router>
);

export default Routes;