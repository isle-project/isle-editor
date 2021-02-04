// MODULES //

import webpack from 'webpack';
import path from 'path';
import HappyPack from 'happypack';
import TerserPlugin from 'terser-webpack-plugin';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
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
				extractComments: 'all',
				cache: true,
				parallel: true,
				terserOptions: {
					warnings: false,
					compress: {
						arrows: false,
						booleans: false,
						collapse_vars: false,
						comparisons: false,
						computed_props: false,
						hoist_funs: false,
						hoist_props: false,
						hoist_vars: false,
						if_return: false,
						inline: false,
						join_vars: false,
						keep_infinity: false,
						loops: false,
						negate_iife: false,
						properties: false,
						reduce_funcs: false,
						reduce_vars: false,
						sequences: false,
						side_effects: false,
						switches: false,
						top_retain: false,
						toplevel: false,
						typeofs: false,
						unused: false,
						conditionals: true,
						dead_code: true,
						evaluate: true
					},
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
				use: 'happypack/loader',
				include: [
					path.join( __dirname, 'main.development.js' ),
					path.join( __dirname, 'app' ),
					path.join( __dirname, '@isle-project' )
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
				test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|ogg)(\?.*)?$/,
				use: [
					'file-loader'
				]
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
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
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

	stats: {
		warnings: false
	},

	target: 'electron-renderer'
};


// EXPORTS //

export default smp.wrap( config );
