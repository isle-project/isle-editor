// MODULES //

import webpack from 'webpack';
import path from 'path';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import baseConfig from './webpack.config.base';


// VARIABLES //

const smp = new SpeedMeasurePlugin({
	granularLoaderData: false,
	disable: !process.env.MEASURE // eslint-disable-line no-process-env
});


// MAIN //

const config = {
	...baseConfig,

	devtool: 'cheap-source-map',

	entry: {
		index: './app/index'
	},

	output: {
		...baseConfig.output,
		publicPath: '../dist/',
		filename: 'renderer.prod.js',
		chunkFilename: '[name].bundle.js'
	},

	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					warnings: true,
					keep_fnames: true,
					keep_classnames: true,
					mangle: true
				}
			})
		]
	},

	module: {
		...baseConfig.module,

		rules: [
			{
				test: /.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: [
								'@babel/plugin-transform-react-constant-elements',
								'@babel/plugin-transform-react-inline-elements'
							],
							cacheDirectory: true
						}
					}
				],
				include: [
					path.join( __dirname, 'main.development.js' ),
					path.join( __dirname, 'app' ),
					path.join( __dirname, '@isle-project' )
				]
			},
			{
				test: /\.txt$/,
				type: 'asset/source'
			},
			{
				test: /\.svg$/i,
				use: {
					loader: 'svg-react-loader'
				}
			},
			{
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|ogg)(\?.*)?$/,
				type: 'asset/resource'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},

	plugins: [
		...baseConfig.plugins,
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	],

	stats: {
		warnings: false
	},

	target: 'electron-renderer'
};


// EXPORTS //

export default smp.wrap( config );
