// MODULES //

const UglifyJS = require( 'uglify-es' );


// MAIN //

process.on( 'message', function onMessage( code ) {
	const minified = UglifyJS.minify( code, {
		warnings: true,
		compress: {
			arrows: true,
			booleans: true,
			collapse_vars: true,
			comparisons: true,
			computed_props: true,
			hoist_funs: true,
			hoist_props: true,
			hoist_vars: true,
			if_return: true,
			inline: true,
			join_vars: true,
			keep_infinity: true,
			loops: true,
			negate_iife: true,
			properties: true,
			reduce_funcs: true,
			reduce_vars: true,
			sequences: true,
			side_effects: true,
			switches: true,
			top_retain: true,
			toplevel: true,
			typeofs: true,
			unused: true,
			conditionals: true,
			dead_code: true,
			evaluate: true
		},
		mangle: true
	});
	process.send( minified );
});
