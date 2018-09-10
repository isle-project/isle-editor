/* eslint-disable no-new-func, no-new-wrappers */

'use strict';

// MODULES //

const path = require( 'path' );
const fs = require( 'fs' );
const glob = require( 'glob' ).sync;
const objectKeys = require( '@stdlib/utils/keys' );
const replace = require( '@stdlib/string/replace' );
const repeat = require( '@stdlib/string/repeat' );
const endsWith = require( '@stdlib/string/ends-with' );
const isFunction = require( '@stdlib/assert/is-function' );


// VARIABLES //

const files = glob( '**/index.js', {
	'cwd': path.join( __dirname, '..', 'app', 'components' )
});

const RE_DESCRIPTION = /\.description ?= '([\s\S]*?)';/;
const RE_DESCRIPTIONS = /\.(propDescriptions ?= ?{[\s\S]*?};)/;
const RE_TYPES = /\.(propTypes ?= ?{[\s\S]*?};)/;
const RE_DEFAULTS = /\.(defaultProps ?= ?{[\s\S]*?};)/;
const PropTypes = {};
PropTypes.string = new String( 'string' );
PropTypes.string.isRequired = 'string (required)';
PropTypes.number = new String( 'number' );
PropTypes.number.isRequired = 'number (required)';
PropTypes.array = new String( 'array' );
PropTypes.array.isRequired = 'array (required)';
PropTypes.object = new String( 'object' );
PropTypes.object.isRequired = 'object (required)';
PropTypes.bool = new String( 'boolean' );
PropTypes.bool.isRequired = 'boolean (required)';
PropTypes.func = new String( 'function' );
PropTypes.func.isRequired = 'function (required)';
PropTypes.node = new String( 'node' );
PropTypes.node.isRequired = 'node (required)';
PropTypes.arrayOf = function arrayOf( str ) {
	const out = new String( `array<${str}>` );
	out.isRequired = out+' (required)';
	return out;
};
PropTypes.objectOf = function objectOf( str ) {
	const out = new String( `object<${str}>` );
	out.isRequired = out+' (required)';
	return out;
};
PropTypes.shape = function shape( obj ) {
	const out = new String( `{${objectKeys( obj ).join( ',' )}}` );
	out.isRequired = out+' (required)';
	return out;
};
PropTypes.oneOfType = function oneOfType( arr ) {
	const out = new String( `(${arr.join( '|' )})` );
	out.isRequired = out+' (required)';
	return out;
};
PropTypes.oneOf = function oneOf( arr ) {
	const out = new String( typeof arr[ 0 ]);
	out.isRequired = out+' (required)';
	return out;
};
const SCOPE_KEYS = [
	'PropTypes',
	'repeat',
	'DEFAULT_VALUE'
];
const SCOPE_VALUES = [
	PropTypes,
	repeat,
	repeat( '\n', 15 )
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


for ( let i = 0; i < files.length; i++ ) {
	const component = path.dirname( files[ i ] );
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
	const descrMatch = RE_DESCRIPTIONS.exec( file );
	if ( descrMatch ) {
		const extractDescription = new Function( ...SCOPE_KEYS, 'return '+descrMatch[ 1 ] );
		description = extractDescription( ...SCOPE_VALUES );
	}
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
	}

	try {
		let md = fs.readFileSync( mdpath ).toString();
		let matches = file.match( RE_DESCRIPTION );
		let componentDescription = matches[ 1 ];
		if ( !endsWith( componentDescription, '.' ) ) {
			componentDescription += '.';
		}
		if ( componentDescription ) {
			const replacement = '#$1\n\n'+componentDescription+'\n\n#### Example:';
			md = replace( md, /#([\s\S]+?)\n([\s\S]+?)#### Example:/, replacement );
		}
		md = replace( md, /#### Options[\s\S]*$/, str );
		fs.writeFileSync( mdpath, md );
	} catch ( err ) {
		console.log( `Documentation for ${component} does not exist` );
	}

	try {
		let isle = fs.readFileSync( islepath ).toString();
		isle = replace( isle, /#### Options[\s\S]*$/, str );
		fs.writeFileSync( islepath, isle );
	}
	catch ( err ) {
		console.log( `Playground site for ${component} does not exist` );
	}
}
