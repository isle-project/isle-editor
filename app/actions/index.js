// MODULES //

import * as types from '../constants/actionTypes';


// UPDATE MARKDOWN //

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

export function toggleScrolling() {
	return {
		type: types.TOGGLE_SCROLLING
	};
}
