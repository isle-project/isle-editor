// MODULES //

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from 'reducers';


// VARIABLES //

const router = routerMiddleware( hashHistory );
const enhancer = applyMiddleware( thunk, router );


// EXPORTS //

export default function configureStore( initialState ) {
	return createStore( rootReducer, initialState, enhancer );
}
