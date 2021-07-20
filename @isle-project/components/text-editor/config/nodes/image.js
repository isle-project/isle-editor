/*
* Adapted from: https://github.com/chanzuckerberg/czi-prosemirror/blob/master/src/ImageNodeSpec.js
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

// VARIABLES //

const CSS_ROTATE_PATTERN = /rotate\(([0-9.]+)rad\)/i;
const EMPTY_CSS_VALUE = new Set(['0%', '0pt', '0px']);


// FUNCTIONS //

/**
 * Return image attributes from a DOM node.
 *
 * @private
 * @param {Node} elem - DOM node
 * @returns {Object} object with image attributes
 */
function getAttrs( elem ) {
	const { cssFloat, display, marginTop, marginLeft } = elem.style;
	let { width, height } = elem.style;
	let align = elem.getAttribute( 'data-align' ) || elem.getAttribute( 'align' );
	if ( align ) {
		align = /(left|right|center)/.test(align) ? align : null;
	} else if ( cssFloat === 'left' && !display ) {
		align = 'left';
	} else if ( cssFloat === 'right' && !display ) {
		align = 'right';
	} else if ( !cssFloat && display === 'block' ) {
		align = 'block';
	}
	width = width || elem.getAttribute( 'width' );
	height = height || elem.getAttribute( 'height' );

	let crop = null;
	let rotate = null;
	const { parentElement } = elem;
	if ( parentElement instanceof HTMLElement ) {
		// Special case for Google doc's image.
		const ps = parentElement.style;
		if (
			ps.display === 'inline-block' &&
			ps.overflow === 'hidden' &&
			ps.width &&
			ps.height &&
			marginLeft &&
			!EMPTY_CSS_VALUE.has(marginLeft) &&
			marginTop &&
			!EMPTY_CSS_VALUE.has(marginTop)
		) {
			crop = {
				width: parseInt(ps.width, 10) || 0,
				height: parseInt(ps.height, 10) || 0,
				left: parseInt(marginLeft, 10) || 0,
				top: parseInt(marginTop, 10) || 0
			};
		}
		if ( ps.transform ) {
			// Example: `rotate(1.57rad) translateZ(0px)`;
			const mm = ps.transform.match( CSS_ROTATE_PATTERN );
			if (mm && mm[1]) {
				rotate = parseFloat(mm[1]) || null;
			}
		}
	}
	return {
		align,
		alt: elem.getAttribute('alt') || null,
		crop,
		height: parseInt(height, 10) || null,
		rotate,
		src: elem.getAttribute('src') || null,
		title: elem.getAttribute('title') || null,
		width: parseInt(width, 10) || null
	};
}

// https://github.com/ProseMirror/prosemirror-schema-basic/blob/master/src/schema-basic.js
const ImageNodeSpec = {
	inline: true,
	attrs: {
		align: { default: null },
		alt: { default: 'An inserted image' },
		crop: { default: null },
		height: { default: null },
		rotate: { default: null },
		src: { default: null },
		title: { default: 'None' },
		width: { default: null }
	},
	group: 'inline',
	draggable: true,
	parseDOM: [{
		tag: 'img[src]', getAttrs
	}],
	toDOM( node ) {
		return [ 'img', node.attrs ];
	}
};


// EXPORTS //

export const getImageAttrs = getAttrs;

export default ImageNodeSpec;

