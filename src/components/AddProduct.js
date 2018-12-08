import React from 'react';
import { connect } from 'react-redux';
import { addProductAction } from '../actions/productsActions';
import useInput from '../hooks/useInput';

import Sidebar from './Sidebar';
import Content from './Content';
import Icon from './Icon';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';

import '../styles/AddProduct.css';

const AddProduct = ({ token, addProductAction }) => {
	const productName = useInput('');
	const category = useInput('');
	const productPrice = useInput('');
	const productDescription = useInput('');
	const amountLeft = useInput('');
	const imgUrl = useInput('');

	const handleSubmit = e => {
		e.preventDefault();

		addProductAction(token, {
			productName: productName.value,
			category: category.value,
			productPrice: productPrice.value,
			productDescription: productDescription.value,
			amountLeft: amountLeft.value,
			imgUrl: imgUrl.value				
		});
	};

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Add new product</h2>
				</div>
				<FlashMessagesList />
				<form className="block form" onSubmit={handleSubmit}>
					<input
						type="text"
						{...productName}
						placeholder="Product name"
						required />
					<input
						type="text"
						{...category}
						placeholder="Category"
						required />
					<input
						type="number"
						{...productPrice}
						placeholder="Price"
						required />
					<input
						type="text"
						{...productDescription}
						placeholder="Description"
						required />
					<input
						type="number"
						{...amountLeft}
						placeholder="Amount at warehouse"
						required />
					<input
						type="text"
						{...imgUrl}
						placeholder="Url to product photo"
						required />
					<button type="submit"><Icon name="plus" />Add product</button>
				</form>
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		token: state.admin.accessToken
	};
};

export default connect(mapStateToProps, { addProductAction })(AddProduct);