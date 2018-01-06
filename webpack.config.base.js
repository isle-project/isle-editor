// MODULES //

import webpack from 'webpack';
import path from 'path';


// MAIN //

export default {
	module: {
		rules: [ {
			test: /\.js?$/,
			use: {
				loader: 'babel-loader',
				options: {
					plugins: []
				}
			},
			include: [
				path.join( __dirname, 'main.development.js' ),
				path.join( __dirname, 'app' ),
				path.join( __dirname, 'node_modules', 'configstore' ),
				path.join( __dirname, 'node_modules', 'crypto-random-string' ),
				path.join( __dirname, 'node_modules', 'fs-extra' ),
				path.join( __dirname, 'node_modules', 'unique-string' ),
				path.join( __dirname, 'node_modules', 'katex' )
			]
		},
		{
			test: /\.json$/,
			use: 'json-loader'
		},
		{
			test: /\.txt$/,
			use: 'raw-loader'
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader?sourceMap'
			]
		},
		{
			test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
			loader: 'file-loader',
			query: {
				name: 'static/media/[name].[hash:8].[ext]'
			}
		}],
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
			'esprima': path.resolve( './node_modules/esprima-fb' ),
			'victory': require.resolve( 'victory/dist/victory' ),
			'form-data': path.resolve( './node_modules/form-data/lib/form_data.js' )
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
		new webpack.IgnorePlugin( /vertx/ ),
		new webpack.IgnorePlugin( /^(xor|props)$/ )
	],
	externals: [
		// Node 3rd party libraries which can't be built with webpack go here...
		'child_process',
		'webpack',
		'uglify-es'
	]
};
