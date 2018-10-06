import React from 'react';

import '../styles/Content.css';

const Content = ({ children }) => {
	return (
		<div className="content">
			{ children }
		</div>
	);
};

export default Content;