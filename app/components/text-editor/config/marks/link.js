/**
* Copyright (C) 2015-2017 by Marijn Haverbeke <marijnh@gmail.com> and others
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

// MAIN //

// :: MarkSpec A link. Has `href` and `title` attributes. `title` defaults to the empty string. Rendered and parsed as an `<a>` element.
const link = {
	attrs: {
		href: {},
		target: {
			default: 'blank'
		},
		title: {
			default: null
		}
	},
	inclusive: false,
	parseDOM: [
		{
			tag: 'a[href]',
			getAttrs( dom ) {
				const href = dom.getAttribute('href');
				const target = href && href.indexOf('#') === 0 ? '' : 'blank';
				return {
					href: dom.getAttribute( 'href' ),
					title: dom.getAttribute( 'title' ),
					target
				};
			}
		}
	],
	toDOM( node ) {
		const { href, title, target } = node.attrs;
		return [ 'a', { href, title, target }, 0 ];
	}
};


// EXPORTS //

export default link;
