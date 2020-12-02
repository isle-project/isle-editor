// MODULES //

import ctor from '@stdlib/ndarray/ctor';


// VARIABLES //

const matrix = ctor( 'float64', 2 );


// MAIN //

/**
* Transposes a matrix.
*
* @param {Matrix} X - input matrix (2d `ndarray`)
* @returns matrix transpose
*/
const transpose = ( X ) => {
	const shape = [ X.shape[ 1 ], X.shape[ 0 ] ];
	const strides = [ X.strides[ 1 ], X.strides[ 0 ] ];
	const offset = X.offset;
	const order = X.order;
	return matrix( X._buffer, shape, strides, offset, order );
};


// EXPORTS //

export default transpose;
