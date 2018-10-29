'use strict';

// MODULES //

const webpack = require( 'webpack' );
const getConfig = require( './webpack.config.bundle.js' );
const path = require( 'path' );


// VARIABLES //

const dist = path.join( __dirname, 'dist' );


// MAIN //

webpack(
	[
		getConfig( dist, false ),
		getConfig( dist, true )
	],
	( err, stats ) => {
		console.log(stats.compilation.errors);
	},
);
