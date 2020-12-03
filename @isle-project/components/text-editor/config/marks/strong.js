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

// :: MarkSpec A strong mark. Rendered as `<strong>`, parse rules also match `<b>` and `font-weight: bold`.
const strong = {
	parseDOM: [
		{
			tag: 'strong'
		},
		// This works around a Google Docs misbehavior where pasted content will be inexplicably wrapped in `<b>` tags with a font-weight normal.
		{
			tag: 'b',
			getAttrs: node => node.style.fontWeight !== 'normal' && null
		},
		{
			style: 'font-weight',
			getAttrs: value => /^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
		}
	],
	toDOM() {
		return [ 'strong', 0 ];
	}
};


// EXPORTS //

export default strong;
