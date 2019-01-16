
/* Copyright 2014 Mozilla Foundation
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// MODULES //

import pdfjs from 'pdfjs-dist/webpack';


// VARIABLES //

var SVG_NS = 'http://www.w3.org/2000/svg';


// MAIN //

function buildSVG( viewport, textContent ) {
	// Building SVG with size of the viewport (for simplicity)
	const svg = document.createElementNS( SVG_NS, 'svg:svg' );
	svg.setAttribute( 'width', viewport.width + 'px' );
	svg.setAttribute( 'height', viewport.height + 'px' );
	// Items are transformed to have 1px font size:
	svg.setAttribute( 'font-size', 1 );

	// Processing all items...
	textContent.items.forEach( ( textItem ) => {
		// We have to take in account viewport transform, which includes scale, rotation and Y-axis flip, and not forgetting to flip text...
		const tx = pdfjs.Util.transform(
		pdfjs.Util.transform( viewport.transform, textItem.transform ),
		[1, 0, 0, -1, 0, 0] );
		const style = textContent.styles[ textItem.fontName ];
		// adding text element
		const text = document.createElementNS( SVG_NS, 'svg:text' );
		text.setAttribute( 'transform', 'matrix(' + tx.join(' ') + ')' );
		text.setAttribute( 'font-family', style.fontFamily );
		text.textContent = textItem.str;
		svg.appendChild( text );
	});
	return svg;
}


// EXPORTS //

export default buildSVG;
