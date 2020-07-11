// MODULES //

import { combineReducers } from 'redux';
import linting from './linting.js';
import markdown from './markdown.js';
import preview from './preview.js';
import configurator from './configurator.js';


// MAIN //

const rootReducer = combineReducers({
	configurator,
	linting,
	markdown,
	preview
});


// EXPORTS //

export default rootReducer;
