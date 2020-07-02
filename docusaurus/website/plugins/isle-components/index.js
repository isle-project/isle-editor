// MAIN //

const path = require( 'path' );
const CDN_MODULES = require( './../../../../app/bundler/cdn_modules.json' );
const WebpackCdnPlugin = require( './webpack_cdn_plugin.js' );


// VARIABLES //

const resolve = path.resolve;
const basePath = resolve( __dirname, './../../../../' );
const modulePaths = [
	path.join( basePath, 'node_modules' ),
	path.join( basePath, 'app' )
];
const EXTERNALS = {};
for ( let i = 0; i < CDN_MODULES.length; i++ ) {
	const p = CDN_MODULES[ i ];
	EXTERNALS[ p.name ] = p.var || p.name;
}


// MODULES //

module.exports = function main( context, options ) {
	return {
		name: 'isle-components',
		configureWebpack( config, isServer ) {
			return {
				resolve: {
					modules: modulePaths
				},
				node: {
					Buffer: 'mock',
					child_process: 'empty',
					module: 'empty',
					dns: 'mock',
					fs: 'empty',
					net: 'mock',
					tls: 'mock'
				},
				module: {
					rules: [
						{
							test: /\.js$/,
							exclude: [
								/node_modules(?:\/|\\)(?!debug|@iktakahiro(?:\/|\\)markdown-it-katex)/,
								/fonts\.js$/
							],
							loader: 'babel-loader',
							query: {
								plugins: [
									resolve( basePath, './node_modules/@babel/plugin-transform-react-constant-elements' ),
									resolve( basePath, './node_modules/@babel/plugin-transform-react-inline-elements' ),
									resolve( basePath, './node_modules/babel-plugin-transform-react-remove-prop-types' ),
									resolve( basePath, './node_modules/@babel/plugin-transform-react-jsx' ),
									resolve( basePath, './node_modules/@babel/plugin-proposal-class-properties' ),
									resolve( basePath, './node_modules/@babel/plugin-syntax-dynamic-import' ),
									[ resolve( basePath, './node_modules/@babel/plugin-transform-runtime' ), {
										'regenerator': true
									}]
								],
								presets: [
									[ resolve( basePath, './node_modules/@babel/preset-env' ), {
										targets: {
											ie: '11'
										},
										useBuiltIns: 'usage',
										corejs: 2
									}],
									resolve( basePath, './node_modules/@babel/preset-react' )
								],
								babelrc: false,
								cacheDirectory: true,
								overrides: [{
									test: [
										resolve( basePath, './node_modules/debug/**/*.js' ),
										resolve( basePath, './node_modules/@iktakahiro/markdown-it-katex/**/*.js' )
									],
									presets: [
										[ resolve( basePath, './node_modules/@babel/preset-env' ), {
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
						}
					]
				},
				plugins: [
					new WebpackCdnPlugin({
						prodUrl: 'https://cdnjs.cloudflare.com/ajax/libs/:alias/:version/:path',
						modules: CDN_MODULES
					})
				]
			};
		}
	};
};
