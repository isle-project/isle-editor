// MODULES //

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';


// VARIABLES //

const enhancer = applyMiddleware( thunk );


// EXPORTS //

export default function configureStore( initialState ) {
	return createStore( rootReducer, initialState, enhancer );
}
