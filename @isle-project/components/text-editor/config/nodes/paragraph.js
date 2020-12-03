/*
* Adapted from: https://raw.githubusercontent.com/chanzuckerberg/czi-prosemirror/master/src/ListItemNodeSpec.js
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

// VARIABLES //

const ALIGN_PATTERN = /(left|right|center|justify)/;
const ATTRIBUTE_INDENT = 'data-indent';
const EMPTY_CSS_VALUE = new Set(['', '0%', '0pt', '0px']);


// MAIN //

const ParagraphNodeSpec = {
	attrs: {
		align: { default: null },
		color: { default: null },
		id: { default: null },
		indent: { default: null },
		lineSpacing: { default: null },
		paddingBottom: { default: null },
		paddingTop: { default: null }
	},
	content: 'inline*',
	group: 'block',
	parseDOM: [{ tag: 'p', getAttrs }],
	toDOM
};

function getAttrs( dom ) {
	const {
		textAlign,
		paddingTop,
		paddingBottom
	} = dom.style;

	let align = dom.getAttribute( 'align' ) || textAlign || '';
	align = ALIGN_PATTERN.test( align ) ? align : null;

	let indent = parseInt( dom.getAttribute( ATTRIBUTE_INDENT ), 10 );

	const id = dom.getAttribute('id') || '';
	return { align, indent, paddingTop, paddingBottom, id };
}

function toDOM( node ) {
	const {
		align,
		indent,
		paddingTop,
		paddingBottom,
		id
	} = node.attrs;
	const attrs = {};

	let style = '';
	if ( align && align !== 'left' ) {
		style += `text-align: ${align};`;
	}
	if ( paddingTop && !EMPTY_CSS_VALUE.has(paddingTop) ) {
		style += `padding-top: ${paddingTop};`;
	}
	if ( paddingBottom && !EMPTY_CSS_VALUE.has(paddingBottom) ) {
		style += `padding-bottom: ${paddingBottom};`;
	}
	if ( style ) {
		attrs.style = style;
	}
	if ( indent ) {
		attrs[ ATTRIBUTE_INDENT ] = String(indent);
	}
	if ( id ) {
		attrs.id = id;
	}
	return [ 'p', attrs, 0 ];
}


// EXPORTS //

export const toParagraphDOM = toDOM;
export const getParagraphNodeAttrs = getAttrs;

export default ParagraphNodeSpec;
