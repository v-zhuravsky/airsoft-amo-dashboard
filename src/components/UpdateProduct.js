import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from './Icon';
import Sidebar from './Sidebar';
import Content from './Content';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import ContainerFluid from './ContainerFluid';
import Row from './Row';

class UpdateProduct extends Component {
	state = {
		productName: this.props.product.productName,
		category: this.props.product.category,
		productPrice: this.props.product.productPrice,
		productDescription: this.props.product.productDescription,
		amountLeft: this.props.product.amountLeft,
		imgUrl: this.props.product.imgUrl
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	}

	handleSubmit = e => {
		e.preventDefault();
		const {
			productName,
			category,
			productPrice,
			productDescription,
			amountLeft,
			imgUrl
		} = this.state;
		
		alert(productName + '\n' + category + '\n' + productPrice + '\n' + productDescription + '\n' + amountLeft + '\n' + imgUrl);
	}

	render() {
		return (
			<div className="wrapper">
				<Sidebar />
				<Content>
					<div className="page-header block">
						<ToggleSidebar />
						<h2>Update product #{this.props.product.productId}</h2>
					</div>
					<FlashMessagesList />
					<ContainerFluid>
						<Row>
							<div className="col-md-12">
								<div className="block">
									<form className="form" onSubmit={this.handleSubmit} style={{ margin: '0', padding: '0' }}>
										<input
											type="text"
											value={this.state.productName}
											name="productName"
											placeholder="Product name"
											onChange={this.handleChange}
											required />
										<input
											type="text"
											value={this.state.category}
											name="category"
											placeholder="Category"
											onChange={this.handleChange}
											required />
										<input
											type="number"
											value={this.state.productPrice}
											name="productPrice"
											placeholder="Price"
											onChange={this.handleChange}
											required />
										<input
											type="text"
											value={this.state.productDescription}
											name="productDescription"
											placeholder="Description"
											onChange={this.handleChange}
											required />
										<input
											type="number"
											value={this.state.amountLeft}
											name="amountLeft"
											placeholder="Amount at warehouse"
											onChange={this.handleChange}
											required />
										<input
											type="text"
											value={this.state.imgUrl}
											name="imgUrl"
											placeholder="Url to product photo"
											onChange={this.handleChange}
											required />
										<button type="submit"><Icon name="plus" />Add product</button>
									</form>
								</div>
							</div>
						</Row>
					</ContainerFluid>
				</Content>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	return {
		product: state.products.filter(product => product.productId === Number(ownProps.match.params.id))[0]
	};
};

export default connect(mapStateToProps)(UpdateProduct);