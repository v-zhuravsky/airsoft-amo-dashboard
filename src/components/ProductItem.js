import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProductAction } from '../actions/productsActions';

import Icon from './Icon';
import Rating from './Rating';

import '../styles/ProductItem.css';

const ProductItem = ({ product, token, deleteProductAction }) => {
	return (
		<div className="item">
			<Link to={"/view-product/" + product.productId}>{product.productName}</Link>
			<button onClick={() => deleteProductAction(token, product.productId)}><Icon name="trash-o" />Delete</button>
			<Rating stars={product.rating} />
			<p>{product.productPrice}$</p>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
  return {
    product: ownProps.product,
    token: state.admin.accessToken
  };
};

export default connect(mapStateToProps, { deleteProductAction })(ProductItem);