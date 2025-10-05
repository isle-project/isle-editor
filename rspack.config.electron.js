// MODULES //

const rspack = require( '@rspack/core' );
const baseConfig = require( './rspack.config.base' );


// MAIN //

const config = {
	...baseConfig,

	devtool: 'cheap-source-map',

	entry: './main.development',

	output: {
		path: __dirname,
		filename: 'main.js'
	},

	plugins: [
		new rspack.BannerPlugin({
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
};


// EXPORTS //

module.exports = config;
