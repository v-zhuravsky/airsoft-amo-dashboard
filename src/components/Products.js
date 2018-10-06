import React, { Component } from 'react';

import ContainerFluid from './ContainerFluid';
import Row from './Row';
import ProductItem from './ProductItem';

import '../styles/Products.css';

class Products extends Component {
	state = {
		sortType: 'priceLH',
		products: this.props.products
	}

	handleChange = e => {
		this.setState({
			sortType: e.target.value
		});
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		if (nextProps.products !== prevState.products) {
			const products = nextProps.products;
			return { products: products };
		}
		return null;
	}

	render() {
		const { sortType, products } = this.state;

		const comparePriceLowHigh = (a, b) => {
			if (a.productPrice < b.productPrice)
				return -1;
			if (a.productPrice > b.productPrice)
				return 1;
			return 0;
		};

		const comparePriceHighLow = (a, b) => {
			if (a.productPrice < b.productPrice)
				return 1;
			if (a.productPrice > b.productPrice)
				return -1;
			return 0;
		};

		const compareRatingLowHigh = (a, b) => {
			if (a.rating < b.rating)
				return -1;
			if (a.rating > b.rating)
				return 1;
			return 0;
		};

		const compareRatingHighLow = (a, b) => {
			if (a.rating < b.rating)
				return 1;
			if (a.rating > b.rating)
				return -1;
			return 0;
		};

		switch (sortType) {
			case "priceLH":
				products.sort(comparePriceLowHigh);
				break;
			case "priceHL":
				products.sort(comparePriceHighLow);
				break;
			case "ratingLH":
				products.sort(compareRatingLowHigh);
				break;
			case "ratingHL":
				products.sort(compareRatingHighLow);
				break;
			default:
				break;
		}

		return (
			<ContainerFluid>
				<Row>
					<div className="col-md-12">
						<div className="sort">
							<h3>Sort</h3>
							<select value={this.state.sortType} onChange={this.handleChange}>
								<option value="priceLH">Price (Low -> High)</option>
								<option value="priceHL">Price (High -> Low)</option>
								<option value="ratingLH">Rating (Low -> High)</option>
								<option value="ratingHL">Rating (High -> Low)</option>
							</select>
						</div>
					</div>
				</Row>
				<Row>
					<div className="col-md-12">
						<div className="items">
							{
								products.map(product => (
									<ProductItem key={product.productId} product={product} />
								))
							}
						</div>
					</div>
				</Row>
			</ContainerFluid>
		);
	}
}

export default Products;