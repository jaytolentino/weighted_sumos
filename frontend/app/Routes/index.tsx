import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { PathKey, pathFor } from 'lib/paths';

import Home from '../pages/Home';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={`${pathFor(PathKey.home)}`} exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )}

export default Routes;