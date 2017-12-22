// MODULES //

import isArray from '@stdlib/assert/is-array';


// FUNCTIONS //

const requireLibs = ( libs ) => {
	return libs.map( x => 'library(' + x + ');' )
		.join( ' ' );
};


// MAIN //

/**
* Create code to be added in front of user-supplied R code.
*
* @param {Array} libs - array of libraries to requireLibs
* @param {(Array|string)} prependCode - array of strings or single string of code to prepend
* @param {string} generated code
*/
function createPrependCode( libs, prependCode ) {
	const { rshell } = global.session.config;
	if ( rshell && rshell.libraries ) {
		libs = libs.concat( rshell.libraries );
	}
	let ret = requireLibs( libs );
	if ( rshell && rshell.global ) {
		ret += rshell.global + '\n';
	}
	prependCode = isArray( prependCode ) ?
		prependCode.join( '\n' ) :
		prependCode;
	prependCode += '\n';
	ret += prependCode;
	return ret;
} // end FUNCTION createPrependCode()


// EXPORTS //

export default createPrependCode;
