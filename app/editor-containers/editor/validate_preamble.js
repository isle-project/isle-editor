// MODULES //

import isObject from '@stdlib/assert/is-object';


// FUNCTION //

export class PreambleError extends Error {
	constructor( message ) {
		super( message );
		this.name = 'PreambleError';
	}
}


// MAIN //

function validatePreamble( preamble ) {
	if ( !isObject( preamble ) ) {
		return new PreambleError( 'Make sure the preamble is valid YAML code and not empty.' );
	}
	if ( preamble.require && !isObject( preamble.require ) ) {
		return new PreambleError( '`require` has to be an object of key-value pairs, with each pair written as an indented `key: value`.\n Please make sure to include a space after the colon.' );
	}
	if ( preamble.state && !isObject( preamble.state ) ) {
		return new PreambleError( '`state` has to be an object of key-value pairs, with each pair written as an indented `key: value`.\n Please make sure to include a space after the colon.' );
	}
	if ( preamble.references && !isObject( preamble.references ) ) {
		return new PreambleError( '`references` has to be an object of key-value pairs, with each pair written as an indented `key: value`.\n Please make sure to include a space after the colon.' );
	}
	return null;
}


// EXPORTS //

export default validatePreamble;
