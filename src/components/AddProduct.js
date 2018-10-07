import React, { Component } from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Content from './Content';
import Icon from './Icon';
import ToggleSidebar from './ToggleSidebar';

import '../styles/AddProduct.css';

class AddProduct extends Component {
	state = {
		productName: '',
		category: '',
		productPrice: '',
		productDescription: '',
		amountLeft: '',
		imgUrl: ''
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
						<h2>Add new product</h2>
					</div>
					<form className="block form" onSubmit={this.handleSubmit}>
						<input
							type="text"
							name="productName"
							placeholder="Product name"
							onChange={this.handleChange}
							required />
						<input
							type="text"
							name="category"
							placeholder="Category"
							onChange={this.handleChange}
							required />
						<input
							type="number"
							name="productPrice"
							placeholder="Price"
							onChange={this.handleChange}
							required />
						<input
							type="text"
							name="productDescription"
							placeholder="Description"
							onChange={this.handleChange}
							required />
						<input
							type="number"
							name="amountLeft"
							placeholder="Amount at warehouse"
							onChange={this.handleChange}
							required />
						<input
							type="text"
							name="imgUrl"
							placeholder="Url to product photo"
							onChange={this.handleChange}
							required />
						<button type="submit"><Icon name="plus" />Add product</button>
					</form>
				</Content>
			</div>
		);
	}
}

export default connect(null)(AddProduct);