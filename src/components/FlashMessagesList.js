import React from 'react';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../actions/flashMessagesActions';

import FlashMessage from './FlashMessage';

import '../styles/FlashMessages.css';

const FlashMessagesList = ({ messages, deleteFlashMessage }) => {
	return (
		<div className={messages.length === 0
			? "flash-messages mt-0"
			: "flash-messages"}
		>
			{messages.length > 0 && messages.map(message => {
				return <FlashMessage key={message.id} message={message} onDelete={deleteFlashMessage} />
			})}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		messages: state.flashMessages
	};
};

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);