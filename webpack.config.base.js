// MODULES //

import path from 'path';


// CONFIG //

export default {
	module: {
		loaders: [ {
			test: /\.js?$/,
			loader: 'babel-loader',
			exclude: /node_modules/,
			query: {
				plugins: []
			}
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		} ]
	},
	output: {
		path: path.join( __dirname, 'dist' ),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		extensions: [ '', '.js', '.jsx', '.json' ],
		packageMains: [ 'webpack', 'browser', 'web', 'browserify', [ 'jam', 'main' ], 'main' ]
	},
	plugins: [
	],
	externals: [
		// Node 3rd party libraries which can't be built with webpack go here...
		// (mysql, mongodb, and so on..)
	]
};
