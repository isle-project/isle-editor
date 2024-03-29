/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/isElementFullyVisible.js
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

import { fromHTMlElement } from './rects';


// EXPORTS //

/**
 * Checks if an element is fully visible.
 *
 * @param {HTMLElement} el - DOM element
 * @returns {boolean} true if the element is fully visible, otherwise false
 */
export default function isElementFullyVisible( el ) {
	const { x, y, w, h } = fromHTMlElement( el );

	// Only checks the top-left point.
	const nwEl = ( w && h && el ) ?
		el.ownerDocument.elementFromPoint( x + 1, y + 1 ) :
		null;

	if ( !nwEl ) {
		return false;
	}
	if ( nwEl === el ) {
		return true;
	}
	if ( el.contains( nwEl ) ) {
		return true;
	}
	return false;
}
