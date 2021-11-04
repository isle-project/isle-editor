/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/LinkTooltipPlugin.js
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

import { Plugin } from 'prosemirror-state';
import { TextSelection } from 'prosemirror-state';
import isUndefined from '@stdlib/assert/is-undefined';
import {
	hideSelectionPlaceholder,
	showSelectionPlaceholder
} from './selection_placeholder_plugin.js';
import applyMark from './apply_mark.js';
import findNodesWithSameMark from './find_nodes_with_same_mark.js';
import lookUpElement from './lookup_element.js';
import LinkTooltip from './ui/link_tooltip.js';
import LinkURLEditor from './ui/link_url_editor.js';
import { atAnchorTopCenter } from './ui/popup_position.js';
import createPopUp from './ui/create_popup.js';
import './ui/popup.css';


// VARIABLES //

const MARK_LINK = 'link';


// MAIN //

// https://prosemirror.net/examples/tooltip/
const SPEC = {
	view( editorView ) {
		return new LinkTooltipView( editorView );
	}
};

class LinkTooltipPlugin extends Plugin {
	constructor() {
		super(SPEC);
	}
}

class LinkTooltipView {
	_anchorEl = null;
	_popup = null;
	_editor = null;

	constructor( editorView ) {
		this.update( editorView, null );
	}

	update( view, lastState ) {
		if ( view.readOnly ) {
			this.destroy();
			return;
		}
		const { state } = view;
		const { doc, selection, schema } = state;
		const markType = schema.marks[ MARK_LINK ];
		if (!markType) {
			return;
		}
		const { from, to } = selection;
		const result = findNodesWithSameMark( doc, from, to, markType );

		if ( !result ) {
			this.destroy();
			return;
		}
		const domFound = view.domAtPos( from );
		if (!domFound) {
			this.destroy();
			return;
		}
		const anchorEl = lookUpElement( domFound.node, el => el.nodeName === 'A' );
		if ( !anchorEl ) {
			this.destroy();
			return;
		}

		const popup = this._popup;
		const viewPops = {
			editorState: state,
			editorView: view,
			href: result.mark.attrs.href,
			onCancel: this._onCancel,
			onEdit: this._onEdit,
			onRemove: this._onRemove
		};

		if ( popup && anchorEl === this._anchorEl ) {
			popup.update(viewPops);
		} else {
			if ( popup ) {
				popup.close();
			}
			this._anchorEl = anchorEl;
			this._popup = createPopUp(LinkTooltip, viewPops, {
				anchor: anchorEl,
				autoDismiss: false,
				onClose: this._onClose,
				position: atAnchorTopCenter
			});
		}
	}

	destroy() {
		if ( this._popup ) {
			this._popup.close();
		}
		if ( this._editor ) {
			this._editor.close();
		}
	}

	_onCancel = ( view ) => {
		this.destroy();
		view.focus();
	};

	_onClose = () => {
		this._anchorEl = null;
		this._editor = null;
		this._popup = null;
	};

	_onEdit = ( view ) => {
		if ( this._editor ) {
			return;
		}
		const { state } = view;
		const { schema, doc, selection } = state;
		const { from, to } = selection;
		const markType = schema.marks[ MARK_LINK ];
		const result = findNodesWithSameMark( doc, from, to, markType );
		if ( !result ) {
			return;
		}
		let { tr } = state;
		const linkSelection = TextSelection.create(
			tr.doc,
			result.from.pos,
			result.to.pos + 1
		);

		tr = tr.setSelection( linkSelection );
		tr = showSelectionPlaceholder( state, tr );
		view.dispatch( tr );

		const href = result ? result.mark.attrs.href : null;
		this._editor = createPopUp(
			LinkURLEditor,
			{ href },
			{
				onClose: value => {
					this._editor = null;
					this._onEditEnd( view, selection, value );
				}
			}
		);
	};

	_onRemove = ( view ) => {
		this._onEditEnd( view, view.state.selection, null );
	};

	_onEditEnd = (
		view,
		initialSelection,
		href
	) => {
		const { state, dispatch } = view;
		let tr = hideSelectionPlaceholder( state );

		if ( !isUndefined( href ) ) {
			const { schema } = state;
			const markType = schema.marks[ MARK_LINK ];
			if ( markType ) {
				const result = findNodesWithSameMark(
					tr.doc,
					initialSelection.from,
					initialSelection.to,
					markType
				);
				if ( result ) {
					const linkSelection = TextSelection.create(
						tr.doc,
						result.from.pos,
						result.to.pos + 1
					);
					tr = tr.setSelection( linkSelection );
					const attrs = href ? { href } : null;
					tr = applyMark(tr, schema, markType, attrs);
				}
			}
		}
		tr.setSelection( initialSelection.map( tr.doc, tr.mapping ) );
		dispatch( tr );
		view.focus();
	};
}


// EXPORTS //

export default LinkTooltipPlugin;
