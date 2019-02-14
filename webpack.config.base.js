// MODULES //

import webpack from 'webpack';
import { join, resolve } from 'path';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';


// VARIABLES //

var EXTERNALS = [
	'archiver',
	'child_process',
	'eslint',
	'webpack',
	'uglify-es',
	'react',
	'react-dom',
	'victory',
	'camelcase',
	'compute-mean',
	'compute-stdev',
	'd3',
	'd3-cloud',
	'html-webpack-plugin',
	'pdfmake-lite',
	'uniq',
	'katex',
	'markdown-it',
	'markdown-it-container',
	'markdown-it-ins',
	'markdown-it-katex',
	'markdown-it-sub',
	'moment',
	'fsevents',
	'plotly.js'
];


// MAIN //

export default {
	module: {
		rules: [ {
			test: /\.js?$/,
			use: [
				{
					loader: 'babel-loader',
					options: {
						plugins: [],
						cacheDirectory: true
					}
				}
			],
			include: [
				join( __dirname, 'main.development.js' ),
				join( __dirname, 'app' )
			]
		},
		{
			test: /\.worker\.js$/,
			use: { loader: 'worker-loader' }
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
		path: join( __dirname, 'dist' ),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2',
		globalObject: '(typeof self !== "undefined" ? self : this)'
	},
	resolve: {
		alias: {
			'victory': resolve( './node_modules/victory/dist/victory.min.js' ),
			'form-data': resolve( './node_modules/form-data/lib/form_data.js' ),
			'react-transition-group/TransitionGroup': resolve( './node_modules/spectacle/node_modules/react-transition-group/TransitionGroup.js' ) // ensure slide transitions work in Spectacle presentations
		},
		modules: [
			resolve( './app' ),
			resolve( './node_modules' ),
			resolve( './node_modules/@stdlib/stdlib/lib/node_modules' ),
			resolve( './node_modules/@stdlib/stdlib/node_modules' )
		],
		extensions: [ '.js', '.jsx', '.json' ],
		mainFields: [ 'webpack', 'browser', 'web', 'browserify', [ 'jam', 'main' ], 'main' ]
	},
	plugins: [
		new webpack.IgnorePlugin( /vertx/ ),
		new webpack.IgnorePlugin( /^(xor|props)$/ ),
		new MonacoWebpackPlugin({
			features: []
		})
	],
	externals: EXTERNALS
};
