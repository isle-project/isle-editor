/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/TableCellMenuPlugin.js
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

// MODULES //

import React from 'react';
import { Plugin } from 'prosemirror-state';
import findActionableCell from './find_actionable_cell.js';
import { atAnchorTopRight } from './ui/popup_position.js';
import TableCellMenu from './ui/table_cell_menu.js';
import bindScrollHandler from './ui/bind_scroll_handler.js';
import createPopUp from './ui/create_popup.js';
import isElementFullyVisible from './ui/is_element_fully_visible.js';
import './ui/popup.css';


// FUNCTIONS //

class TableCellTooltipView {
	constructor( editorView ) {
		this._cellElement = null;
		this._popUp = null;
		this._scrollHandle = null;

		this.update( editorView, null );
	}

	update( view, lastState ) {
		const { state, readOnly } = view;
		const result = findActionableCell( state );

		if ( !result || readOnly ) {
			this.destroy();
			return;
		}

		// These is screen coordinate.
		const domFound = view.domAtPos(result.pos + 1);
		if (!domFound) {
			this.destroy();
			return;
		}

		let cellEl = domFound.node;
		const popUp = this._popUp;
		const viewPops = {
			editorState: state,
			editorView: view
		};

		if (cellEl && !isElementFullyVisible(cellEl)) {
			cellEl = null;
		}

		if (!cellEl) {
			// Closes the popup.
			if ( popUp ) {
				popUp.close();
			}
			this._cellElement = null;
		} else if (popUp && cellEl === this._cellElement) {
			// Updates the popup.
			popUp.update(viewPops);
		} else {
			// Creates a new popup.
			if ( popUp ) {
				popUp.close();
			}
			this._cellElement = cellEl;
			this._popUp = createPopUp(TableCellMenu, viewPops, {
				anchor: cellEl,
				autoDismiss: false,
				onClose: this._onClose,
				position: atAnchorTopRight
			});
			this._onOpen();
		}
	}

	destroy = () => {
		if ( this._popUp ) {
			this._popUp.close();
		}
		this._popUp = null;
	};

	_onOpen = () => {
		const cellEl = this._cellElement;
		if (!cellEl) {
			return;
		}
		this._scrollHandle = bindScrollHandler( cellEl, this._onScroll );
	};

	_onClose = () => {
		this._popUp = null;
		if ( this._scrollHandle ) {
			this._scrollHandle.dispose();
		}
		this._scrollHandle = null;
	};

	_onScroll = () => {
		const popUp = this._popUp;
		const cellEl = this._cellElement;
		if ( !popUp || !cellEl ) {
			return;
		}
		if ( !isElementFullyVisible( cellEl ) ) {
			popUp.close();
		}
	};
}

// https://prosemirror.net/examples/tooltip/
const SPEC = {
	view( editorView ) {
		return new TableCellTooltipView(editorView);
	}
};


// MAIN //

class TableCellMenuPlugin extends Plugin {
	constructor() {
		super( SPEC );
	}
}


// EXPORTS //

export default TableCellMenuPlugin;
