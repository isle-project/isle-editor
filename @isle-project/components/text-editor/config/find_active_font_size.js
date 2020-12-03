
/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/findActiveFontSize.js
*
* MIT License
*
* Copyright (c) 2018 Chan Zuckerberg Initiative
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

import { findParentNodeOfType } from 'prosemirror-utils';
import findActiveMark from './find_active_mark.js';


// VARIABLES //

const FONT_PT_SIZE_DEFAULT = 12;

const MAP_HEADING_LEVEL_TO_FONT_PT_SIZE = {
	'1': 26,
	'2': 20,
	'3': 18,
	'4': 15,
	'5': 12
};


// MAIN //

function findActiveFontSize( state ) {
	const { schema, doc, selection, tr } = state;
	const markType = schema.marks.fontSize;
	const heading = schema.nodes.heading;
	const defaultSize = String( FONT_PT_SIZE_DEFAULT );
	if ( !markType ) {
		return defaultSize;
	}

	const { from, to, empty } = selection;
	if ( empty ) {
		const storedMarks =
			tr.storedMarks ||
			state.storedMarks ||
			(selection.$cursor &&
				selection.$cursor.marks &&
				selection.$cursor.marks()) ||
			[];
		const sm = storedMarks.find(m => m.type === markType);
		return sm ? String( sm.attrs.pt || defaultSize ) : defaultSize;
	}

	const mark = markType ? findActiveMark( doc, from, to, markType ) : null;
	if ( mark ) {
		return String( mark.attrs.pt );
	}
	if ( !heading ) {
		return defaultSize;
	}
	const result = findParentNodeOfType( heading )( state.selection );
	if ( !result ) {
		return defaultSize;
	}
	const level = String( result.node.attrs.level );
	return MAP_HEADING_LEVEL_TO_FONT_PT_SIZE[ level ] || defaultSize;
}


// EXPORTS //

export default findActiveFontSize;
