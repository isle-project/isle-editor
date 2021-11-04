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
import isUndefined from '@stdlib/assert/is-undefined';
import { hideSelectionPlaceholder, showSelectionPlaceholder } from './selection_placeholder_plugin.js';
import applyMark from './apply_mark.js';
import findNodesWithSameMark from './find_nodes_with_same_mark.js';
import LinkURLEditor from './ui/link_url_editor.js';
import icons from './icons.js';
import UICommand from './ui/ui_command.js';
import createPopUp from './ui/create_popup.js';


// VARIABLES //

const MARK_LINK = 'link';


// MAIN //

class LinkSetURLCommand extends UICommand {
	_popUp = null;

	title = 'apply-link';
	content = icons.link;

	enable = ( state ) => {
		if ( !( state.selection instanceof TextSelection ) ) {
			// Could be a NodeSelection or CellSelection.
			return false;
		}

		const markType = state.schema.marks[MARK_LINK];
		if (!markType) {
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
		const { doc, schema, selection } = state;
		const markType = schema.marks[MARK_LINK];
		if (!markType) {
			return Promise.resolve( void 0 );
		}
		const { from, to } = selection;
		const result = findNodesWithSameMark( doc, from, to, markType );
		const href = result ? result.mark.attrs.href : null;
		return new Promise( resolve => {
			this._popUp = createPopUp( LinkURLEditor, { href }, {
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
		href
	) => {
		if ( dispatch ) {
			const { selection, schema } = state;
			let { tr } = state;
			tr = view ? hideSelectionPlaceholder(view.state) : tr;
			tr = tr.setSelection(selection);
			if ( !isUndefined( href ) ) {
				const markType = schema.marks[MARK_LINK];
				const attrs = href ? { href } : null;
				tr = applyMark(
					tr.setSelection( state.selection ),
					schema,
					markType,
					attrs,
				);
			}
			dispatch( tr );
		}
		if ( view ) {
			view.focus();
		}
		return true;
	};
}


// EXPORTS //

export default LinkSetURLCommand;
