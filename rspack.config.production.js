// MODULES //

const rspack = require( '@rspack/core' );
const path = require( 'path' );
const esbuild = require( 'esbuild' );
const { EsbuildPlugin } = require( 'esbuild-loader' );
const baseConfig = require( './rspack.config.base' );


// MAIN //

const config = {
	...baseConfig,

	mode: 'production',

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
			new EsbuildPlugin({
				target: 'es2015',
				implementation: esbuild,
				minify: false,
				minifyIdentifiers: false,
				minifyWhitespace: true,
				minifySyntax: true,
				legalComments: 'none'
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
						loader: 'esbuild-loader',
						options: {
							loader: 'jsx',
							target: 'es2015',
							implementation: esbuild
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
		new rspack.DefinePlugin({
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

module.exports = config;
