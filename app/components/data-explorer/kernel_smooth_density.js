// MODULES //

import isPositiveNumber from '@stdlib/assert/is-positive-number';
import isFunction from '@stdlib/assert/is-function';
import isArray from '@stdlib/assert/is-array';


// FUNCTIONS //

/*
* Calculates weight for i-th obs.
*/
function weight( kernel, bandwidth, x0, xi ) {
	var arg = ( xi - x0 ) / bandwidth;
	return kernel( arg );
}

/*
* Sum elements of an array.
*/
function sum( arr ) {
	let ret = 0;
	for ( let i = 0; i < arr.length; i++ ){
		ret += arr[ i ];
	}
	return ret;
}

/*
* Allow sa function to be called with a vector instead of a single number
*/
function vectorize( fun ) {
	return function vectorized( x ) {
		if ( !isArray( x ) ) {
			return fun( x );
		}
		return x.map( fun );
	};
}


// MAIN //

function kernelSmoothDensity( xs, kernel, bandwidth ) {
	if ( !isPositiveNumber( bandwidth ) ) {
		throw new RangeError( 'Bandwidth has to be a positive number.' );
	}
	if ( !isFunction( kernel ) ) {
		throw new TypeError( 'Kernel function has to be supplied.' );
	}
	const _xs = xs;
	const n = xs.length;
	const weightFun = weight.bind( null, kernel, bandwidth );

	function kernelSmoother( x ) {
		const weights = _xs.map( ( xi ) => {
			return weightFun( x, xi );
		});
		const num = sum( weights );
		const denom = n * bandwidth;
		return num / denom;
	}
	return vectorize( kernelSmoother );
}


// EXPORTS //

export default kernelSmoothDensity;
