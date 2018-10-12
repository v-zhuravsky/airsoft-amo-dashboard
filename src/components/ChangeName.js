import React, { Component } from 'react';

import Icon from './Icon';

class ChangeName extends Component {
	state = {
		firstName: this.props.firstName,
		lastName: this.props.lastName
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.submit(this.state.firstName, this.state.lastName);
	}

	render() {
		return (
			<div className="block">
				<h2>Change name</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="firstName"
						placeholder="First name"
						value={this.state.firstName}
						onChange={this.handleChange} />
					<input
						type="text"
						name="lastName"
						placeholder="Last name"
						value={this.state.lastName}
						onChange={this.handleChange} />
					<button type="submit"><Icon name="pencil-square-o" />Update</button>
				</form>
			</div>
		);
	}
};

export default ChangeName;