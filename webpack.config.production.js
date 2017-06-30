// MODULES //

import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import baseConfig from './webpack.config.base';


// CONFIG //

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
					path.join( __dirname, 'node_modules', 'unique-string' )
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
				test: /img\/[A-Z]*\.svg$/i,
				use: 'file-loader?name=./img/[name].[ext]',
				include: [
					path.join( __dirname, 'img' )
				]
			},
			{
				test: /\.global\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /^((?!\.global).)*\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
				})
			}
		]
	},

	plugins: [
		...baseConfig.plugins,
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			__DEV__: false,
			'process.env': {
				NODE_ENV: JSON.stringify( 'production' )
			}
		}),
		new ExtractTextPlugin({
			filename: 'style.css',
			allChunks: true
		})
	],

	target: 'electron-renderer'
};


// EXPORTS //

export default config;
