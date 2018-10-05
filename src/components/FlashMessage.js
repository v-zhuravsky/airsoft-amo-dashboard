import React from 'react';
import Icon from './Icon';

const FlashMessage = ({ message, onDelete }) => {
	return (
		<div className={"flash-message " + message.type}>
			<p>{message.text}</p>
			<button onClick={() => onDelete(message.id)}><Icon name="times" /></button>
		</div>
	);
};

export default FlashMessage;