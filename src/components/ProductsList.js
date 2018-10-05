import React from 'react';
import { connect } from 'react-redux';

import Products from './Products';

const ProductsList = ({ products, location }) => <Products location={location} products={products} />;

const mapStateToProps = (state, ownProps) => {
	return {
		location: ownProps.location.pathname,
		products: state.products
	};
};

export default connect(mapStateToProps)(ProductsList);