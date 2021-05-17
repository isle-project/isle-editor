// MODULES //

const setReadOnly = require( '@stdlib/utils/define-read-only-property' );
const noop = require( '@stdlib/utils/noop' );


// MAIN //

setReadOnly( document, 'execCommand', jest.fn().mockImplementation( noop ) );
