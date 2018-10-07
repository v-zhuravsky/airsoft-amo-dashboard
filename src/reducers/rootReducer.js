import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import flashMessagesReducer from './flashMessagesReducer';
import adminReducer from './adminReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
	products: productsReducer,
	flashMessages: flashMessagesReducer,
	admin: adminReducer,
	ui: uiReducer
});

export default rootReducer;