import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';
import Content from './Content';
import ContainerFluid from './ContainerFluid';
import Row from './Row';
import FlashMessagesList from './FlashMessagesList';
import Products from './Products';
import ToggleSidebar from './ToggleSidebar';

import '../styles/Order.css';

const Order = ({ order, products }) => {
	let orderSum = 0;
	if (products.length > 1) {
		orderSum = products.reduce((current, next) => {
			return (current.amount * Number(current.productPrice)) + (next.amount * Number(next.productPrice));
		});
	} else if (products.length === 1) {
		orderSum = products[0].amount * Number(products[0].productPrice);
	}

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Order #{order.id}</h2>
				</div>
				<FlashMessagesList />
				<ContainerFluid>
					<Row>
						<div className="col-md-12">
							<div className="block view-order">
								<h2>Order details</h2>
								<ul>
									<li>Order id: #{order.id}</li>
									<li>Customer name: {order.name}</li>
									<li>Customer phone: {order.phoneNumber}</li>
									<li>Delivery location: {order.deliveryLocation}</li>
									<li>Order sum: {orderSum}</li>
								</ul>
							</div>
						</div>
					</Row>
				</ContainerFluid>
				<Products products={products} />
			</Content>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const order = state.orders.orders.filter(order => order.id === Number(ownProps.match.params.id))[0];
	let products = [];

	order.products.forEach(product => {
		for (var i = 0; i < state.products.length; i++) {
			if (product.productId === state.products[i].productId) {
				products.push({
					...state.products.filter(pr => pr.productId === product.productId)[0],
					amount: product.amount
				});
			}
		}
	});

	return {
		order: order,
		products: products
	};
};

export default connect(mapStateToProps)(Order);