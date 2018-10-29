'use strict';

// MODULES //

const path = require( 'path' );
const resolve = path.resolve;


// EXPORTS //

module.exports = ( distRoot, optimize ) => ({
	mode: 'production',
	optimization: {
		minimize: !!optimize
	},
	entry: './app/components/index.js',
	output: {
		path: distRoot,
		filename: optimize ? 'isle.min.js' : 'isle.js',
		library: 'ISLE',
		libraryTarget: 'umd'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				},
				include: [
					path.join( __dirname, 'app' )
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader?sourceMap'
				]
			}
		]
	},
	externals: {
		react: {
			root: 'React',
			commonjs2: 'react',
			commonjs: 'react',
			amd: 'react'
		},
		'react-dom': {
			root: 'ReactDOM',
			commonjs2: 'react-dom',
			commonjs: 'react-dom',
			amd: 'react-dom'
		},
		'react-bootstrap': {
			root: 'react-bootstrap',
			commonjs2: 'react-bootstrap',
			commonjs: 'react-bootstrap',
			amd: 'react-bootstrap'
		}
	},
	resolve: {
		modules: [
			resolve( './app' ),
			resolve( './node_modules' ),
			resolve( './node_modules/@stdlib/stdlib/lib/node_modules' ),
			resolve( './node_modules/@stdlib/stdlib/node_modules' )
		],
		extensions: [ '.js', '.jsx', '.json' ],
		mainFields: [
			'webpack', 'browser', 'web', 'browserify',
			[ 'jam', 'main' ],
			'main'
		]
	}
});
