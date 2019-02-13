// MODULES //

import { combineReducers } from 'redux';
import linting from './linting.js';
import markdown from './markdown.js';
import preview from './preview.js';


// MAIN //

const rootReducer = combineReducers({
	linting,
	markdown,
	preview
});


// EXPORTS //

export default rootReducer;
