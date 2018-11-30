import React from 'react';
import useInput from '../hooks/useInput';

import Icon from './Icon';

const ChangePassword = ({ submit }) => {
	const newPassword = useInput('');
	const confirmNew = useInput('');
	const oldPassword = useInput('');

	const handleSubmit = e => {
		e.preventDefault();
		submit(newPassword.value, confirmNew.value, oldPassword.value);
	};

	return (
		<div className="block">
			<h2>Change password</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					{...oldPassword}
					placeholder="Old password" />
				<input
					type="text"
					{...newPassword}
					placeholder="New password" />
				<input
					type="text"
					{...confirmNew}
					placeholder="Confirm new password" />
				<button type="submit"><Icon name="pencil-square-o" />Update</button>
			</form>
		</div>
	);
};

export default ChangePassword;