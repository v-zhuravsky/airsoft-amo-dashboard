import React, { Component } from 'react';

import Icon from './Icon';

class ChangeAvatar extends Component {
	state = {
		avatar: this.props.avatar
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.submit(this.state.avatar);
	}

	render() {
		console.log(this.props.avatar);
		return (
			<div className="block">
				<h2>Change avatar</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						name="avatar"
						placeholder="Avatar url"
						value={this.state.avatar}
						onChange={this.handleChange} />
					<button type="submit"><Icon name="pencil-square-o" />Update</button>
				</form>
			</div>
		);
	}
};

export default ChangeAvatar;