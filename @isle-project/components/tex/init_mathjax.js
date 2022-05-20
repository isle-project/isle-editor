// VARIABLES //

const DEFAULT_OPTIONS = {
	startup: {
		typeset: false
	},
	loader: {
		load: [ '[tex]/action', '[tex]/ams', '[tex]/html', '[tex]/boldsymbol', '[tex]/mathtools', '[tex]/newcommand' ]
	},
	tex: {
		macros: {},
		packages: {
			'[+]': [ 'action', 'ams', 'html', 'boldsymbol', 'mathtools', 'newcommand' ]
		}
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
			backgroundOpacity: 100,             // opacity for background of selected sub-expression
			foregroundColor: 'Magenta',          // color to use for text of selected sub-expression
			foregroundOpacity: 100,              // opacity for text of selected sub-expression

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
	const script = document.createElement('script');
	script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3.2.1/es5/tex-chtml.js';
	script.async = true;
	document.head.appendChild( script );
};


// MAIN //

window.MathJax = DEFAULT_OPTIONS;
importMathJax();
