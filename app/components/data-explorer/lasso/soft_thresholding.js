// MAIN //

/**
* Soft-thresholding operator.
*
* @param {number} x - input value
* @param {number} t - threshold value
* @returns {number} return value
*/
function softThresholding( x, t ) {
	if ( x > t ) {
		return x - t;
	} else if ( x < -t ) {
		return x + t;
	}
	return 0;
}


// EXPORTS //

export default softThresholding;
