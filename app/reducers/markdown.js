// MODULES //

import { readFileSync } from 'fs';
import { basename, extname } from 'path';
import replace from '@stdlib/string/replace';
import exists from '@stdlib/fs/exists';
import * as types from 'constants/editor_actions.js';
import Store from 'electron-store';
import template from 'constants/template.js';
import PREAMBLE from 'constants/preamble.js';
import today from 'utils/today';


// VARIABLES //

const config = new Store( 'ISLE' );
let filePath = config.get( 'mostRecentFilePath' );
if ( !exists.sync( filePath ) ) {
	filePath = null;
}
let preambleText;
let preamble;
let fileName;
let md = config.get( 'mostRecentFileData' );
const preambleTemplate = config.get( 'preambleTemplate' ) || PREAMBLE;
if ( filePath ) {
	if ( !md ) {
		md = readFileSync( filePath, 'utf-8' );
	}
	preamble = config.get( 'mostRecentPreamble' );
	preambleText = config.get( 'mostRecentPreambleText' );
	fileName = basename( filePath );
}
else {
	md = template;
	md = replace( md, '<preamble>', preambleTemplate );
	md = replace( md, '<today>', today() );
}
const RE_AUTHOR = /author: ([^\n]+)/;
const authorMatch = preambleTemplate.match( RE_AUTHOR );

const initialState = {
	markdown: md,
	preamble: preamble || {},
	preambleText: preambleText || '',
	isScrolling: true,
	hideToolbar: false,
	filePath,
	fileName,
	currentRole: 'user',
	currentMode: 'offline',
	namespaceName: null,
	error: null,
	fontSize: config.get( 'fontSize' ) || 14,
	preambleTemplate: preambleTemplate,
	author: authorMatch ? authorMatch[ 1 ] : '',
	unsaved: false
};


// EXPORTS //

export default function markdown( state = initialState, action ) {
	switch ( action.type ) {
	case types.FILE_LOADED:
		return {
			...state,
			fileName: action.payload.fileName,
			filePath: action.payload.filePath,
			unsaved: false
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
			error: null,
			unsaved: !action.payload.loading
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
