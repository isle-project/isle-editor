/**
* Adapted from https://prosemirror.net/examples/footnote/
*
* Copyright (C) 2015-2017 by Marijn Haverbeke <marijnh@gmail.com> and others
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

// MODULES //

import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { redo, undo } from 'prosemirror-history';
import { keymap } from 'prosemirror-keymap';
import { StepMap } from 'prosemirror-transform';
import isNull from '@stdlib/assert/is-null';
import min from '@stdlib/math/base/special/min';


// MAIN //

class FootnoteView {
	constructor( node, view, getPos ) {
		this.node = node;
		this.outerView = view;
		this.getPos = getPos;

		// The node's representation in the editor (empty, for now)
		this.dom = document.createElement( 'footnote' );
		// These are used when the footnote is selected
		this.innerView = null;
	}

	selectNode() {
		this.dom.classList.add( 'ProseMirror-selectednode' );
		if ( !this.innerView ) {
			this.open();
		}
	}

	deselectNode() {
		this.dom.classList.remove( 'ProseMirror-selectednode' );
		if ( this.innerView ) {
			this.close();
		}
	}

	open() {
		// Append a tooltip to the outer node
		let tooltip = this.dom.appendChild( document.createElement( 'div' ) );
		tooltip.className = 'footnote-tooltip';
		// And put a sub-ProseMirror into that
		this.innerView = new EditorView( tooltip, {
			// You can use any node as an editor document
			state: EditorState.create({
				doc: this.node,
				plugins: [ keymap({
					'Mod-z': () => undo(this.outerView.state, this.outerView.dispatch),
					'Mod-y': () => redo(this.outerView.state, this.outerView.dispatch)
				})]
			}),
			// This is the magic part:
			dispatchTransaction: this.dispatchInner,
			handleDOMEvents: {
				mousedown: () => {
					// Kludge to prevent issues due to the fact that the whole
					// footnote is node-selected (and thus DOM-selected) when
					// the parent editor is focused.
					if ( this.outerView.hasFocus() ) {
						this.innerView.focus();
					}
				}
			}
		});
	}

	close() {
		this.innerView.destroy();
		this.innerView = null;
		this.dom.textContent = '';
	}

	dispatchInner = ( tr ) => {
		let { state, transactions } = this.innerView.state.applyTransaction( tr );
		this.innerView.updateState( state );

		if ( !tr.getMeta( 'fromOutside' ) ) {
			let outerTr = this.outerView.state.tr;
			let offsetMap = StepMap.offset( this.getPos() + 1 );
			for ( let i = 0; i < transactions.length; i++ ) {
				let steps = transactions[i].steps;
				for ( let j = 0; j < steps.length; j++ ) {
					outerTr.step( steps[j].map( offsetMap ) );
				}
			}
			if ( outerTr.docChanged ) {
				this.outerView.dispatch( outerTr );
			}
		}
	};

	update( node ) {
		if ( !node.sameMarkup( this.node ) ) {
			return false;
		}
		this.node = node;
		if ( this.innerView ) {
			let state = this.innerView.state;
			let start = node.content.findDiffStart( state.doc.content );
			if ( !isNull( start ) ) {
				let { a: endA, b: endB } = node.content.findDiffEnd( state.doc.content );
				let overlap = start - min( endA, endB );
				if ( overlap > 0 ) {
					endA += overlap;
					endB += overlap;
				}
				this.innerView.dispatch(
					state.tr
						.replace( start, endB, node.slice(start, endA) )
						.setMeta( 'fromOutside', true ) );
			}
		}
		return true;
	}

	destroy() {
		if ( this.innerView ) {
			this.close();
		}
	}

	stopEvent( event ) {
		return this.innerView && this.innerView.dom.contains( event.target );
	}

	// eslint-disable-next-line class-methods-use-this
	ignoreMutation() {
		return true;
	}
}


// EXPORTS //

export default FootnoteView;
