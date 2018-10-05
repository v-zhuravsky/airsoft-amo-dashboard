import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Auth from './components/Auth';

const App = () => {
	return (
		<div>
			<Switch>
				<PrivateRoute exact path="/" component={Dashboard} />
				<Route path="/login" component={Auth} />
			</Switch>
		</div>
	);
};

export default App;