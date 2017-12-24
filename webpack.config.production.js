// MODULES //

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import baseConfig from './webpack.config.base';


// MAIN //

const config = {
	...baseConfig,

	devtool: 'source-map',

	entry: './app/index',

	output: {
		...baseConfig.output,

		publicPath: '../dist/'
	},

	module: {
		...baseConfig.module,

		rules: [
			{
				test: /\.js?$/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							'transform-react-constant-elements',
							'transform-react-inline-elements',
							'transform-react-remove-prop-types'
						]
					}
				},
				include: [
					path.join( __dirname, 'main.development.js' ),
					path.join( __dirname, 'app' ),
					path.join( __dirname, 'node_modules', '@stdlib' ),
					path.join( __dirname, 'node_modules', 'configstore' ),
					path.join( __dirname, 'node_modules', 'crypto-random-string' ),
					path.join( __dirname, 'node_modules', 'fs-extra' ),
					path.join( __dirname, 'node_modules', 'unique-string' ),
					path.join( __dirname, 'node_modules', 'katex' )
				]
			}, {
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
			}
		]
	},

	plugins: [
		...baseConfig.plugins,
		new webpack.optimize.OccurrenceOrderPlugin(),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		})
	],

	target: 'electron-renderer'
};


// EXPORTS //

export default config;
