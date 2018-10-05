import React from 'react';
import Button from './Button';
import Icon from './Icon';

const FlashMessage = ({ message, onDelete }) => {
	return (
		<div className={"flash-message " + message.type}>
			<p>{message.text}</p>
			<Button onClick={() => onDelete(message.id)}><Icon name="times" /></Button>
		</div>
	);
};

export default FlashMessage;