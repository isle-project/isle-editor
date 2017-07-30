// MODULES //

import * as types from 'constants/actionTypes';


// MAIN //

function updateMarkdown( markdown = '' ) {
	return {
		type: types.MARKDOWN_CHANGED,
		payload: {
			html: '',
			markdown
		}
	};
}


// EXPORTS //

export function convertMarkdown( markdown ) {
	return updateMarkdown( markdown );
}

export function fileLoaded({ fileName, filePath }) {
	return {
		type: types.FILE_LOADED,
		payload: {
			fileName,
			filePath
		}
	};
}

export function encounteredError( error ) {
	return {
		type: types.ENCOUNTERED_ERROR,
		payload: {
			error
		}
	};
}

export function resetError() {
	return {
		type: types.RESET_ERROR
	};
}

export function toggleScrolling() {
	return {
		type: types.TOGGLE_SCROLLING
	};
}

export function toggleToolbar() {
	return {
		type: types.TOGGLE_TOOLBAR
	};
}

export function updatePreamble( preamble ) {
	return {
		type: types.PREAMBLE_CHANGED,
		payload: {
			preamble
		}
	};
}
