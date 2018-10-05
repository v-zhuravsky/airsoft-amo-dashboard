import React from 'react';
import { connect } from 'react-redux';

import Products from './Products';

const ProductsByCategory = ({ products, category, location }) => {
	if (products.length < 1) {
		return <h1>Sorry, this category has no products.</h1>;
	}

	return <Products location={location} products={products} />;
};

const mapStateToProps = (state, ownProps) => {
	return {
		location: ownProps.location.pathname,
		category: ownProps.match.params.category,
		products: state.products.filter(product => product.category === ownProps.match.params.category)
	};
};

export default connect(mapStateToProps)(ProductsByCategory);