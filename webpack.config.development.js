/* eslint max-len: 0 */

// MODULES //

import webpack from 'webpack';
import baseConfig from './webpack.config.base';


// CONFIG //

const config = {
	...baseConfig,
	devtool: 'cheap-module-eval-source-map',

	entry: [
		'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
		'./app/index'
	],

	output: {
		...baseConfig.output,
		publicPath: 'http://localhost:3000/dist/'
	},

	module: {
		...baseConfig.module,
		rules: [
			...baseConfig.module.rules,
			{
				test: /\.css$$/,
				use: [
					'style-loader',
					'css-loader?sourceMap'
				]
			}
		]
	},

	plugins: [
		...baseConfig.plugins,
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],

	target: 'electron-renderer'
};


// EXPORTS //

export default config;
