// MODULES //

import PINF from '@stdlib/constants/float64/pinf';
import * as types from 'constants/editor_actions.js';


// EXPORTS //

/**
 * A function to update the Markdown of the editor.
 *
 * @private
 * @param {string} [markdown=''] - Markdown text
 * @returns {Object} action object
 */
export function convertMarkdown( markdown = '' ) {
	return {
		type: types.MARKDOWN_CHANGED,
		payload: {
			markdown
		}
	};
}

/**
 * Returns an action object for a file being loaded.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {string} [options.fileName] - file name
 * @param {string} [options.filePath] - file path
 * @param {Object} [options.file] - file object
 * @returns {Object} action object
 */
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

/**
 * Returns an action object for a file that was created from a template.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {string} [options.template] - template name
 * @param {Object} [options.preamble] - preamble object
 * @param {string} [options.preambleText] - preamble text
 * @returns {Object} action object
 */
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

/**
 * Returns an action object that a new file was created.
 *
 * @private
 * @returns {Object} action object
 */
export function createdNewFile() {
	return {
		type: types.CREATED_NEW_FILE
	};
}

/**
 * Returns an action object for spelling errors.
 *
 * @private
 * @param {Array} errors - array of error objects
 * @returns {Object} action object
 */
export function saveSpellingErrors( errors ) {
	return {
		type: types.SPELLING_ERRORS,
		payload: {
			errors
		}
	};
}

/**
 * Returns an action object for lint errors.
 *
 * @private
 * @param {Array} errors - array of error objects
 * @returns {Object} action object
 */
export function saveLintErrors( errors ) {
	return {
		type: types.LINT_ERRORS,
		payload: {
			errors
		}
	};
}

/**
 * Returns an action object for an error that was encountered.
 *
 * @private
 * @param {Object} error - error object
 * @returns {Object} action object
 */
export function encounteredError( error ) {
	return {
		type: types.ENCOUNTERED_ERROR,
		payload: {
			error
		}
	};
}

/**
 * Returns an action object for an error being reset.
 *
 * @private
 * @returns {Object} action object
 */
export function resetError() {
	return {
		type: types.RESET_ERROR
	};
}

/**
 * Returns an action object for jumping to an element in the editor.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {number} [options.startLineNumber] - start line number
 * @param {number} [options.endLineNumber] - end line number
 * @param {number} [options.startColumn=0] - start column
 * @param {number} [options.endColumn=Infinity] - end column
 * @param {Object} [options.elementRangeAction] - element range action
 * @returns {Object} action object
 */
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

/**
 * Returns an action object for switching an element with the next.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {Object} [options.current] - current element
 * @param {Object} [options.next] - next element
 * @returns {Object} action object
 */
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

/**
 * Returns an action object for switching an element with the previous one.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {Object} [options.current] - current element
 * @param {Object} [options.previous] - previous element
 * @returns {Object} action object
 */
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

/**
 * Returns an action object for when the component wizard visibility changes.
 *
 * @private
 * @param {boolean} opened - whether the component wizard has been opened or closed
 * @returns {Object} action object
 */
export function toggleConfigurator( opened ) {
	return {
		type: types.TOGGLE_CONFIGURATOR,
		payload: {
			opened
		}
	};
}

/**
 * Returns an action object for when line buttons are toggled on or off.
 *
 * @private
 * @param {boolean} show - whether the line buttons are shown or not
 * @returns {Object} action object
 */
export function toggleLineButtons( show ) {
	return {
		type: types.TOGGLE_LINE_BUTTONS,
		payload: {
			show
		}
	};
}

/**
 * Returns an action object for when the component of the component wizard changes.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {Object} [options.component] - component object
 * @returns {Object} action object
 */
export function setConfiguratorComponent({ component }) {
	return {
		type: types.SET_CONFIGURATOR_COMPONENT,
		payload: {
			component
		}
	};
}

/**
 * Returns an action object for when a text has been pasted into the editor.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {string} [options.text] - text that was pasted
 * @returns {Object} action object
 */
export function pasteInsertion({ text }) {
	return {
		type: types.PASTE_INSERTION,
		payload: {
			text
		}
	};
}

/**
 * Returns an action object for when an insertion has been cleared.
 *
 * @private
 * @returns {Object} action object
 */
export function clearInsertion() {
	return {
		type: types.CLEAR_INSERTION,
		payload: {}
	};
}

/**
 * Returns an action object for when a CSS rule has been appended to the lesson preamble.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {string} [options.css] - CSS rule
 * @returns {Object} action object
 */
export function appendCSSToPreamble({ css }) {
	return {
		type: types.APPEND_CSS_TO_PREAMBLE,
		payload: {
			css
		}
	};
}

/**
 * Returns an action object for when scrolling has been toggled on or off.
 *
 * @private
 * @returns {Object} action object
 */
export function toggleScrolling() {
	return {
		type: types.TOGGLE_SCROLLING
	};
}

/**
 * Returns an action object for when the toolbar has been toggled on or off.
 *
 * @private
 * @returns {Object} action object
 */
export function toggleToolbar() {
	return {
		type: types.TOGGLE_TOOLBAR
	};
}

/**
 * Returns an action object for when the mini map has been toggled on or off.
 *
 * @private
 * @returns {Object} action object
 */
