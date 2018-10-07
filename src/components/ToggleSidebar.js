import React from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from '../actions/uiActions';

import Icon from './Icon';

const ToggleSidebar = ({ toggleSidebar, currentLeft }) => {
	return <button onClick={() => toggleSidebar(currentLeft)}>
		<Icon style={{ marginRight: '0' }} name="bars" />
	</button>;
};

const mapStateToProps = state => {
	return {
		currentLeft: state.ui.sidebarLeft
	};
};

export default connect(mapStateToProps, { toggleSidebar })(ToggleSidebar);