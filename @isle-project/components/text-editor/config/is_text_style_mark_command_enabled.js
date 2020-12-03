/*
* Adapted from https://raw.githubusercontent.com/chanzuckerberg/czi-prosemirror/master/src/isTextStyleMarkCommandEnabled.js
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

import { AllSelection, TextSelection } from 'prosemirror-state';


// MAIN //

// Whether the command for apply specific text style mark is enabled.
function isTextStyleMarkCommandEnabled( state, markName ) {
	const { selection, schema, tr } = state;
	const markType = schema.marks[ markName ];
	if ( !markType ) {
		return false;
	}
	if (
		!( selection instanceof TextSelection || selection instanceof AllSelection )
	) {
		// Could be a NodeSelection or CellSelection.
		return false;
	}
	const { from, to } = state.selection;
	if ( to === from + 1 ) {
		const node = tr.doc.nodeAt( from );
		if ( node.isAtom && !node.isText && node.isLeaf ) {
			// An atomic node (e.g. Image) is selected.
			return false;
		}
	}
	return true;
}


// EXPORTS //

export default isTextStyleMarkCommandEnabled;
