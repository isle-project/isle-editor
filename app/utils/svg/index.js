/**
* Code adapted from Nikita Rokotyan. MIT licensed. Source: http://bl.ocks.org/Rokotyan/0556f8facbaf344507cdc45dc3622177
*/

// MODULES //

import isArray from '@stdlib/assert/is-array';
import contains from '@stdlib/assert/contains';
import round from '@stdlib/math/base/special/round';


// FUNCTIONS //

function appendCSS( cssText, element ) {
	const styleElement = document.createElement( 'style' );
	styleElement.setAttribute( 'type', 'text/css' );
	styleElement.innerHTML = cssText;
	if ( isArray( element.children ) ) {
		const refNode = element.children[ 0 ] || null;
		element.insertBefore( styleElement, refNode );
	}
}

function getCSSStyles( parentElement ) {
	const selectorTextArr = [];
	selectorTextArr.push( '#'+parentElement.id );
	if ( isArray( parentElement.classList ) ) {
		for ( let c = 0; c < parentElement.classList.length; c++ ) {
			if ( !contains( selectorTextArr, '.'+parentElement.classList[c] ) ) {
				selectorTextArr.push( '.'+parentElement.classList[c] );
			}
		}
	}
	const nodes = parentElement.getElementsByTagName( '*' );
	for ( let i = 0; i < nodes.length; i++ ) {
		const id = nodes[i].id;
		if ( !contains( selectorTextArr, '#'+id ) ) {
			selectorTextArr.push( '#'+id );
		}
		const classes = nodes[i].classList;
		if ( isArray( classes ) ) {
			for ( let c = 0; c < classes.length; c++) {
				if ( !contains( selectorTextArr, '.'+classes[c] ) ) {
					selectorTextArr.push( '.'+classes[c] );
				}
			}
		}
	}

	let extractedCSSText = '';
	for ( let i = 0; i < document.styleSheets.length; i++ ) {
		const s = document.styleSheets[i];
		try {
			if ( !s.cssRules ) {
				continue;
			}
		} catch ( e ) {
				if ( e.name !== 'SecurityError' ) {
					throw e; // for Firefox
				}
				continue;
			}

		const cssRules = s.cssRules;
		for ( let r = 0; r < cssRules.length; r++ ) {
			if ( contains( selectorTextArr, cssRules[r].selectorText ) ) {
				extractedCSSText += cssRules[r].cssText;
			}
		}
	}
	return extractedCSSText;
}


// MAIN //

function getSVGString( svgNode ) {
	svgNode.setAttribute( 'xlink', 'http://www.w3.org/1999/xlink' );
	const cssStyleText = getCSSStyles( svgNode );
	appendCSS( cssStyleText, svgNode );

	const serializer = new XMLSerializer();
	let svgString = serializer.serializeToString( svgNode );
	svgString = svgString.replace(/(\w+)?:?xlink=/g, 'xmlns:xlink='); // Fix root xlink without namespace
	svgString = svgString.replace(/NS\d+:href/g, 'xlink:href'); // Safari NS namespace fix

	return svgString;
}

function svgString2Image( svgString, width, height, format, callback ) {
	format = format ? format : 'png';

	const imgsrc = 'data:image/svg+xml;base64,'+ btoa( unescape( encodeURIComponent( svgString ) ) ); // Convert SVG string to data URL

	const canvas = document.createElement( 'canvas' );
	const context = canvas.getContext( '2d' );

	canvas.width = width;
	canvas.height = height;

	const image = new Image();
	image.onload = function onLoad() {
		context.clearRect( 0, 0, width, height );
		context.drawImage( image, 0, 0, width, height );

		canvas.toBlob( function onBlob( blob ) {
			const filesize = round( blob.length/1024 ) + ' KB';
			if ( callback ) {
				return callback( blob, filesize );
			}
		});
	};
	image.src = imgsrc;
}


// EXPORTS //

export { getSVGString, svgString2Image };
