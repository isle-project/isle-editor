
/*
* Adapted from: https://raw.githubusercontent.com/chanzuckerberg/czi-prosemirror/master/src/BulletListNodeSpec.js
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

const MIN_INDENT_LEVEL = 0;
const ATTRIBUTE_INDENT = 'data-indent';


// MAIN //

const bulletListSpec = {
	attrs: {
		id: { default: null },
		indent: { default: 0 },
		listStyleType: { default: null }
	},
	group: 'block',
	content: 'list_item+',
	parseDOM: [
		{
			tag: 'ul',
			getAttrs( dom ) {
				const indent = dom.hasAttribute( ATTRIBUTE_INDENT ) ?
					parseInt( dom.getAttribute( ATTRIBUTE_INDENT ), 10 ):
					MIN_INDENT_LEVEL;

				return {
					indent
				};
			}
		}
	],
	toDOM( node ) {
		const { indent } = node.attrs;
		const attrs = {};

		if ( indent ) {
			attrs[ ATTRIBUTE_INDENT ] = indent;
		}
		return [ 'ul', attrs, 0 ];
	}
};


// EXPORTS //

export default bulletListSpec;
