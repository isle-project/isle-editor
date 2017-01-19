// MODULES //

import isArray from '@stdlib/utils/is-array';


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
function createPrependCode ( libs, prependCode ) {
	if ( ISLE.rshell && ISLE.rshell.libraries ) {
		libs = libs.concat( ISLE.rshell.libraries );
	}
	let ret = requireLibs( libs );
	if ( ISLE.rshell && ISLE.rshell.global ) {
		ret += ISLE.rshell.global + '\n';
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
