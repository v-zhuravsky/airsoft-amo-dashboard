import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import storeName from './storeName'

let initialState = {};

if (localStorage[storeName]) {
	initialState = JSON.parse(localStorage[storeName]);
}

const middleware = [thunk];

const store = createStore(
	rootReducer,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

store.subscribe(() => {
	localStorage[storeName] = JSON.stringify(store.getState());
});

export default store;