import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import Work from './components/Work';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
 		<Route path="/about" component={About} />
 		<Route path="/work" component={Work} />
  </Router>
);

export default Routes;