// MODULES //

import { combineReducers } from 'redux';
import markdown from './markdown.js';
import linting from './linting.js';


// MAIN //

const rootReducer = combineReducers({
	markdown,
	linting
});


// EXPORTS //

export default rootReducer;
