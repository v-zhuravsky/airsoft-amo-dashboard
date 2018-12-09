import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { completeOrderAction } from '../actions/completeOrderAction';

import Icon from './Icon';

const OrderListItem = ({ order, token, adminId, completeOrderAction }) => {
	return (
		<div className={"order-list-item" + (order.completed ? " completed" : "")}>
			<Link to={"/order/" + order.id}>#{order.id}<Icon name="long-arrow-right" />{order.name}</Link>
			<div className="order-item-controls">
				<button className="complete" onClick={() => completeOrderAction(token, adminId, order.id)}><Icon name="check" /></button>
				<button className="cancel"><Icon name="times" /></button>
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
  return {
    order: ownProps.order,
    token: state.admin.accessToken,
    adminId: state.admin.id
  };
};

export default connect(mapStateToProps, { completeOrderAction })(OrderListItem);