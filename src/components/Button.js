import React from 'react';

import '../styles/Button.css';

const Button = props => {
	let className = 'btn';
	if (props.btnType) {
		className += ' ' + props.btnType;
	}

	return (
		<button onClick={props.onClick} className={className}>{ props.children }</button>
	);
};

export default Button;