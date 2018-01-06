// MODULES //

// For babel-plugin-webpack-loaders...
require( 'babel-register' );
const path = require( 'path' );
const baseConfigs = require( './webpack.config.base.js' );


// EXPORTS //

module.exports = {
	output: {
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			...baseConfigs.module.rules.
			slice( 1 ), // Remove babel-loader
			{
				test: /\.svg$/i,
				use: {
					loader: 'null-loader'
				}
			}
		]
	},
	resolve: {
		modules: [
			path.resolve( './app' ),
			path.resolve( './node_modules' ),
			path.resolve( './node_modules/@stdlib/stdlib/lib/node_modules' )
		]
	}
};
