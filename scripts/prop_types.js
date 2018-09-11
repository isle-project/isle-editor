/* eslint-disable  no-new-wrappers */

'use strict';

// MODULES //

const objectKeys = require( '@stdlib/utils/keys' );


// MAIN //

const PropTypes = {};
PropTypes.string = new String( 'string' );
PropTypes.string.isRequired = 'string (required)';
PropTypes.number = new String( 'number' );
PropTypes.number.isRequired = 'number (required)';
PropTypes.array = new String( 'array' );
PropTypes.array.isRequired = 'array (required)';
PropTypes.object = new String( 'object' );
PropTypes.object.isRequired = 'object (required)';
PropTypes.bool = new String( 'boolean' );
PropTypes.bool.isRequired = 'boolean (required)';
PropTypes.func = new String( 'function' );
PropTypes.func.isRequired = 'function (required)';
PropTypes.node = new String( 'node' );
PropTypes.node.isRequired = 'node (required)';
PropTypes.arrayOf = function arrayOf( str ) {
	const out = new String( `array<${str}>` );
	out.isRequired = out+' (required)';
	return out;
};
PropTypes.objectOf = function objectOf( str ) {
	const out = new String( `object<${str}>` );
	out.isRequired = out+' (required)';
	return out;
};
PropTypes.shape = function shape( obj ) {
	const out = new String( `{${objectKeys( obj ).join( ',' )}}` );
	out.isRequired = out+' (required)';
	return out;
};
PropTypes.oneOfType = function oneOfType( arr ) {
	const out = new String( `(${arr.join( '|' )})` );
	out.isRequired = out+' (required)';
	return out;
};
PropTypes.oneOf = function oneOf( arr ) {
	const out = new String( typeof arr[ 0 ]);
	out.isRequired = out+' (required)';
	return out;
};


// EXPORTS //

module.exports = PropTypes;
