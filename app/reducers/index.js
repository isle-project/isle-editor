// MODULES //

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import markdown from './markdown';


// MAIN //

const rootReducer = combineReducers({
	markdown,
	routing
});


// EXPORTS //

export default rootReducer;
