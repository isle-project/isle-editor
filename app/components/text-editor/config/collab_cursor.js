// MODULES //

import { Plugin } from 'prosemirror-state';
import { Decoration, DecorationSet } from 'prosemirror-view';
import logger from 'debug';
import objectKeys from '@stdlib/utils/keys';
import './ui/collaborative_cursor.css';


// VARIABLES //

const debug = logger( 'isle:text-editor' );
const PLACEHOLDER_ID = 'cursor-widget';


// MAIN //

const collaborativeCursorPlugin = new Plugin({
	state: {
		init() {
			return DecorationSet.empty;
		},
		apply( tr, set ) {
			const action = tr.getMeta( this );
			if ( action && action.cursors ) {
				const users = objectKeys( action.cursors );

				// Reset any existing decorations:
				set = DecorationSet.empty;
				for ( let i = 0; i < users.length; i++ ) {
					const id = users[ i ];
					if ( id === action.clientID ) {
						continue;
					}
					const widget = document.createElement( 'span' );
					widget.className = 'editor-collaborative-cursor';
					const line = document.createElement( 'span' );
					line.className = 'editor-collaborative-cursor-line';
					widget.appendChild( line );

					const text = document.createElement( 'span' );
					text.innerHTML = id;
					text.className = 'editor-collaborative-cursor-text';
					widget.appendChild( text );

					const from = action.cursors[ id ].from - 1;
					debug( 'Should display cursor at position: '+from );
					const deco = Decoration.widget( from, widget, {
						PLACEHOLDER_ID
					});
					set = set.add( tr.doc, [ deco ] );
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
