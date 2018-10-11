import React from 'react';
import { connect } from 'react-redux';

import '../styles/Content.css';

const Content = ({ children, width }) => {
	return (
		<div style={{ width }} className={width === "100%" ? "content full" : "content"}>
			{ children }
		</div>
	);
};

const mapStateToProps = state => {
	return {
		width: state.ui.contentWidth
	};
};

export default connect(mapStateToProps)(Content);