/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/LinkSetURLCommand.js
*
* MIT License
*
* Copyright (c) 2019 Chan Zuckerberg Initiative
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/

/* eslint-disable class-methods-use-this */

// MODULES //

import { TextSelection } from 'prosemirror-state';
import { hideSelectionPlaceholder, showSelectionPlaceholder } from './selection_placeholder_plugin.js';
import AnnotationEditor from './ui/annotation_editor.js';
import { commentPlugin, Comment } from './comments.js';
import icons from './icons.js';
import UICommand from './ui/ui_command.js';
import createPopUp from './ui/create_popup.js';


// FUNCTIONS //

/**
 * Generate a random unique ID for an annotation.
 *
 * @returns {number} unique identifier
 */
function randomID() {
	return Math.floor( Math.random() * 0xffffffff );
}


// MAIN //

class AnnotationCommand extends UICommand {
	_popUp = null;

	title = 'add-annotation';
	content = icons.annotation;

	enable = ( state ) => {
		if (!(state.selection instanceof TextSelection)) {
			// Could be a NodeSelection or CellSelection.
			return false;
		}
		const { from, to } = state.selection;
		return from < to;
	};

	waitForUserInput = (
		state,
		dispatch,
		view,
		event
	) => {
		if ( this._popUp ) {
			return Promise.resolve( void 0 );
		}
		if ( dispatch ) {
			dispatch( showSelectionPlaceholder( state ) );
		}
		return new Promise( resolve => {
			this._popUp = createPopUp( AnnotationEditor, {}, {
				modal: true,
				onClose: ( val ) => {
					if ( this._popUp ) {
						this._popUp = null;
						resolve( val );
					}
				}
			});
		});
	};

	executeWithUserInput = (
		state,
		dispatch,
		view,
		annotation
	) => {
		if ( dispatch ) {
			const { selection } = state;
			let { tr } = state;
			tr = view ? hideSelectionPlaceholder( view.state ) : tr;
			tr = tr.setSelection( selection );
			tr = tr.setMeta( commentPlugin, {
				type: 'newComment',
				from: selection.from,
				to: selection.to,
				comment: new Comment( annotation, randomID() )
			});
			dispatch( tr );
		}
		if ( view ) {
			view.focus();
		}
		return true;
	};
}


// EXPORTS //

export default AnnotationCommand;
