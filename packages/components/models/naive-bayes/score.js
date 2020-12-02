// MODULES //

import isArrayLike from '@stdlib/assert/is-array-like';


// MAIN //

/**
* Calculates the mean accuracy of the given test data and labels.
*
* @param {(Matrix|Array)} x - design matrix
* @param {Array} y - vector of class memberships
* @returns {number} mean accuracy
*/
function score( x, y ) {
	if ( !isArrayLike( x ) ) {
		throw new TypeError( 'invalid argument. First argument must be a matrix or array of test data. Value: `' + x + '`' );
	}
	if ( !isArrayLike( y ) ) {
		throw new TypeError( 'invalid argument. Second argument must be an array of labels for the test data. Value: `' + y + '`' );
	}
	const yhat = this.predict( x );
	const n = y.length;
	let accuracy = 0;
	for ( let i = 0; i < n; i++ ) {
		if ( yhat[ i ] === y[ i ] ) {
			accuracy += 1;
		}
	}
	accuracy /= n;
	return accuracy;
}


// EXPORTS //

export default score;
