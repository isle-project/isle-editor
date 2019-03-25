// MODULES //

import webpack from 'webpack';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import baseConfig from './webpack.config.base';


// VARIABLES //

const smp = new SpeedMeasurePlugin({
	granularLoaderData: false,
	disable: !process.env.MEASURE // eslint-disable-line no-process-env
});


// MAIN //

const config = smp.wrap({
	...baseConfig,

	devtool: 'cheap-source-map',

	entry: './main.development',

	output: {
		path: __dirname,
		filename: './main.js'
	},

	plugins: [
		new webpack.BannerPlugin({
			banner: 'require("source-map-support").install();',
			raw: true,
			entryOnly: false
		})
	],

	target: 'electron-main',

	node: {
		__dirname: false,
		__filename: false
	},

	externals: [
		'font-awesome',
		'source-map-support',
		'webpack',
		'react',
		'react-dom'
	]
});


// EXPORTS //

export default config;
