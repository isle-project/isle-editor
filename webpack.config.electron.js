// MODULES //

const webpack = require( 'webpack' );
const SpeedMeasurePlugin = require( 'speed-measure-webpack-plugin' );
const baseConfig = require( './webpack.config.base' );


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
		filename: 'main.js'
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

module.exports = config;
