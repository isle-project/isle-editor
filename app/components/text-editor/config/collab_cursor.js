// MODULES //

import { Plugin } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';
import logger from 'debug';
import './ui/collaborative_cursor.css';


// VARIABLES //

const debug = logger( 'isle:text-editor' );


// MAIN //

const collaborativeCursorPlugin = new Plugin({
	state: {
		init() {
			return DecorationSet.empty;
		},
		apply( tr, set ) {
			const action = tr.getMeta( this );
			const users = new Set();
			if ( action ) {
				for ( let i = action.clientIDs.length - 1; i >= 0; i-- ) {
					const id = action.clientIDs[ i ];
					if ( !users.has( id ) ) {
						users.add( id );
						const widget = document.createElement( 'span' );
						widget.className = 'editor-collaborative-cursor';
						const line = document.createElement( 'span' );
						line.className = 'editor-collaborative-cursor-line';
						widget.appendChild( line );

						const text = document.createElement( 'span' );
						text.innerHTML = id;
						text.className = 'editor-collaborative-cursor-text';
						widget.appendChild( text );

						// Remove any existing decorations:
						set = set.remove( set.find( null, null, spec => spec.id === id ) );

						const to = action.steps[ i ].to + 1;
						debug( 'Should display cursor at position: '+to );
						const deco = Decoration.widget( to, widget, {
							id
						});
						set = set.add( tr.doc, [ deco ] );
					}
				}
			}
			return set;
		}
	},
	props: {
		decorations( state ) {
			return this.getState( state );
		}
	}
});


// EXPORTS //

export default collaborativeCursorPlugin;
