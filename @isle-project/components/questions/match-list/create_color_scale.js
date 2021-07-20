// MODULES //

import shuffle from '@stdlib/random/shuffle';
import * as d3 from 'd3';


// MAIN //

/**
 * Returns a color scale of the specified length.
 *
 * @private
 * @param {number} length - number of colors to generate
 * @returns {Array} color scale
 */
 function createColorScale( length ) {
	const color = d3.scaleLinear().domain([ 1, length ])
		.interpolate( d3.interpolateHclLong )
		.range([ d3.rgb( 'violet' ), d3.rgb( 'yellow' ) ]);

	const colorScale = new Array( length );
	for ( let i = 0; i < length; i++ ) {
		colorScale[ i ] = color( i );
	}
	return shuffle( colorScale );
}


// EXPORTS //

export default createColorScale;
