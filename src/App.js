import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Customers from './components/Customers';
import Stats from './components/Stats';
import Auth from './components/Auth';

const App = () => {
	return (
		<div>
			<Switch>
				<Route path="/login" component={Auth} />
				<PrivateRoute exact path="/" component={Dashboard} />
				<PrivateRoute exact path="/add-product" component={AddProduct} />
				<PrivateRoute exact path="/view-product/:id" component={ViewProduct} />
				<PrivateRoute path="/customers" component={Customers} />
				<PrivateRoute path="/stats" component={Stats} />
			</Switch>
		</div>
	);
};

export default App;