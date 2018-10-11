import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import Admins from './components/Admins';
import Admin from './components/Admin';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import ViewProduct from './components/ViewProduct';
import Customers from './components/Customers';
import Order from './components/Order';
import Stats from './components/Stats';
import Auth from './components/Auth';
import NotFound from './components/NotFound';

const App = () => {
	return (
		<div>
			<Switch>
				<Route path="/login" component={Auth} />
				<PrivateRoute exact path="/" component={Dashboard} />
				<PrivateRoute path="/admins" component={Admins} />
				<PrivateRoute path="/admin/:id" component={Admin} />
				<PrivateRoute path="/add-product" component={AddProduct} />
				<PrivateRoute path="/update-product/:id" component={UpdateProduct} />
				<PrivateRoute path="/view-product/:id" component={ViewProduct} />
				<PrivateRoute path="/customers" component={Customers} />
				<PrivateRoute path="/order/:id" component={Order} />
				<PrivateRoute path="/stats" component={Stats} />
				<PrivateRoute component={NotFound} />
			</Switch>
		</div>
	);
};

export default App;