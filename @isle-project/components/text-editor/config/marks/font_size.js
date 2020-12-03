/*
* Adapted from: https://raw.githubusercontent.com/chanzuckerberg/czi-prosemirror/master/src/FontSizeMarkSpec.js
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

import abs from '@stdlib/math/base/special/abs';
import NINF from '@stdlib/constants/math/float64-ninf';
import FONT_PT_SIZES from './../font_sizes.json';


// VARIABLES //

const SIZE_PATTERN = /([\d.]+)(px|pt)/i;
const PX_TO_PT_RATIO = 0.7518796992481203; // 1 / 1.33.


// FUNCTIONS //

function convertToCSSPTValue( styleValue ) {
	const matches = styleValue.match( SIZE_PATTERN );
	if ( !matches ) {
		return 0;
	}
	let value = parseFloat( matches[1] );
	const unit = matches[ 2 ];
	if ( !value || !unit ) {
		return 0;
	}
	if ( unit === 'px' ) {
		value = PX_TO_PT_RATIO * value;
	}
	return value;
}

function toClosestFontPtSize( styleValue ) {
	const originalPTValue = convertToCSSPTValue( styleValue );

	if ( FONT_PT_SIZES.includes( originalPTValue ) ) {
		return originalPTValue;
	}
	return FONT_PT_SIZES.reduce( ( prev, curr ) => {
		return abs( curr - originalPTValue ) < abs( prev - originalPTValue ) ?
		curr : prev;
	}, NINF );
}


// MAIN //

const fontSize = {
	attrs: {
		pt: { default: null }
	},
	inline: true,
	group: 'inline',
	parseDOM: [
		{
			style: 'font-size',
			getAttrs: getAttrs
		}
	],
	toDOM( node ) {
		const { pt } = node.attrs;
		const domAttrs = pt ? {
			style: `font-size: ${pt}pt;`,
			class: 'pm-font-size-mark'
		} : null;
		return [ 'span', domAttrs, 0 ];
	}
};

function getAttrs( fontSize ) {
	const attrs = {};
	if ( !fontSize ) {
		return attrs;
	}
	const ptValue = toClosestFontPtSize( fontSize );
	if ( !ptValue ) {
		return attrs;
	}
	return {
		pt: ptValue
	};
}


// EXPORTS //

export default fontSize;
