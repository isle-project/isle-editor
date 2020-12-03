/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/findActionableCell.js
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

import { TextSelection } from 'prosemirror-state';
import { CellSelection, TableMap } from 'prosemirror-tables';
import { findParentNodeOfType } from 'prosemirror-utils';


// VARIABLES //

const TABLE_CELL = 'table_cell';
const TABLE_HEADER = 'table_header';


// FUNCTIONS //

function findActionableCellFromSelection( selection ) {
	const { $anchorCell } = selection;
	const start = $anchorCell.start( -1 );
	const table = $anchorCell.node( -1 );
	const tableMap = TableMap.get( table );
	let topRightRect;
	let posFound = null;
	let nodeFound = null;
	selection.forEachCell(( cell, cellPos ) => {
		const cellRect = tableMap.findCell(cellPos - start);
		if (
			!topRightRect ||
			(cellRect.top >= topRightRect.top && cellRect.left > topRightRect.left)
		) {
			topRightRect = cellRect;
			posFound = cellPos;
			nodeFound = cell;
		}
	});
	return posFound === null ? null : {
		node: nodeFound,
		pos: posFound
	};
}


// EXPORTS //

export default function findActionableCell( state ) {
	const { doc, selection, schema } = state;
	const tdType = schema.nodes[ TABLE_CELL ];
	const thType = schema.nodes[ TABLE_HEADER ];
	if ( !tdType && !thType ) {
		return null;
	}
	let userSelection = selection;
	if ( userSelection instanceof TextSelection ) {
		const result =
			( tdType && findParentNodeOfType( tdType )( selection ) ) ||
			( thType && findParentNodeOfType( thType )( selection ) );

		if ( !result ) {
			return null;
		}
		userSelection = CellSelection.create( doc, result.pos );
	}
	if ( userSelection instanceof CellSelection ) {
		return findActionableCellFromSelection( userSelection );
	}
	return null;
}
