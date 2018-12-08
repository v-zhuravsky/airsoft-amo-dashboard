import React from 'react';
import useInput from '../hooks/useInput';
import { connect } from 'react-redux';
import { authAction } from '../actions/authAction';
import { Redirect } from 'react-router-dom';

import FlashMessagesList from './FlashMessagesList';
import Container from './Container';
import Row from './Row';
import Icon from './Icon';

import '../styles/Auth.css';

const Auth = ({ admin, authAction }) => {
	const login = useInput('');
	const password = useInput('');

	const handleSubmit = e => {
		e.preventDefault();

		authAction({
			login: login.value,
			password: password.value
		});
	};

	if (admin.accessToken !== undefined) {
		if (admin.accessToken.length === 100) {
			return <Redirect to="/" />
		}
	}

	return (
		<Container>
			<Row>
				<div className="col-md-4 col-md-offset-4">
					<FlashMessagesList />
					<div className="auth">
						<div className="auth-header">
							<h1>Admin panel</h1>
						</div>
						<form className="auth-f" onSubmit={handleSubmit}>
							<div className="input-group">
								<p><Icon name="user" /></p>
								<input
									type="text"
									placeholder="Login"
									{...login}
									required />
							</div>
							<div className="input-group">
								<p><Icon name="lock" /></p>
								<input
									type="password"
									placeholder="Password"
									{...password}
									required />
							</div>
							<button><Icon name="unlock" />Login</button>
						</form>
					</div>
				</div>
			</Row>
		</Container>
	);
};

const mapStateToProps = state => {
	return {
		admin: state.admin
	};
};

export default connect(mapStateToProps, { authAction })(Auth);