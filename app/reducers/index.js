// MODULES //

import { combineReducers } from 'redux';
import configurator from './configurator.js';
import editor from './editor.js';
import linting from './linting.js';
import preview from './preview.js';
import updater from './updater.js';


// MAIN //

const rootReducer = combineReducers({
	configurator,
	editor,
	linting,
	preview,
	updater
});


// EXPORTS //

export default rootReducer;
