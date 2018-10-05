import React, { Component } from 'react';

import FlashMessagesList from './FlashMessagesList';
import Container from './Container';
import Row from './Row';
import Icon from './Icon';

import '../styles/Auth.css';

class Auth extends Component {
	state = {
		login: '',
		password: ''
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
	}

	render() {
		return (
			<Container>
				<Row>
					<div className="col-md-4 col-md-offset-4">
						<FlashMessagesList />
						<div className="auth">
							<div className="auth-header">
								<h1>Admin panel</h1>
							</div>
							<form onSubmit={this.handleSubmit}>
								<div className="input-group">
									<p><Icon name="user" /></p>
									<input
										type="text"
										name="login"
										placeholder="Login"
										required
										onChange={this.handleChange} />
								</div>
								<div className="input-group">
									<p><Icon name="lock" /></p>
									<input
										type="password"
										name="password"
										placeholder="Password"
										required
										onChange={this.handleChange} />
								</div>
								<button><Icon name="unlock" />Login</button>
							</form>
						</div>
					</div>
				</Row>
			</Container>
		);
	}
}

export default Auth;