import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../actions/flashMessagesActions';

import FlashMessage from './FlashMessage';

import '../styles/FlashMessages.css';

class FlashMessagesList extends Component {
	render() {
		return (
			<div className={this.props.messages.length === 0
				? "flash-messages mt-0"
				: "flash-messages"}
			>
				{this.props.messages.length > 0 && this.props.messages.map(message => {
					return <FlashMessage key={message.id} message={message} onDelete={this.props.deleteFlashMessage} />
				})}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		messages: state.flashMessages
	};
};

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList);