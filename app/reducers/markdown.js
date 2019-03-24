// MODULES //

import * as types from 'constants/editor_actions.js';
import Store from 'electron-store';
import template from 'constants/template.js';


// VARIABLES //

const config = new Store( 'ISLE' );
const initialState = {
	markdown: config.get( 'mostRecentFileData' ) || template,
	preamble: config.get( 'mostRecentPreamble' ) || {},
	preambleText: config.get( 'mostRecentPreambleText' ),
	isScrolling: true,
	hideToolbar: false,
	filePath: config.get( 'mostRecentFilePath' ),
	fileName: config.get( 'mostRecentFileName' ),
	currentRole: 'anonymous',
	currentMode: 'offline',
	namespaceName: null,
	error: null,
	fontSize: config.get( 'fontSize' ) || 14
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
			preamble: action.payload.preamble,
			preambleText: action.payload.preambleText
		});
	case types.ROLE_CHANGED:
		return Object.assign({}, state, {
			currentRole: action.payload.role
		});
	case types.MODE_CHANGED:
		return Object.assign({}, state, {
			currentMode: action.payload.mode
		});
	case types.SERVER_NAMESPACE_CHANGED:
		return Object.assign({}, state, {
			namespaceName: action.payload.namespaceName
		});
	case types.TOGGLE_SCROLLING:
		return Object.assign({}, state, {
			isScrolling: !state.isScrolling
		});
	case types.TOGGLE_TOOLBAR:
		return Object.assign({}, state, {
			hideToolbar: !state.hideToolbar
		});
	case types.FONT_SIZE_CHANGED:
		config.set( 'fontSize', action.payload.fontSize );
		return Object.assign({}, state, {
			fontSize: action.payload.fontSize
		});
	default:
		return state;
	}
}
