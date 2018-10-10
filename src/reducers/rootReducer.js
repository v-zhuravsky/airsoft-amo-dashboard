import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import flashMessagesReducer from './flashMessagesReducer';
import adminReducer from './adminReducer';
import adminsReducer from './adminsReducer';
import uiReducer from './uiReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
	products: productsReducer,
	flashMessages: flashMessagesReducer,
	admin: adminReducer,
	admins: adminsReducer,
	ui: uiReducer,
	orders: ordersReducer
});

export default rootReducer;