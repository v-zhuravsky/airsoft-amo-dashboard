import React, { useState } from 'react';
import useInput from '../hooks/useInput';
import { connect } from 'react-redux';
import { createAdminAction } from '../actions/adminsActions';

import ContainerFluid from './ContainerFluid';
import Row from './Row';
import Icon from './Icon';

const selectStyles = {
	height: '44px',
	width: '100%',
	border: '1px solid #ccc',
	textIndent: '15px',
	borderRadius: '3px',
	background: '#fff',
	marginBottom: '15px'
};

const AddAdminForm = ({ token, createAdminAction }) => {
	const firstName = useInput('');
	const lastName = useInput('');
	const login = useInput('');
	const password = useInput('');
	const avatar = useInput('');
	const [type, setType] = useState('Administrator');

	const handleSelectChange = e => setType(e.target.value);

	const handleSubmit = e => {
		e.preventDefault();

		createAdminAction(token, {
			firstName: firstName.value,
			lastName: lastName.value,
			login: login.value,
			password: password.value,
			avatar: avatar.value,
			type
		});
	};

	return (
		<ContainerFluid>
			<Row>
				<div className="col-md-12">
					<form className="block" onSubmit={handleSubmit}>
						<input 
							type="text"
							placeholder="First name"
							{...firstName}
							required />
						<input 
							type="text"
							placeholder="Last name"
							{...lastName}
							required />
						<input 
							type="text"
							placeholder="Login"
							{...login}
							required />
						<input 
							type="text"
							placeholder="Password"
							{...password}
							required />
						<input 
							type="text"
							placeholder="Avatar url"
							{...avatar}
							required />
						<select style={selectStyles} value={type} onChange={handleSelectChange}>
							<option value="Administrator">Administrator</option>
							<option value="Moderator">Moderator</option>
						</select>
						<button type="submit"><Icon name="plus" />Add new admin</button>
					</form>
				</div>
			</Row>
		</ContainerFluid>
	);
};

const mapStateToProps = state => {
	return {
		token: state.admin.accessToken
	};
};

export default connect(mapStateToProps, { createAdminAction })(AddAdminForm);