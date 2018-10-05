import React, { Component } from 'react';

import Container from './Container';
import Row from './Row';

import '../styles/Auth.css';

class Auth extends Component {
	render() {
		return (
			<Container>
				<Row>
					<div className="col-md-4 col-md-offset-4">
						<div className="auth">
							<h1>Admin panel</h1>
						</div>
					</div>
				</Row>
			</Container>
		);
	}
}

export default Auth;