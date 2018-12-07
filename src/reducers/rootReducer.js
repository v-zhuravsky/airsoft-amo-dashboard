import { combineReducers } from 'redux';

import { DEAUTHENTICATE } from '../actions/types';

import productsReducer from './productsReducer';
import flashMessagesReducer from './flashMessagesReducer';
import adminReducer from './adminReducer';
import adminsReducer from './adminsReducer';
import uiReducer from './uiReducer';
import ordersReducer from './ordersReducer';

const appReducer = combineReducers({
	products: productsReducer,
	flashMessages: flashMessagesReducer,
	admin: adminReducer,
	admins: adminsReducer,
	ui: uiReducer,
	orders: ordersReducer
});

const rootReducer = (state, action) => {
  if (action.type === DEAUTHENTICATE) {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;