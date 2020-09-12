// MODULES //

import PINF from '@stdlib/constants/math/float64-pinf';
import * as types from 'constants/editor_actions.js';


// MAIN //

function updateMarkdown( markdown = '' ) {
	return {
		type: types.MARKDOWN_CHANGED,
		payload: {
			markdown
		}
	};
}


// EXPORTS //

export function convertMarkdown( markdown ) {
	return updateMarkdown( markdown );
}

export function fileLoaded({ fileName, filePath, file }) {
	return {
		type: types.FILE_LOADED,
		payload: {
			fileName,
			filePath,
			file
		}
	};
}

export function createdFromTemplate({ template, preamble, preambleText }) {
	return {
		type: types.CREATED_FROM_TEMPLATE,
		payload: {
			template,
			preamble,
			preambleText
		}
	};
}

export function saveSpellingErrors( errors ) {
	return {
		type: types.SPELLING_ERRORS,
		payload: {
			errors
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

export function jumpToElementInEditor({ startLineNumber, endLineNumber, startColumn = 0, endColumn = PINF, elementRangeAction }) {
	return {
		type: types.JUMP_TO_ELEMENT_IN_EDITOR,
		payload: {
			startLineNumber,
			endLineNumber,
			startColumn,
			endColumn,
			elementRangeAction
		}
	};
}

export function switchWithNext({ current, next, elementRangeAction }) {
	return {
		type: types.SWITCH_WITH_NEXT,
		payload: {
			current,
			next,
			elementRangeAction
		}
	};
}

export function switchWithPrevious({ current, previous, elementRangeAction }) {
	return {
		type: types.SWITCH_WITH_PREVIOUS,
		payload: {
			current,
			previous,
			elementRangeAction
		}
	};
}

export function toggleConfigurator( opened ) {
	return {
		type: types.TOGGLE_CONFIGURATOR,
		payload: {
			opened
		}
	};
}

export function toggleLineButtons( show ) {
	return {
		type: types.TOGGLE_LINE_BUTTONS,
		payload: {
			show
		}
	};
}

export function setConfiguratorComponent({ component }) {
	return {
		type: types.SET_CONFIGURATOR_COMPONENT,
		payload: {
			component
		}
	};
}

export function pasteInsertion({ text }) {
	return {
		type: types.PASTE_INSERTION,
		payload: {
			text
		}
	};
}

export function clearInsertion() {
	return {
		type: types.CLEAR_INSERTION,
		payload: {}
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

export function changeSplitPos( splitPos ) {
	return {
		type: types.SPLIT_POS_CHANGED,
		payload: {
			splitPos
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

export function changeAutoUpdate( autoUpdatePreview ) {
	return {
		type: types.AUTO_UPDATE_CHANGED,
		payload: {
			autoUpdatePreview
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

export function changePreambleTemplate( preambleTemplate ) {
	return {
		type: types.PREAMBLE_TEMPLATE_CHANGED,
		payload: {
			preambleTemplate
		}
	};
}

export function downloadProgress( percent ) {
	return {
		type: types.DOWNLOAD_PROGRESS,
		payload: {
			percent
		}
	};
}

export function updateDownloaded() {
	return {
		type: types.UPDATE_DOWNLOADED
	};
}

export function updateDownloading() {
	return {
		type: types.UPDATE_DOWNLOADING
	};
}

export function updateAvailable( info ) {
	return {
		type: types.UPDATE_AVAILABLE,
		payload: {
			info
		}
	};
}
