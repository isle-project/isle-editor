/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ui/rects.js
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

// EXPORTS //

export function isCollapsed( rect ) {
	return rect.w === 0 || rect.h === 0;
}

export function isIntersected( r1, r2, padding ) {
	const pp = padding || 0;
	return !(
		r2.x - pp > r1.x + r1.w + pp ||
		r2.x + r2.w + pp < r1.x - pp ||
		r2.y - pp > r1.y + r1.h + pp ||
		r2.y + r2.h + pp < r1.y - pp
	);
}

export function fromXY( x, y, padding ) {
	padding = padding || 0;
	return {
		x: x - padding,
		y: y - padding,
		w: padding * 2,
		h: padding * 2
	};
}

export function fromHTMlElement( el ) {
	const display = document.defaultView.getComputedStyle( el ).display;
	if ( display === 'contents' && el.children.length === 1 ) {
		// el has no layout at all, use its children instead.
		return fromHTMlElement( el.children[ 0 ] );
	}
	const rect = el.getBoundingClientRect();
	return {
		x: rect.left,
		y: rect.top,
		w: rect.width,
		h: rect.height
	};
}
