import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Layout}>
			<IndexRoute component={Home} />
	 		<Route path="/about" component={About} />
	 		<Route path="/work" component={Work} />
	 		<Route path="/contact" component={Contact} />
 		</Route>
  </Router>
);

export default Routes;