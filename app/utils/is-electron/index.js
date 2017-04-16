// MODULES //

const isObject = require( '@stdlib/assert/is-object' );
const isString = require( '@stdlib/assert/is-string' ).isPrimitive;


// MAIN //

const isElectron =
	typeof process === 'object' &&
	isObject( process.versions ) &&
	isString( process.versions.electron ) &&
	isString( process.versions.chrome ) &&
	(
		process.type === 'browser' ||
		process.type === 'renderer'
	);


// EXPORTS //

module.exports = isElectron;
