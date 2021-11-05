// MAIN //

/**
 * Returns a string representing the ordinal of a number.
 *
 * @param {number} x - number
 * @returns {string} ordinal
 */
const ordinal = ( x ) => {
	const cent = x % 100;
	let out;
	if ( cent >= 10 && cent <= 20 ) {
		out = 'th';
	}
	switch ( x % 10 ) {
		case 1:
			out = 'st';
			break;
		case 2:
			out = 'nd';
			break;
		case 3:
			out = 'rd';
			break;
		default:
			out = 'th';
			break;
	}
	return `${x}${out}`;
};


// EXPORTS //

export default ordinal;
