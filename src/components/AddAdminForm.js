import React, { useState } from 'react';
import useInput from '../hooks/useInput';

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

const AddAdminForm = () => {
	const fullName = useInput('');
	const login = useInput('');
	const password = useInput('');
	const [type, setType] = useState('Administrator');

	const handleSelectChange = e => setType(e.target.value);

	return (
		<ContainerFluid>
			<Row>
				<div className="col-md-12">
					<form className="block">
						<input 
							type="text"
							placeholder="Full name"
							required />
						<input 
							type="text"
							placeholder="Login"
							required />
						<input 
							type="text"
							placeholder="Password"
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

export default AddAdminForm;