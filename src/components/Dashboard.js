import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsAction } from '../actions/productsActions';

import Icon from './Icon';
import Sidebar from './Sidebar';
import Content from './Content';
import Products from './Products';
import ToggleSidebar from './ToggleSidebar';
import FlashMessagesList from './FlashMessagesList';

const Dashboard = ({ products, getProductsAction }) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (products.length < 1 && count !== 1) {
			getProductsAction();
			setCount(1);
		}
	});

	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<ToggleSidebar />
					<h2>Products</h2>
					<a role="button" onClick={() => getProductsAction()}><Icon name="refresh" /> Update</a>
					<Link to="/add-product"><Icon name="plus" />Add product</Link>
				</div>
				<FlashMessagesList />
				<Products products={products} />
			</Content>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		products: state.products
	};
};

export default connect(mapStateToProps, { getProductsAction })(Dashboard);