// MAIN //

/**
 * Duplicates elements in an array.
 *
 * @param {Array} arr - array to duplicate
 * @returns {Array} duplicated array
 */
 function duplicateElements( arr ) {
	const out = [];
	for ( let i = 0; i < arr.length; i++ ){
		out.push( arr[ i ]);
		out.push( arr[ i ]);
	}
	return out;
}


// EXPORTS //

export default duplicateElements;
