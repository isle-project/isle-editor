// MODULES //

import * as types from 'constants/actionTypes';
import Configstore from 'configstore';
import template from 'constants/template.js';


// VARIABLES //

const config = new Configstore( 'ISLE' );
const initialState = {
	markdown: config.get( 'mostRecentFileData' ) || template,
	isScrolling: true,
	hideToolbar: false,
	filePath: config.get( 'mostRecentFilePath' ),
	fileName: config.get( 'mostRecentFileName' )
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
	case types.MARKDOWN_CHANGED:
		return Object.assign({}, state, {
			markdown: action.payload.markdown,
			html: action.payload.html
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
