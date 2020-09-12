// MODULES //

import { readFileSync } from 'fs';
import { basename } from 'path';
import logger from 'debug';
import replace from '@stdlib/string/replace';
import exists from '@stdlib/fs/exists';
import * as types from 'constants/editor_actions.js';
import Store from 'electron-store';
import template from 'constants/templates/generic.js';
import PREAMBLE from 'constants/preamble.js';
import rendererStore from 'store/electron.js';
import today from 'utils/today';


// VARIABLES //

const mainStore = new Store( 'isle-main' );
const debug = logger( 'isle-editor:reducers' );
let filePath = mainStore.get( 'mostRecentFilePath' );
if ( !exists.sync( filePath ) ) {
	filePath = null;
}
let preambleText;
let preamble;
let fileName;
let md = mainStore.get( 'mostRecentFileData' );
const preambleTemplate = mainStore.get( 'preambleTemplate' ) || PREAMBLE;
if ( filePath ) {
	if ( !md ) {
		debug( `Reading file at ${filePath}` );
		md = readFileSync( filePath, 'utf-8' );
	}
	preamble = mainStore.get( 'mostRecentPreamble' );
	preambleText = mainStore.get( 'mostRecentPreambleText' );
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
	elementRange: null,
	elementRangeAction: null,
	elementRangeVersion: 0,
	filePath,
	fileName,
	currentRole: 'user',
	currentMode: 'offline',
	namespaceName: null,
	splitPos: parseFloat( rendererStore.get( 'splitPos' ) ) || 0.5,
	error: null,
	fontSize: mainStore.get( 'fontSize' ) || 14,
	preambleTemplate: preambleTemplate,
	author: authorMatch ? authorMatch[ 1 ] : '',
	unsaved: false
};


// EXPORTS //

export default function markdown( state = initialState, action ) {
	switch ( action.type ) {
	case types.CREATED_FROM_TEMPLATE: {
		let md = action.payload.template;
		md = replace( md, '<preamble>', action.payload.preambleText );
		md = replace( md, '<today>', today() );
		return {
			...state,
			markdown: md,
			preamble: action.payload.preamble,
			preambleText: action.payload.preambleText,
			unsaved: false
		};
	}
	case types.FILE_LOADED:
		return {
			...state,
			fileName: action.payload.fileName,
			filePath: action.payload.filePath,
			markdown: action.payload.file,
			unsaved: false
		};
	case types.ENCOUNTERED_ERROR:
		return {
			...state,
			error: action.payload.error
		};
	case types.RESET_ERROR:
		return {
			...state,
			error: null
		};
	case types.MARKDOWN_CHANGED:
		return {
			...state,
			markdown: action.payload.markdown,
			error: null,
			unsaved: true
		};
	case types.PREAMBLE_CHANGED:
		return {
			...state,
			preamble: action.payload.preamble,
			preambleText: action.payload.preambleText,
			error: null
		};
	case types.ROLE_CHANGED:
		return {
			...state,
			currentRole: action.payload.role
		};
	case types.MODE_CHANGED:
		return {
			...state,
			currentMode: action.payload.mode
		};
	case types.SERVER_NAMESPACE_CHANGED:
		return {
			...state,
			namespaceName: action.payload.namespaceName
		};
	case types.SPLIT_POS_CHANGED:
		return {
			...state,
			splitPos: action.payload.splitPos
		};
	case types.JUMP_TO_ELEMENT_IN_EDITOR:
		return {
			...state,
			elementRange: {
				startLineNumber: action.payload.startLineNumber,
				endLineNumber: action.payload.endLineNumber,
				startColumn: action.payload.startColumn,
				endColumn: action.payload.endColumn
			},
			elementRangeVersion: state.elementRangeVersion + 1,
			elementRangeAction: action.payload.elementRangeAction
		};
	case types.SWITCH_WITH_NEXT:
		return {
			...state,
			elementRange: {
				next: action.payload.next,
				current: action.payload.current
			},
			elementRangeVersion: state.elementRangeVersion + 1,
			elementRangeAction: action.payload.elementRangeAction
		};
	case types.SWITCH_WITH_PREVIOUS:
		return {
			...state,
			elementRange: {
				previous: action.payload.previous,
				current: action.payload.current
			},
			elementRangeVersion: state.elementRangeVersion + 1,
			elementRangeAction: action.payload.elementRangeAction
		};
	case types.TOGGLE_SCROLLING:
		return {
			...state,
			isScrolling: !state.isScrolling
		};
	case types.TOGGLE_TOOLBAR:
		return {
			...state,
			hideToolbar: !state.hideToolbar
		};
	case types.FONT_SIZE_CHANGED:
		mainStore.set( 'fontSize', action.payload.fontSize );
		return {
			...state,
			fontSize: action.payload.fontSize
		};
	case types.PREAMBLE_TEMPLATE_CHANGED:
		mainStore.set( 'preambleTemplate', action.payload.preambleTemplate );
		return {
			...state,
			preambleTemplate: action.payload.preambleTemplate
		};
	default:
		return state;
	}
}
