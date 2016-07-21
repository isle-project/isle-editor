// MODULES //

import webpack from 'webpack';
import baseConfig from './webpack.config.base';


// CONFIG //

export default {
	...baseConfig,

	devtool: 'source-map',

	entry: './main.development',

	output: {
		path: __dirname,
		filename: './main.js'
	},

	plugins: [
		/*
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),
		*/
		new webpack.BannerPlugin(
			'require("source-map-support").install();',
			{ raw: true, entryOnly: false }
		),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify( 'production' )
			}
		}),
		new webpack.ProvidePlugin({
			'window.d3': 'd3'
		})
	],

	target: 'electron-main',

	node: {
		__dirname: false,
		__filename: false
	},

	externals: [
		'font-awesome',
		'source-map-support'
	]
};
