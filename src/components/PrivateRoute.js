import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, admin, computedMatch, ...rest }) => {
	if (admin !== null) {
		return <Route { ...rest } render={
			props => (
				admin.accessToken.length === 100
					? <Component match={computedMatch} />
					: <Redirect to="/login" />
			)
		} />;
	} else {
		return <Redirect to="/login" />;
	}
};

const mapStateToProps = state => {
	return {
		admin: state.admin.accessToken ? state.admin : null
	};
};

export default connect(mapStateToProps)(PrivateRoute);