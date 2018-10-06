import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Sidebar from './Sidebar';
import Content from './Content';
import Product from './Product';
import Icon from './Icon';

const ViewProduct = ({ product }) => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<Link to={"/update-product/" + product.productId}><Icon name="pencil-square-o" />Update product</Link>
					<button><Icon name="trash-o" />Delete product</button>
				</div>
				<Product product={product} />
			</Content>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		product: state.products.filter(product => product.productId === Number(ownProps.match.params.id))[0]
	};
};

export default connect(mapStateToProps)(ViewProduct);