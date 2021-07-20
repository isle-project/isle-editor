// MODULES //

const path = require( 'path' );
const { DefinePlugin, DllReferencePlugin } = require( 'webpack' );
const COMPONENTS_MANIFEST = require( './../../../../@isle-project/dll/components-manifest.json' );
const LOCALES_MANIFEST = require( './../../../../@isle-project/dll/locales-manifest.json' );
const SESSION_MANIFEST = require( './../../../../@isle-project/dll/session-manifest.json' );


// VARIABLES //

const resolve = path.resolve;
const basePath = resolve( __dirname, './../../../../' );
const modulePaths = [
	path.join( basePath, '.' ),
	path.join( basePath, 'app' ),
	path.join( basePath, 'node_modules' )
];


// MAIN //

function main( context, options ) {
	return {
		name: 'isle-components',
		configureWebpack( config, isServer ) {
			const customConfig = {
				resolve: {
					modules: modulePaths,
					alias: {
						'@isle-project/components/internal/response-visualizer': '@isle-project/components/html/div', // Ensure response visualizer is not included (breaks due to usage of Web worker)
						'pdfjs-dist/build/pdf.min.js': isServer ? '@stdlib/utils/noop' : 'pdfjs-dist/build/pdf.min.js' // Ensure server-side rendering does not break due to non-availability of `canvas`
					},
					fallback: {
						'path': resolve( basePath, './node_modules/path-browserify' ),
						'stream': resolve( basePath, './node_modules/stream-browserify' ),
						'os': resolve( basePath, './node_modules/os-browserify/browser' ),
						'fs': false,
						'domain': false
					}
				},
				plugins: [
					new DllReferencePlugin({
						manifest: LOCALES_MANIFEST
					}),
					new DllReferencePlugin({
						manifest: SESSION_MANIFEST
					}),
					new DllReferencePlugin({
						manifest: COMPONENTS_MANIFEST
					}),
					new DefinePlugin({
						'process.env': {
							NODE_ENV: '"production"'
						}
					})
				],
				module: {
					rules: [
						{
							test: /\.js$/,
							exclude: [
								/node_modules(?:\/|\\)(?!debug)/,
								/fonts\.js$/,
								/markdown-to-html/
							],
							loader: 'babel-loader',
							options: {
								plugins: [
									'@babel/plugin-transform-react-constant-elements',
									'@babel/plugin-transform-react-inline-elements',
									'babel-plugin-transform-react-remove-prop-types',
									'@babel/plugin-transform-react-jsx',
									'@babel/plugin-proposal-class-properties',
									'@babel/plugin-syntax-dynamic-import',
									[ '@babel/plugin-transform-runtime', {
										'regenerator': true
									}]
								],
								presets: [
									[ '@babel/preset-env', {
										targets: {
											ie: '11'
										},
										useBuiltIns: 'usage',
										corejs: 2
									}],
									'@babel/preset-react'
								],
								babelrc: false,
								cacheDirectory: true,
								overrides: [{
									test: [
										resolve( basePath, './node_modules/debug/**/*.js' )
									],
									presets: [
										[ '@babel/preset-env', {
											modules: 'commonjs',
											targets: {
												ie: '11'
											}
										}]
									]
								}]
							}
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
						}
					]
				}
			};
			if ( isServer ) {
				customConfig.resolve.alias[ './wrapped_components.js' ] = './empty_components.js';
			}
			return customConfig;
		}
	};
}


// EXPORTS //

module.exports = main;
