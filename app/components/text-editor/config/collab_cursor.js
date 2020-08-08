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
			return {
				decorations: DecorationSet.empty,
				version: 0
			};
		},
		apply( tr, set ) {
			const action = tr.getMeta( this );
			let decorations;
			if ( action && action.cursors ) {
				const users = objectKeys( action.cursors );

				// Reset any existing decorations:
				decorations = DecorationSet.empty;
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

					const cursor = action.cursors[ id ];
					let from = cursor.from;
					let to = cursor.to;
					debug( 'Should display cursor at position: '+from );
					const deco = Decoration.widget( from, widget, {
						PLACEHOLDER_ID
					});
					const arr = [ deco ];
					if ( from !== to ) {
						if ( from > to ) {
							const tmp = to;
							to = from;
							from = tmp;
						}
						arr.push(
							Decoration.inline(
								from, to,
								{ class: 'editor-collaborative-cursor-selection' }
							)
						);
					}
					decorations = decorations.add( tr.doc, arr );
				}
				return {
					decorations,
					version: set.version + 1
				};
			}
			return set;
		}
	},
	props: {
		decorations( state ) {
			return this.getState( state ).decorations;
		}
	}
});


// EXPORTS //

export default collaborativeCursorPlugin;
