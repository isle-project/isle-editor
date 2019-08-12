// MODULES //

import { readFileSync } from 'fs';
import replace from '@stdlib/string/replace';
import * as types from 'constants/editor_actions.js';
import Store from 'electron-store';
import template from 'constants/template.js';
import preamble from 'constants/preamble.js';


// FUNCTIONS //

function today() {
	const date = new Date();
	let out = date.getDate() < 10 ? '0' : '';
	out += date.getDate() + '/' + ( ( ( date.getMonth()+1 ) < 10 ) ? '0': '' );
	out += ( date.getMonth()+1 ) + '/' + date.getFullYear();
	return out;
}


// VARIABLES //

const config = new Store( 'ISLE' );
const filePath = config.get( 'mostRecentFilePath' );
let md = config.get( 'mostRecentFileData' );
const preambleTemplate = config.get( 'preambleTemplate' ) || preamble;
if ( !md ) {
	if ( filePath ) {
		md = readFileSync( filePath, 'utf-8' );
	}
	else {
		md = template;
		md = replace( md, '<preamble>', preambleTemplate );
		md = replace( md, '<today>', today() );
	}
}
const initialState = {
	markdown: md,
	preamble: config.get( 'mostRecentPreamble' ) || {},
	preambleText: config.get( 'mostRecentPreambleText' ) || '',
	isScrolling: true,
	hideToolbar: false,
	filePath,
	fileName: config.get( 'mostRecentFileName' ),
	currentRole: 'user',
	currentMode: 'offline',
	namespaceName: null,
	error: null,
	fontSize: config.get( 'fontSize' ) || 14,
	preambleTemplate: preambleTemplate
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
			html: action.payload.html,
			error: null
		});
	case types.PREAMBLE_CHANGED:
		return Object.assign({}, state, {
			preamble: action.payload.preamble,
			preambleText: action.payload.preambleText,
			error: null
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
	case types.PREAMBLE_TEMPLATE_CHANGED:
		config.set( 'preambleTemplate', action.payload.preambleTemplate );
		return Object.assign({}, state, {
			preambleTemplate: action.payload.preambleTemplate
		});
	default:
		return state;
	}
}
