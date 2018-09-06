/*
* Adapted from: Curve function for canvas 2.3.8
*
*	(c) Epistemex 2013-2018
*	www.epistemex.com
*	License: MIT
*/

// MODULES //

import logger from 'debug';


// VARIABLES //

const debug = logger( 'isle-editor:sketchpad' );


// MAIN //

/**
* Draws a cardinal spline through given point array. Points must be arranged
* as: [x1, y1, x2, y2, ..., xn, yn]. It adds the points to the current path.
*
* There must be a minimum of two points in the input array but the function
* is only useful where there are three points or more.
*
* The method continues previous path of the context. If you don't want that
* then you need to use moveTo() with the first point from the input array.
*
* The points for the cardinal spline are returned as a new array.
*
* @param {CanvasRenderingContext2D} ctx - context to use
* @param {Array} points - point array
* @param {integer} width - canvas width
* @param {integer} height - canvas height
* @param {number} [tension=0.5] - tension. Typically between [0.0, 1.0] but can be exceeded
* @param {number} [numOfSeg=25] - number of segments between two points (line resolution)
* @param {boolean} [close=false] - Close the ends making the line continuous
* @returns {Float32Array} New array with the calculated points that was added to the path
*/
function curve( ctx, points, width, height, tension, numOfSeg, close ) {
	debug( 'Received points: '+points.join( ', ' ) );
	if ( typeof points === 'undefined' || points.length < 2 ) {
		return new Float32Array( 0 );
	}

	// options or defaults
	tension = typeof tension === 'number' ? tension : 0.5;
	numOfSeg = typeof numOfSeg === 'number' ? numOfSeg : 25;

	let pts; // for cloning point array
	let i = 1;
	let l = points.length;
	let rPos = 0;
	let rLen = (l-2) * numOfSeg + 2 + (close ? 2 * numOfSeg: 0);
	let res = new Float32Array(rLen);
	let cache = new Float32Array((numOfSeg + 2) << 2);
	let cachePtr = 4;

	pts = points.slice( 0 );
	if ( close ) {
		pts.unshift( points[l - 1] ); // insert end point as first point
		pts.unshift( points[l - 2] );
		pts.push( points[0], points[1] ); // first point as last point
	}
	else {
		pts.unshift( points[1] ); // copy 1. point and insert at beginning
		pts.unshift( points[0] );
		pts.push( points[l - 2], points[l - 1] ); // duplicate end-points
	}

	// cache inner-loop calculations as they are based on t alone
	cache[ 0 ] = 1; // 1,0,0,0

	for (; i < numOfSeg; i++ ) {
		const st = i / numOfSeg;
		const st2 = st * st;
		const st3 = st2 * st;
		const st23 = st3 * 2;
		const st32 = st2 * 3;

		cache[cachePtr++] =	st23 - st32 + 1; // c1
		cache[cachePtr++] =	st32 - st23; // c2
		cache[cachePtr++] =	st3 - 2 * st2 + st; // c3
		cache[cachePtr++] =	st3 - st2; // c4
	}

	cache[ ++cachePtr ] = 1; // 0,1,0,0

	// calc. points
	parse(pts, cache, l, tension);

	if ( close ) {
		pts = [];
		pts.push(
			points[l - 4], points[l - 3],
			points[l - 2], points[l - 1], // second last and last
			points[0], points[1],
			points[2], points[3] // first and second
		);
		parse(pts, cache, 4, tension);
	}

	function parse( pts, cache, l, tension ) {
		for (var i = 2, t; i < l; i += 2) {
			var pt1 = pts[i];
			var pt2 = pts[i+1];
			var pt3 = pts[i+2];
			var pt4 = pts[i+3];

			var t1x = (pt3 - pts[i-2]) * tension;
			var t1y = (pt4 - pts[i-1]) * tension;
			var t2x = (pts[i+4] - pt1) * tension;
			var t2y = (pts[i+5] - pt2) * tension;
			var c = 0;
			for ( t = 0; t < numOfSeg; t++ ) {
				const c1 = cache[c++];
				const c2 = cache[c++];
				const c3 = cache[c++];
				const c4 = cache[c++];
				res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
				res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
			}
		}
	}

	// Add last point:
	l = close ? 0 : points.length - 2;
	res[ rPos++ ] = points[ l++ ];
	res[ rPos ] = points[ l ];

	// Add lines to path:
	for ( i = 0, l = res.length; i < l; i += 2 ) {
		debug( `Draw line to x: ${res[i]*width} and y: ${res[i+1]*height}` );
		ctx.lineTo( res[i]*width, res[i+1]*height );
	}
	return res;
}


// EXPORTS //

export default curve;
