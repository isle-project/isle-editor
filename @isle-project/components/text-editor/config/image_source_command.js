/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ImageSourceCommand.js
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

import React from 'react';
import { Fragment } from 'prosemirror-model';
import { TextSelection } from 'prosemirror-state';
import {
	hideCursorPlaceholder,
	showCursorPlaceholder
} from './cursor_placeholder_plugin.js';
import UICommand from './ui/ui_command.js';
import createPopUp from './ui/create_popup.js';


// VARIABLES //

const IMAGE = 'image';


// FUNCTIONS //

function insertImage( tr, schema, src ) {
	const { selection } = tr;
	if (!selection) {
		return tr;
	}
	const { from, to } = selection;
	if (from !== to) {
		return tr;
	}
	const image = schema.nodes[IMAGE];
	if (!image) {
		return tr;
	}
	const attrs = {
		src: src || '',
		alt: '',
		title: ''
	};
	const node = image.create( attrs, null, null );
	const frag = Fragment.from( node );
	tr = tr.insert( from, frag );
	return tr;
}


// MAIN //

class ImageSourceCommand extends UICommand {
	_popUp = null;

	enable = ( state, view ) => {
		return this.__isEnabled(state, view);
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
			dispatch( showCursorPlaceholder( state ) );
		}
		return new Promise(resolve => {
			const props = { runtime: view ? view.runtime : null };
			this._popUp = createPopUp(this.getEditor(), props, {
				modal: true,
				onClose: val => {
					if ( this._popUp ) {
						this._popUp = null;
						resolve(val);
					}
				}
			});
		});
	};

	executeWithUserInput = (
		state,
		dispatch,
		view,
		inputs
	) => {
		if ( dispatch ) {
			const { selection, schema } = state;
			let { tr } = state;
			tr = view ? hideCursorPlaceholder(view.state) : tr;
			tr = tr.setSelection(selection);
			if ( inputs ) {
				const { src } = inputs;
				tr = insertImage(tr, schema, src);
			}
			dispatch(tr);
			if ( view ) {
				view.focus();
			}
		}
		return false;
	};

	__isEnabled = ( state, view ) => {
		const tr = state;
		const { selection } = tr;
		if ( selection instanceof TextSelection ) {
			return selection.from === selection.to;
		}
		return false;
	};
}


// EXPORTS //

export default ImageSourceCommand;
