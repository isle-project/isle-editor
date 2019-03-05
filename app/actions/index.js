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

export function saveLintErrors( errors ) {
	return {
		type: types.LINT_ERRORS,
		payload: {
			errors
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

export function updatePreamble({ preamble, preambleText }) {
	return {
		type: types.PREAMBLE_CHANGED,
		payload: {
			preamble,
			preambleText
		}
	};
}

export function changeView( role ) {
	return {
		type: types.ROLE_CHANGED,
		payload: {
			role
		}
	};
}

export function changeMode( mode ) {
	return {
		type: types.MODE_CHANGED,
		payload: {
			mode
		}
	};
}

export function changeNamespace( namespaceName ) {
	return {
		type: types.SERVER_NAMESPACE_CHANGED,
		payload: {
			namespaceName
		}
	};
}

export function changeRenderInterval( renderInterval ) {
	return {
		type: types.RENDER_INTERVAL_CHANGED,
		payload: {
			renderInterval
		}
	};
}

export function changeFontSize( fontSize ) {
	return {
		type: types.FONT_SIZE_CHANGED,
		payload: {
			fontSize
		}
	};
}
