// MODULES //

import webpack from 'webpack';
import path from 'path';


// CONFIG //

export default {
	module: {
		rules: [ {
			test: /\.js?$/,
			loader: 'babel-loader',
			include: [
				path.join( __dirname, 'main.development.js' ),
				path.join( __dirname, 'app' ),
				path.join( __dirname, 'node_modules', '@stdlib' ),
				path.join( __dirname, 'node_modules', 'configstore' ),
				path.join( __dirname, 'node_modules', 'crypto-random-string' ),
				path.join( __dirname, 'node_modules', 'fs-extra' ),
				path.join( __dirname, 'node_modules', 'unique-string' )
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
			'debug': path.resolve( './node_modules/debug/node.js' ),
			'esprima': path.resolve( './node_modules/esprima-fb' ),
			'object-keys': path.resolve( './objectKeys.js' ),
			'electron-prebuilt': path.resolve( './dummy.js' ),
			'victory': require.resolve( 'victory/dist/victory' ),
			'history/createHashHistory': require.resolve( './node_modules/react-history/node_modules/history/createHashHistory.js' )
		},
		modules: [
			path.resolve( './app' ),
			path.resolve( './node_modules' ),
			path.resolve( './node_modules/@stdlib/stdlib/lib/node_modules' ),
			path.resolve( './node_modules/@stdlib/stdlib/node_modules' )
		],
		extensions: [ '.js', '.jsx', '.json' ],
		mainFields: [ 'webpack', 'browser', 'web', 'browserify', [ 'jam', 'main' ], 'main' ]
	},
	plugins: [
		new webpack.IgnorePlugin( /vertx/ )
	],
	externals: [
		// Node 3rd party libraries which can't be built with webpack go here...
		'child_process',
		'webpack',
		'uglify-js'
	]
};
