/* eslint-disable no-new-func */

'use strict';

// MODULES //

const path = require( 'path' );
const fs = require( 'fs' );
const parseJSDoc = require( 'doctrine' ).parse;
const glob = require( 'glob' ).sync;
const logger = require( 'debug' );
const objectKeys = require( '@stdlib/utils/keys' );
const replace = require( '@stdlib/string/replace' );
const repeat = require( '@stdlib/string/repeat' );
const endsWith = require( '@stdlib/string/ends-with' );
const isFunction = require( '@stdlib/assert/is-function' );
const invert = require( '@stdlib/utils/object-inverse' );
const REQUIRES = invert( require( './../app/bundler/requires.json' ) );
const PropTypes = require( './prop_types.js' );


// VARIABLES //

const debug = logger( 'isle-editor:update-docs' );
const files = glob( '**/index.js', {
	'cwd': path.join( __dirname, '..', 'app', 'components' )
});
const RE_JSDOC = /(\/\*\*[\s\S]*?\*\/)\n(?:class|export)/;
const RE_TYPES = /\.(propTypes ?= ?{[\s\S]*?};)/;
const RE_DEFAULTS = /\.(defaultProps ?= ?{[\s\S]*?};)/;
const SCOPE_KEYS = [
	'PropTypes',
	'repeat',
	'DEFAULT_VALUE',
	'APIXU_AUTH_KEY'
];
const SCOPE_VALUES = [
	PropTypes,
	repeat,
	repeat( '\n', 15 ),
	'<number>'
];


// FUNCTIONS //

function generateDefaultString( defaultValue ) {
	if ( defaultValue === null || defaultValue === void 0 ) {
		return 'Default: `none`.';
	}
	if ( isFunction( defaultValue ) ) {
		return 'Default: `'+defaultValue.toString()+'`.';
	}
	let val = JSON.stringify( defaultValue, null, 2 );
	val = replace( val, '"', '\'' );
	return 'Default: `'+val+'`.';
}


// MAIN //

const DOCS = {};
for ( let i = 0; i < files.length; i++ ) {
	const component = path.dirname( files[ i ] );
	const tagName = REQUIRES[ 'components/'+component ];
	DOCS[ tagName ] = {
		props: []
	};
	const fpath = path.join( './app/components', component, 'index.js' );
	const mdpath = path.join( './docs/components', component+'.md' );
	const islepath = path.join( './component-playground', component+'.isle' );

	const file = fs.readFileSync( fpath ).toString();
	let str = `#### Options:

`;

	let defaultsMatch = RE_DEFAULTS.exec( file );
	let types = {};
	let defaults = {};
	let description = {};

	if ( defaultsMatch ) {
		defaultsMatch = defaultsMatch[ 1 ];
		defaultsMatch = replace( defaultsMatch, 'PINF', '+Infinity' );
		defaultsMatch = replace( defaultsMatch, 'NINF', '-Infinity' );
		const extractDefaults = new Function( ...SCOPE_KEYS, 'return '+defaultsMatch );
		defaults = extractDefaults( ...SCOPE_VALUES );
	}

	const jsdoc = file.match( RE_JSDOC );
	let componentDescription = 'Description is missing.';
	if ( jsdoc ) {
		const ast = parseJSDoc( jsdoc[ 1 ], { unwrap: true });
		if ( ast.description && ast.description.length > 0 ) {
			componentDescription = ast.description;
			if ( !endsWith( componentDescription, '.' ) ) {
				componentDescription += '.';
			}
		}
		for ( let i = 0; i < ast.tags.length; i++ ) {
			const tag = ast.tags[ i ];
			description[ tag.name ] = tag.description;
		}
	}
	DOCS[ tagName ].description = componentDescription;
	let typeMatch = RE_TYPES.exec( file );
	if ( typeMatch ) {
		const extractTypes = new Function( ...SCOPE_KEYS, 'return '+typeMatch[ 1 ]);
		types = extractTypes( ...SCOPE_VALUES );
	}
	const keys = objectKeys( types );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		const defaultStr = generateDefaultString( defaults[ key ] );
		str += `* __${key}__ | \`${types[ key ] }\`: ${description[ key ]}. ${defaultStr}`;
		str += '\n';
		if ( isFunction( defaults[ key ] ) ) {
			defaults[ key ] = defaults[ key ].toString();
		}
		DOCS[ tagName ].props.push({
			name: key,
			type: types[ key ],
			description: description[ key ],
			default: defaults[ key ]
		});
	}

	try {
		let md = fs.readFileSync( mdpath ).toString();
		debug( 'Replacing component description...' );
		if ( componentDescription ) {
			const replacement = '#$1\n\n'+componentDescription+'\n\n#### Example:';
			md = replace( md, /#([\s\S]+?)\n([\s\S]+?)#### Example:/, replacement );
		}
		debug( 'Replacing parameter descriptions...' );
		md = replace( md, /#### Options[\s\S]*$/, str );

		fs.writeFileSync( mdpath, md );
	} catch ( err ) {
		debug( `Documentation for ${component} does not exist` );
	}

	try {
		let isle = fs.readFileSync( islepath ).toString();
		isle = replace( isle, /#### Options[\s\S]*$/, str );
		fs.writeFileSync( islepath, isle );
	}
	catch ( err ) {
		debug( `Playground site for ${component} does not exist` );
	}
	debug( '\n\n' );
}

console.log( 'Write `component_documentation.json` file...' );
fs.writeFileSync( './app/editor-components/editor/components_documentation.json', JSON.stringify( DOCS, null, 2 ) );

console.log( 'Finished updating docs.' );
