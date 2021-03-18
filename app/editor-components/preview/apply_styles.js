// MODULES //

import css from 'css';
import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import isAbsolutePath from '@stdlib/assert/is-absolute-path';
import replace from '@stdlib/string/replace';
import isURI from '@stdlib/assert/is-uri';


// VARIABLES //

let cssHash = {};
let lastCSS = null;


// FUNCTIONS //

const injectStyle = ( style ) => {
	let previous = document.getElementById( 'mystyles' );
	if ( previous ) {
		previous.parentNode.removeChild( previous );
	}

	let node = document.createElement( 'style' );
	node.setAttribute( 'id', 'mystyles' );

	let cssObj = css.parse( style );
	let rules = cssObj.stylesheet.rules;
	rules.forEach( rule => {
		rule.selectors = rule.selectors.map( s => '#Lesson ' + s );
		return rule;
	});

	node.innerHTML = css.stringify( cssObj );
	document.head.appendChild( node );
};


// MAIN //

const applyStyles = async ( preamble, filePath ) => {
	let css = '';
	if ( preamble.css ) {
		if ( cssHash[ preamble.css ] ) {
			css += cssHash[ preamble.css ];
		} else if ( isURI( encodeURI( preamble.css ) ) ) {
			const d3 = await import( 'd3' );
			const content = await d3.text( preamble.css );
			css += content;
			cssHash[ preamble.css ] = content;
		} else {
			let fpath = preamble.css;
			if ( !isAbsolutePath( fpath ) ) {
				fpath = join( dirname( filePath ), fpath );

				if ( process.platform === 'win32' ) {
					fpath = replace( fpath, '\\', '\\\\' );
				}
			}
			const content = readFileSync( fpath ).toString();
			css += content;
			cssHash[ preamble.css ] = content;
		}
	}
	if ( preamble.style ) {
		css += '\n';
		css += preamble.style;
	}
	if ( preamble.style || preamble.css ) {
		if ( css !== lastCSS ) {
			injectStyle( css );
		}
		lastCSS = css;
	}
};


// EXPORTS //

export default applyStyles;
