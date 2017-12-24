// MODULES //

// For babel-plugin-webpack-loaders...
require( 'babel-register' );
const path = require( 'path' );
const devConfigs = require( './webpack.config.development' );


// EXPORTS //

module.exports = {
	output: {
		libraryTarget: 'commonjs2'
	},
	module: {
		loaders: devConfigs.module.rules.slice( 1 ) // Remove babel-loader
	},
	resolve: {
		modules: [
			path.resolve( './app' ),
			path.resolve( './node_modules' ),
			path.resolve( './node_modules/@stdlib/stdlib/lib/node_modules' )
		]
	}
};
