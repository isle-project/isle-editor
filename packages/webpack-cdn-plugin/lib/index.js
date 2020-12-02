
// MODULES //

const WebpackCdnPlugin = require( './webpack_cdn_plugin.js' );
const CDN_MODULES = require( './cdn_modules.json' );


// MAIN //

WebpackCdnPlugin.CDN_MODULES = CDN_MODULES;


// EXPORTS //

module.exports = WebpackCdnPlugin;
