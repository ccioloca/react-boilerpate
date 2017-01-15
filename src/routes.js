import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './containers/home/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>
);
