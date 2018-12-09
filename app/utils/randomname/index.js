
// MODULES //

import { firstMale, lastName, firstFemale } from './names.js';
import discreteUniform from '@stdlib/random/base/discrete-uniform';


// MAIN //

/**
* Generates a random name.
*
* @returns {string} random name (first and last name)
*/
function randomstring() {
	const idx = discreteUniform( 0 , lastName.length - 1 );
	let first;
	if ( idx % 2 === 1 ) {
		first = firstMale;
	} else {
		first = firstFemale;
	}
	const name = lastName[ idx ];
	return first[ discreteUniform( 0 , first.length - 1 ) ] + ' ' + name;
}


// EXPORTS //

export default randomstring;