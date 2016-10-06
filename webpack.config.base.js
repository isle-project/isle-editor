// MODULES //

import webpack from 'webpack';
import path from 'path';


// CONFIG //

export default {
	module: {
		loaders: [ {
			test: /\.js?$/,
			loader: 'babel-loader',
			include: [
				path.join( __dirname, 'main.development.js' ),
				path.join( __dirname, 'app' ),
				path.join( __dirname, 'node_modules', '@stdlib' )
			],
			query: {
				plugins: []
			}
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		},
		{
			test: /\.txt$/,
			loader: 'raw-loader'
		},
		{
			test: /img\/[A-Z]*\.svg$/i,
			loader: 'file-loader?name=./img/[name].[ext]',
			include: [
				path.join( __dirname, 'img' )
			]
		} ],
		noParse: [
			/node_modules\/json-schema\/lib\/validate\.js/
		]
	},
	output: {
		path: path.join( __dirname, 'dist' ),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2'
	},
	resolve: {
		alias: {
			'object-keys': path.resolve( './objectKeys.js' ),
			'electron-prebuilt': path.resolve( './dummy.js' ),
			'victory': require.resolve( 'victory/dist/victory' )
		},
		root: [
			path.resolve( './node_modules' ),
			path.resolve( './node_modules/@stdlib/stdlib/lib/node_modules' ),
			path.resolve( './node_modules/@stdlib/stdlib/node_modules' )
		],
		extensions: [ '', '.js', '.jsx', '.json' ],
		packageMains: [ 'webpack', 'browser', 'web', 'browserify', [ 'jam', 'main' ], 'main' ]
	},
	plugins: [
		new webpack.IgnorePlugin( /vertx/ ),
		new webpack.ProvidePlugin({
			'window.d3': 'd3'
		})
	],
	externals: [
		// Node 3rd party libraries which can't be built with webpack go here...
		'child_process',
		'webpack',
		'uglify-js'
	]
};
