import React, { Component } from 'react';

import ContainerFluid from './ContainerFluid';
import Row from './Row';
import Icon from './Icon';

class AddAdminForm extends Component {
	state = {
		type: 'Administrator',
		name: '',
		login: '',
		password: ''
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSelectChange = e => {
		this.setState({ type: e.target.value });
	}

	render() {
		const selectStyles = {
			height: '44px',
			width: '100%',
			border: '1px solid #ccc',
			textIndent: '15px',
			borderRadius: '3px',
			background: '#fff',
			marginBottom: '15px'
		}

		return (
			<ContainerFluid>
				<Row>
					<div className="col-md-12">
						<form className="block">
							<input 
								type="text"
								onChange={this.handleChange}
								name="name"
								placeholder="Full name"
								required />
							<input 
								type="text"
								onChange={this.handleChange}
								name="login"
								placeholder="Login"
								required />
							<input 
								type="text"
								onChange={this.handleChange}
								name="password"
								placeholder="Password"
								required />
							<select style={selectStyles} value={this.state.type} onChange={this.handleSelectChange}>
								<option value="Administrator">Administrator</option>
								<option value="Moderator">Moderator</option>
							</select>
							<button type="submit"><Icon name="plus" />Add new admin</button>
						</form>
					</div>
				</Row>
			</ContainerFluid>
		);
	}
}

export default AddAdminForm;