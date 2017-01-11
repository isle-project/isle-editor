// MODULES //

// For babel-plugin-webpack-loaders...
require( 'babel-register' );
const devConfigs = require( './webpack.config.development' );


// EXPORTS //

module.exports = {
	output: {
		libraryTarget: 'commonjs2'
	},
	module: {
		loaders: devConfigs.module.loaders.slice( 1 ) // remove babel-loader
	},
	resolve: {
		modulesDirectories: [
			'app',
			'node_modules',
			'node_modules/@stdlib/stdlib/lib/node_modules'
		]
	}
};
