// MODULES //

const UglifyJS = require( 'uglify-es' );


// MAIN //

process.on( 'message', function( code ) {
	const minified = UglifyJS.minify( code, {
		warnings: true,
		compress: {},
		mangle: true
	});
	process.send( minified );
});
