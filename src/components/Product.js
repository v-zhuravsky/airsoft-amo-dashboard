import React from 'react';

import ContainerFluid from './ContainerFluid';
import Row from './Row';
import Img from './Img';
import Rating from './Rating';

import '../styles/Product.css';

const Product = ({ product }) => {
	return (
		<div className="product">
			<ContainerFluid>
				<Row>
					<div className="col-md-3">
						<div className="block">
							<Img src={product.imgUrl} alt={product.productName} className="img-responsive" />
						</div>
					</div>
					<div className="col-md-9">
						<div className="block">
							<div className="details">
								<h2>{product.productName}</h2>
								<span className="price">{product.productPrice}$</span>
							</div>
							<Rating stars={product.rating} />
							<p className="description">{product.productDescription}</p>
						</div>
					</div>
				</Row>
			</ContainerFluid>
		</div>
	);
};

export default Product;