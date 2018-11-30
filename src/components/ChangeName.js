import React from 'react';
import useInput from '../hooks/useInput';

import Icon from './Icon';

const ChangeName = ({ firstName, lastName, submit }) => {
	const name = useInput(firstName);
	const last = useInput(lastName);

	const handleSubmit = e => {
		e.preventDefault();
		submit(name.value, last.value);
	};

	return (
		<div className="block">
			<h2>Change name</h2>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					{...name}
					placeholder="First name" />
				<input
					type="text"
					{...last}
					placeholder="Last name" />
				<button type="submit"><Icon name="pencil-square-o" />Update</button>
			</form>
		</div>
	);
};

export default ChangeName;