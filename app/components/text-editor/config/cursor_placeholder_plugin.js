/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/CursorPlaceholderPlugin.js
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

import { Plugin } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';
import './ui/cursor_placeholder.css';


// VARIABLES //

const PLACE_HOLDER_ID = {
	name: 'CursorPlaceholderPlugin'
};

let singletonInstance = null;

// https://prosemirror.net/examples/upload/
const SPEC = {
	state: {
		init() {
			return DecorationSet.empty;
		},
		apply( tr, set ) {
			set = set.map( tr.mapping, tr.doc );
			const action = tr.getMeta( this );
			if ( !action ) {
				return set;
			}
			if ( action.add ) {
				const widget = document.createElement( 'editor-cursor-placeholder');
				widget.className = 'editor-cursor-placeholder';
				const deco = Decoration.widget(action.add.pos, widget, {
					id: PLACE_HOLDER_ID
				});
				set = set.add( tr.doc, [deco] );
			} else if ( action.remove ) {
				const found = set.find( null, null, specFinder );
				set = set.remove( found );
			}
			return set;
		}
	},
	props: {
		decorations: state => {
			const plugin = singletonInstance;
			return plugin ? plugin.getState( state ) : null;
		}
	}
};


// MAIN //

class CursorPlaceholderPlugin extends Plugin {
	constructor() {
		super( SPEC );
		if ( singletonInstance ) {
			return singletonInstance;
		}
		singletonInstance = this; // eslint-disable-line consistent-this
	}
}

function specFinder( spec ) {
	return spec.id === PLACE_HOLDER_ID;
}

function findCursorPlaceholderPos( state ) {
	if ( !singletonInstance ) {
		return null;
	}
	const decos = singletonInstance.getState( state );
	const found = decos.find( null, null, specFinder );
	const pos = found.length ? found[0].from : null;
	return pos || null;
}

export function showCursorPlaceholder( state ) {
	const plugin = singletonInstance;
	let { tr } = state;
	if ( !plugin || !tr.selection ) {
		return tr;
	}
	const pos = findCursorPlaceholderPos( state );
	if ( pos === null ) {
		if ( !tr.selection.empty ) {
			// Replace the selection with a placeholder.
			tr = tr.deleteSelection();
		}
		tr = tr.setMeta( plugin, {
			add: {
				pos: tr.selection.from
			}
		});
	}
	return tr;
}

export function hideCursorPlaceholder( state ) {
	const plugin = singletonInstance;
	let { tr } = state;
	if ( !plugin ) {
		return tr;
	}
	const pos = findCursorPlaceholderPos( state );
	if ( pos !== null ) {
		tr = tr.setMeta( plugin, {
			remove: {}
		});
	}
	return tr;
}


// EXPORTS //

export default CursorPlaceholderPlugin;
