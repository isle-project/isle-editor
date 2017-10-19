// MODULES //

import * as types from 'constants/actionTypes';
import Configstore from 'configstore';
import template from 'constants/template.js';
import yaml from 'js-yaml';


// VARIABLES //

const config = new Configstore( 'ISLE' );

const data = config.get( 'mostRecentFileData' ) || template;
const preamble = data.match( /---([\S\s]*)---/ )[ 1 ];
let error = null;
let preambleObject = {};

try {
	preambleObject = yaml.load( preamble );
} catch ( err ) {
	error = err;
}

const initialState = {
	markdown: config.get( 'mostRecentFileData' ) || template,
	preamble: preambleObject,
	isScrolling: true,
	hideToolbar: false,
	filePath: config.get( 'mostRecentFilePath' ),
	fileName: config.get( 'mostRecentFileName' ),
	currentRole: 'anonymous',
	currentMode: 'offline',
	error
};


// EXPORTS //

export default function markdown( state = initialState, action ) {
	switch ( action.type ) {
	case types.FILE_LOADED:
		return {
			...state,
			fileName: action.payload.fileName,
			filePath: action.payload.filePath
		};
	case types.ENCOUNTERED_ERROR:
		return Object.assign({}, state, {
			error: action.payload.error
		});
	case types.RESET_ERROR:
		return Object.assign({}, state, {
			error: null
		});
	case types.MARKDOWN_CHANGED:
		return Object.assign({}, state, {
			markdown: action.payload.markdown,
			html: action.payload.html
		});
	case types.PREAMBLE_CHANGED:
		return Object.assign({}, state, {
			preamble: action.payload.preamble
		});
	case types.ROLE_CHANGED:
		return Object.assign({}, state, {
			currentRole: action.payload.role
		});
	case types.MODE_CHANGED:
		return Object.assign({}, state, {
			currentMode: action.payload.mode
		});
	case types.TOGGLE_SCROLLING:
		return Object.assign({}, state, {
			isScrolling: !state.isScrolling
		});
	case types.TOGGLE_TOOLBAR:
		return Object.assign({}, state, {
			hideToolbar: !state.hideToolbar
		});
	default:
		return state;
	}
}
