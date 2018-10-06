import React from 'react';
import { Link } from 'react-router-dom';

import Icon from './Icon';
import Rating from './Rating';

import '../styles/ProductItem.css';

const ProductItem = ({ product }) => {
	return (
		<div className="item">
			<Link to={"/view-product/" + product.productId}>{product.productName}</Link>
			<button><Icon name="trash-o" />Delete</button>
			<Rating stars={product.rating} />
			<p>{product.productPrice}$</p>
		</div>
	);
};

export default ProductItem;