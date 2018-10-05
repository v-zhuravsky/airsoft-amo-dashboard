import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import flashMessagesReducer from './flashMessagesReducer';
import adminReducer from './adminReducer';

const rootReducer = combineReducers({
	products: productsReducer,
	flashMessages: flashMessagesReducer,
	admin: adminReducer
});

export default rootReducer;