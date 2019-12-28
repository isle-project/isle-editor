/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/findActiveMark.js
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

import max from '@stdlib/math/base/special/max';
import min from '@stdlib/math/base/special/min';


// MAIN //

function findActiveMark( doc, from, to, markType ) {
	let ii = from;
	if ( doc.nodeSize <= 2 ) {
		return null;
	}
	const finder = mark => mark.type === markType;
	from = max( 2, from );
	to = min( to, doc.nodeSize - 2 );

	while ( ii <= to ) {
		const node = doc.nodeAt(ii);
		if ( !node || !node.marks ) {
			ii++;
			continue;
		}
		const mark = node.marks.find( finder );
		if ( mark ) {
			return mark;
		}
		ii += 1;
	}
	return null;
}


// EXPORTS //

export default findActiveMark;