export function toggleMiniMap() {
	return {
		type: types.TOGGLE_MINI_MAP
	};
}

/**
 * Returns an action object for when quick suggestions has been toggled on or off.
 *
 * @private
 * @returns {Object} action object
 */
export function toggleQuickSuggestions() {
	return {
		type: types.TOGGLE_QUICK_SUGGESTIONS
	};
}

/**
 * Returns an action object for when the preamble has been updated.
 *
 * @private
 * @param {Object} [options] - function options
 * @param {Object} [options.preamble] - preamble object
 * @param {string} [options.preambleText] - preamble text
 * @returns {Object} action object
 */
export function updatePreamble({ preamble, preambleText }) {
	return {
		type: types.PREAMBLE_CHANGED,
		payload: {
			preamble,
			preambleText
		}
	};
}

/**
 * Returns an action object for when the role the lesson is viewed as has been changed.
 *
 * @private
 * @param {string} role - role the lesson is viewed as
 * @returns {Object} action object
 */
export function changeView( role ) {
	return {
		type: types.ROLE_CHANGED,
		payload: {
			role
		}
	};
}

/**
 * Returns an action object for when the lesson is viewed in `online` or `offline` mode.
 *
 * @private
 * @param {string} mode - mode the lesson is viewed in
 * @returns {Object} action object
 */
export function changeMode( mode ) {
	return {
		type: types.MODE_CHANGED,
		payload: {
			mode
		}
	};
}

/**
 * Returns an action object for when the split position of the editor source and preview panes has changed.
 *
 * @private
 * @param {number} splitPosition - split position of the editor source and preview panes
 * @returns {Object} action object
 */
export function changeSplitPos( splitPos ) {
	return {
		type: types.SPLIT_POS_CHANGED,
		payload: {
			splitPos
		}
	};
}

/**
 * Returns an action object for the horizontal split position.
 *
 * @private
 * @param {number} horizontalSplit - split position
 * @returns {Object} action object
 */
export function changeHorizontalSplit( horizontalSplit ) {
	return {
		type: types.HORIZONTAL_SPLIT_CHANGED,
		payload: {
			horizontalSplit
		}
	};
}

/**
 * Returns an action object for when the selected course has changed.
 *
 * @private
 * @param {string} namespaceName - namespace name
 * @returns {Object} action object
 */
export function changeNamespace( namespaceName ) {
	return {
		type: types.SERVER_NAMESPACE_CHANGED,
		payload: {
			namespaceName
		}
	};
}

/**
 * Returns an action object for when the render interval has changed.
 *
 * @private
 * @param {number} renderInterval - render interval
 * @returns {Object} action object
 */
export function changeRenderInterval( renderInterval ) {
	return {
		type: types.RENDER_INTERVAL_CHANGED,
		payload: {
			renderInterval
		}
	};
}

/**
 * Returns an action object for when auto update of the preview pane has been toggled on or off.
 *
 * @private
 * @param {boolean} autoUpdate - controls whether to auto update the contents of the preview pane
 * @returns {Object} action object
 */
export function changeAutoUpdate( autoUpdatePreview ) {
	return {
		type: types.AUTO_UPDATE_CHANGED,
		payload: {
			autoUpdatePreview
		}
	};
}


/**
 * Returns an action object for when the font size of the editor source pane has changed.
 *
 * @private
 * @param {number} fontSize - font size
 * @returns {Object} action object
 */
export function changeFontSize( fontSize ) {
	return {
		type: types.FONT_SIZE_CHANGED,
		payload: {
			fontSize
		}
	};
}


/**
 * Returns an action object for when the preamble template has been changed.
 *
 * @private
 * @param {string} preambleTemplate - preamble template
 * @returns {Object} action object
 */
export function changePreambleTemplate( preambleTemplate ) {
	return {
		type: types.PREAMBLE_TEMPLATE_CHANGED,
		payload: {
			preambleTemplate
		}
	};
}

/**
 * Returns an action object for when the download progress of a new editor version has incremented.
 *
 * @private
 * @param {number} progress - download progress
 * @returns {Object} action object
 */
export function downloadProgress( percent ) {
	return {
		type: types.DOWNLOAD_PROGRESS,
		payload: {
			percent
		}
	};
}

/**
 * Returns an action object for when the download progress of a new editor version has completed.
 *
 * @private
 * @returns {Object} action object
 */
export function updateDownloaded() {
	return {
		type: types.UPDATE_DOWNLOADED
	};
}

/**
 * Returns an action object for when the download of a new editor version has been initialized.
 *
 * @private
 * @returns {Object} action object
 */
export function updateDownloading() {
	return {
		type: types.UPDATE_DOWNLOADING
	};
}

/**
 * Returns an action object for when the a new available update of the editor has been detected.
 *
 * @private
 * @param {Object} info - update info
 * @returns {Object} action object
 */
export function updateAvailable( info ) {
	return {
		type: types.UPDATE_AVAILABLE,
		payload: {
			info
		}
	};
}

/**
 * Returns an action object for when the document version has been incremented.
 *
 * @private
 * @returns {Object} action object
 */
export function incrementDocumentVersion() {
	return {
		type: types.INCREMENT_DOCUMENT_VERSION
	};
}
