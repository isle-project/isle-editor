// MODULES //

import webpack from 'webpack';
import path from 'path';
import HappyPack from 'happypack';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import baseConfig from './webpack.config.base';


// MAIN //

const config = {
	...baseConfig,

	devtool: 'source-map',

	entry: {
		index: './app/index'
	},

	output: {
		...baseConfig.output,
		publicPath: '../dist/',
		filename: 'renderer.prod.js'
	},

	module: {
		...baseConfig.module,

		rules: [
			{
				test: /.js$/,
				use: 'happypack/loader',
				include: [
					path.join( __dirname, 'main.development.js' ),
					path.join( __dirname, 'app' )
				]
			},
			{
				test: /\.txt$/,
				use: 'raw-loader'
			},
			{
				test: /\.svg$/i,
				use: {
					loader: 'svg-react-loader'
				}
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
		new HardSourceWebpackPlugin(),
		new HappyPack({
			loaders: [{
				loader: 'babel-loader',
				options: {
					plugins: [
						'@babel/plugin-transform-react-constant-elements',
						'@babel/plugin-transform-react-inline-elements'
					],
					cacheDirectory: true
				}
			}]
		})
	],

	target: 'electron-renderer'
};


// EXPORTS //

export default config;
