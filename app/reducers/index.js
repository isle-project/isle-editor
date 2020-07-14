// MODULES //

import { combineReducers } from 'redux';
import linting from './linting.js';
import editor from './editor.js';
import preview from './preview.js';
import configurator from './configurator.js';


// MAIN //

const rootReducer = combineReducers({
	configurator,
	linting,
	editor,
	preview
});


// EXPORTS //

export default rootReducer;
