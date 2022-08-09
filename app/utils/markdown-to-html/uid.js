// MODULES //

const kebabcase = require( '@stdlib/string/kebabcase' );


// MAIN //

/**
* Incrementally generates a unique ID.
*
* @param {string} componentType - component type prefix for the generated ID
* @returns {string} unique ID
*/
function generateUID( componentType ) {
	let counter = 0;
	const prefix = kebabcase( componentType );

	const uid = () => {
		counter += 1;
		return `${prefix}-${counter}`;
	};
	return uid;
}


// EXPORTS //

module.exports = generateUID;
