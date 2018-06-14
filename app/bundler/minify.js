// MODULES //

const UglifyJS = require( 'uglify-es' );


// MAIN //

process.on( 'message', function onMessage( code ) {
	const minified = UglifyJS.minify( code, {
		warnings: true,
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
			keep_infinity: true,
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
	});
	process.send( minified );
});
