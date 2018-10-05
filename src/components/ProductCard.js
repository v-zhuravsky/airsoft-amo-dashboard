import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';

import Img from './Img';
import Icon from './Icon';
import Rating from './Rating';

import '../styles/ProductCard.css';

const ProductCard = ({ product, addToCart }) => {
	return (
		<div className="col-md-4">
			<div className="product">
				<Img src={product.imgUrl} alt={product.productName} className="img-responsive" />
				<div className="product-details">
					<h3><Link to={"/product/" + product.productId}>{product.productName}</Link></h3>
					<div className="price-details">
						<span>{product.productPrice}$</span>
						<button onClick={() => addToCart(1, product)}><Icon name="cart-plus" /></button>
					</div>
					<Rating stars={product.rating} />
				</div>
			</div>
		</div>
	);
};

export default connect(null, { addToCart })(ProductCard);