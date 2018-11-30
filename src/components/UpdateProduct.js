import React from 'react';
import useInput from '../hooks/useInput';
import { connect } from 'react-redux';

import Icon from './Icon';
import Sidebar from './Sidebar';
import Content from './Content';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';
import ContainerFluid from './ContainerFluid';
import Row from './Row';

const UpdateProduct = ({ product }) => {
	const productName = useInput(product.productName);
	const category = useInput(product.category);
	const productPrice = useInput(product.productPrice);
	const productDescription = useInput(product.productDescription);
	const amountLeft = useInput(product.amountLeft);
	const imgUrl = useInput(product.imgUrl);

	const handleSubmit = e => {
		e.preventDefault();
	};

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Update product #{product.productId}</h2>
				</div>
				<FlashMessagesList />
				<ContainerFluid>
					<Row>
						<div className="col-md-12">
							<div className="block">
								<form className="form" onSubmit={handleSubmit} style={{ margin: '0', padding: '0' }}>
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
							</div>
						</div>
					</Row>
				</ContainerFluid>
			</Content>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({ product: state.products.filter(product => product.productId === Number(ownProps.match.params.id))[0] });

export default connect(mapStateToProps)(UpdateProduct);