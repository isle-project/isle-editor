/*
* Adapted from: https://raw.githubusercontent.com/chanzuckerberg/czi-prosemirror/master/src/HeadingNodeSpec.js
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

import ParagraphNodeSpec, { getParagraphNodeAttrs, toParagraphDOM } from './paragraph.js';


// VARIABLES //

const TAG_NAME_TO_LEVEL = {
	H1: 1,
	H2: 2,
	H3: 3,
	H4: 4,
	H5: 5,
	H6: 6
};


// FUNCTIONS //

function toDOM( node ) {
	const dom = toParagraphDOM( node );
	const level = node.attrs.level || 1;
	dom[ 0 ] = `h${level}`;
	return dom;
}

function getAttrs( dom ) {
	const attrs = getParagraphNodeAttrs( dom );
	const level = TAG_NAME_TO_LEVEL[dom.nodeName.toUpperCase()] || 1;
	attrs.level = level;
	return attrs;
 }


// MAIN //

const headingSpec = {
	...ParagraphNodeSpec,
	attrs: {
		...ParagraphNodeSpec.attrs,
		level: { default: 1 }
	},
	content: 'inline*',
	group: 'block',
	defining: true,
	parseDOM: [
		{ tag: 'h1', getAttrs },
		{ tag: 'h2', getAttrs },
		{ tag: 'h3', getAttrs },
		{ tag: 'h4', getAttrs },
		{ tag: 'h5', getAttrs },
		{ tag: 'h6', getAttrs }
	],
	toDOM
};


// EXPORTS //

export default headingSpec;
