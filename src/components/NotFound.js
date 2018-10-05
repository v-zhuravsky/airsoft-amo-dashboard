import React from 'react';
import Icon from './Icon';
import '../styles/NotFound.css';

const NotFound = () => (
	<div className="col-md-9">
		<div className="not-found">
			<Icon name="frown-o" />
			<h1>404</h1>
			<h2>The page you're looking for not found.</h2>
		</div>
	</div>
);

export default NotFound;