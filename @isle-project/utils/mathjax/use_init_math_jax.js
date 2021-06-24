/**
* Adapted from: https://gitlab.tu-berlin.de/innodoc/react-mathjax-node
*
* MIT License
*
* Copyright (c) 2019 Mirko Dietrich, TU Berlin
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

// if MathJax import has been triggered
let mathJaxImported = false;
// if MathJax is ready
let mathJaxReady = false;

const pageReadyCallbacks = [];

const defaultOptions = {
	startup: {
		typeset: false,
		pageReady: () => {
			mathJaxReady = true;
			while ( pageReadyCallbacks.length > 0 ) {
				pageReadyCallbacks.pop()();
			}
		}
	},
	loader: {
		load: []
	},
	options: {
		enableMenu: true,
		enableExplorer: true,                // set to false to disable the explorer,
		menuOptions: {
			settings: {
				assistiveMml: true,   // true to enable assitive MathML
				collapsible: false,   // true to enable collapsible math
				explorer: true,      // true to enable the expression explorer,
				texHints: true,        // put TeX-related attributes on MathML
				semantics: false,      // put original format in <semantic> tag in MathML
				zoom: 'NoZoom',        // or 'Click' or 'DoubleClick' as zoom trigger
				zscale: '200%',        // zoom scaling factor
				renderer: 'CHTML',     // or 'SVG'
				alt: false,            // true if ALT required for zooming
				cmd: false,            // true if CMD required for zooming
				ctrl: false,           // true if CTRL required for zooming
				shift: false,          // true if SHIFT required for zooming
				scale: 1,              // scaling factor for all math
				inTabOrder: true      // true if tabbing includes math
			}
		},
		a11y: {
			speech: true,                      // switch on speech output
			braille: true,                     // switch on Braille output
			subtitles: true,                   // show speech as a subtitle
			viewBraille: true,                // display Braille output as subtitles

			backgroundColor: 'White',           // color for background of selected sub-expression
			backgroundOpacity: 1,             // opacity for background of selected sub-expression
			foregroundColor: 'Magenta',          // color to use for text of selected sub-expression
			foregroundOpacity: 1,              // opacity for text of selected sub-expression

			highlight: 'None',                 // type of highlighting for collapsible sub-expressions
			flame: false,                      // color collapsible sub-expressions
			hover: false,                      // show collapsible sub-expression on mouse hovering

			treeColoring: false,               // tree color expression

			magnification: 'None',             // type of magnification
			magnify: '400%',                   // percentage of magnification of zoomed expressions
			keyMagnifier: false,               // switch on magnification via key exploration
			mouseMagnifier: false,             // switch on magnification via mouse hovering
			align: 'top',                      // placement of magnified expression

			infoType: false,                    // show semantic type on mouse hovering
			infoRole: false,                   // show semantic role on mouse hovering
			infoPrefix: false                 // show speech prefixes on mouse hovering
		}
	}
};

const importMathJax = () => {
	var script = document.createElement('script');
	script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js';
	script.async = true;
	document.head.appendChild(script);
};


// MAIN //

const useInitMathJax = () => {
	if ( typeof window !== 'undefined' ) {
		return new Promise((resolve) => {
			if ( mathJaxImported ) {
				if ( mathJaxReady ) {
					resolve();
				} else {
					pageReadyCallbacks.push( resolve );
				}
			} else {
				mathJaxImported = true;
				let readyCallback = resolve;
				// MathJax reads options from window.MathJax
				window.MathJax = defaultOptions;
				pageReadyCallbacks.push( readyCallback );
				importMathJax();
			}
		});
	}
	return void 0; // no-op on server
};


// EXPORTS //

export default useInitMathJax;
