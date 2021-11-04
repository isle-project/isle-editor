/* eslint-disable class-methods-use-this */

// MODULES //

import { TextSelection } from 'prosemirror-state';
import { atAnchorBottomLeft } from './ui/popup_position.js';
import TableGridSizeEditor from './ui/table_grid_size_editor.js';
import isUndefinedOrNull from '@stdlib/assert/is-undefined-or-null';
import UICommand from './ui/ui_command.js';
import createPopUp from './ui/create_popup.js';


// FUNCTIONS //

function throwsIfNullOrUndefined( x ) {
	if ( !isUndefinedOrNull( x ) ) {
		return x;
	}
	const error = new Error( 'Received unexpected ' + x );
	error.framesToPop = 1;
	throw error;
}


// MAIN //

class TableInsertCommand extends UICommand {
	_popUp = null;

	title ='insert-table';
	content = 'insert-table';

	enable = ( state ) => {
		const tr = state;
		const { selection } = tr;
		if ( selection instanceof TextSelection ) {
			return selection.from === selection.to;
		}
		return false;
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
		const target = throwsIfNullOrUndefined( event ).target;
		if ( !( target instanceof HTMLElement ) ) {
			return Promise.resolve( void 0 );
		}
		const anchor = event ? event.target.parentElement.parentElement : null;
		return new Promise( resolve => {
			this._popUp = createPopUp( TableGridSizeEditor, null, {
				anchor,
				position: atAnchorBottomLeft,
				onClose: val => {
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
		inputs
	) => {
		if ( dispatch ) {
			const { schema } = state;
			if ( inputs ) {
				let { rows, cols } = inputs;
				const cells = [];
				while ( cols-- ) {
					cells.push(
						schema.nodes.table_cell.createAndFill(),
					);
				}
				const rowElements = [];
				while ( rows-- ) {
					rowElements.push(schema.nodes.table_row.createAndFill(
						void 0,
						cells
					));
				}
				const table = schema.nodes.table.createAndFill( void 0, rowElements );
				dispatch( state.tr.replaceSelectionWith( table ) );
			}
		}
		return false;
	};
}


// EXPORTS //

export default TableInsertCommand;
