// MODULES //

const UglifyJS = require( 'uglify-es' );


// MAIN //

process.on( 'message', function onMessage( code ) {
	const minified = UglifyJS.minify( code, {
		warnings: true,
		compress: {},
		mangle: true
	});
	process.send( minified );
});
