import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Icon from './Icon';
import Sidebar from './Sidebar';
import Content from './Content';
import Products from './Products';

import '../styles/Dashboard.css';

const Dashboard = ({ products }) => {
	return (
		<div className="wrapper">
			<Sidebar />
			<Content>
				<div className="page-header block">
					<h1>Products</h1>
					<Link to="/add-product"><Icon name="plus" />Add product</Link>
				</div>
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

export default connect(mapStateToProps)(Dashboard);