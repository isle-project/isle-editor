// MODULES //

var ENV = require( '@stdlib/utils/env' );


// MAIN //

if ( ENV.NODE_ENV === 'production' ) {
	module.exports = require( './configureStore.production' ); // eslint-disable-line global-require
} else {
	module.exports = require( './configureStore.development' ); // eslint-disable-line global-require
}
