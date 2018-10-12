import React, { Component } from 'react';

import Icon from './Icon';

class ChangePassword extends Component {
	state = {
		newPassword: '',
		confirmNew: '',
		oldPassword: ''
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.submit(this.state.newPassword, this.state.confirmNew, this.state.oldPassword);
	}

	render() {
		return (
			<div className="block">
				<h2>Change password</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="oldPassword"
						placeholder="Old password"
						onChange={this.handleChange} />
					<input
						type="text"
						name="newPassword"
						placeholder="New password"
						onChange={this.handleChange} />
					<input
						type="text"
						name="confirmNew"
						placeholder="Confirm new password"
						onChange={this.handleChange} />
					<button type="submit"><Icon name="pencil-square-o" />Update</button>
				</form>
			</div>
		);
	}
};

export default ChangePassword;