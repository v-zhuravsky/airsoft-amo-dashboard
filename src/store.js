import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

let initialState = {};

// if (localStorage['redux-dashboard']) {
// 	initialState = JSON.parse(localStorage['redux-dashboard']);
// }

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

// store.subscribe(() => {
// 	localStorage['redux-dashboard'] = JSON.stringify(store.getState());
// });

export default store;