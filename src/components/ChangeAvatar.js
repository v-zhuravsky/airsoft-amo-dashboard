import React from 'react';
import useInput from '../hooks/useInput';

import Icon from './Icon';

const ChangeAvatar = ({ avatar, submit }) => {
	const ava = useInput(avatar);
	const handleSubmit = e => {
		e.preventDefault();
		submit(ava.value)
	};

	return (
		<div className="block">
			<h2>Change avatar</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					{...ava}
					placeholder="Avatar url" />
				<button type="submit"><Icon name="pencil-square-o" />Update</button>
			</form>
		</div>
	);
};

export default ChangeAvatar;