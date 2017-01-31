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
				loader: 'babel-loader',
				include: [
					path.join( __dirname, 'main.development.js' ),
					path.join( __dirname, 'app' ),
					path.join( __dirname, 'node_modules', '@stdlib' )
				],
				query: {
					plugins: [
						'transform-react-constant-elements',
						'transform-react-remove-prop-types'
					]
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
			},
			{
				test: /\.global\.css$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader'
				})
			},
			{
				test: /^((?!\.global).)*\.css$/,
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader',
					loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
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
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				screw_ie8: true,
				warnings: false
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
