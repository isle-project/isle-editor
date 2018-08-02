// MODULES //

import webpack from 'webpack';
import { join, resolve } from 'path';


// VARIABLES //

var EXTERNALS = [
	'child_process',
	'webpack',
	'uglify-es',
	'react',
	'react-dom',
	'victory',
	'plotly.js',
	'camelcase',
	'compute-chunkify',
	'compute-iqr',
	'compute-max',
	'compute-mean',
	'compute-median',
	'compute-min',
	'compute-pcorr',
	'compute-quantile',
	'compute-range',
	'compute-stdev',
	'compute-variance',
	'd3',
	'd3-cloud',
	'kernel-smooth',
	'lodash',
	'pdfmake-lite',
	'uniq',
	'katex',
	'markdown-it',
	'markdown-it-container',
	'markdown-it-ins',
	'markdown-it-katex',
	'markdown-it-sub',
	'moment'
];


// MAIN //

export default {
	module: {
		rules: [ {
			test: /\.js?$/,
			use: {
				loader: 'babel-loader',
				options: {
					plugins: [],
					cacheDirectory: true
				}
			},
			include: [
				join( __dirname, 'main.development.js' ),
				join( __dirname, 'app' )
			]
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
		libraryTarget: 'commonjs2'
	},
	resolve: {
		alias: {
			'esprima': resolve( './node_modules/esprima-fb' ),
			'victory': require.resolve( 'victory/dist/victory' ),
			'form-data': resolve( './node_modules/form-data/lib/form_data.js' ),
			'react-transition-group/TransitionGroup': resolve( './node_modules/spectacle/node_modules/react-transition-group/TransitionGroup.js' )
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
		new webpack.IgnorePlugin( /^(xor|props)$/ )
	],
	externals: EXTERNALS
};
