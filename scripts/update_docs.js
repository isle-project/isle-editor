/* eslint-disable no-new-func, no-new-wrappers */

'use strict';

// MODULES //

const path = require( 'path' );
const fs = require( 'fs' );
const objectKeys = require( '@stdlib/utils/keys' );
const replace = require( '@stdlib/string/replace' );
const isFunction = require( '@stdlib/assert/is-function' );


// VARIABLES //

const component = process.argv[ 2 ];
const fpath = path.join( './app/components', component, 'index.js' );
const mdpath = path.join( './docs/components', component+'.md' );
var islepath = path.join( './component-playground', component+'.isle' );
if (component === 'data-explorer') {
	islepath = path.join( './component-playground/data-explorer/data-explorer.isle');
}

const file = fs.readFileSync( fpath ).toString();
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

let str = `#### Options:

`;


let defaultsMatch = RE_DEFAULTS.exec( file )[ 1 ];
defaultsMatch = replace( defaultsMatch, 'PINF', '+Infinity' );
defaultsMatch = replace( defaultsMatch, 'NINF', '-Infinity' );
const extractDefaults = new Function( '', 'return '+defaultsMatch );
const extractDescription = new Function( '', 'return '+RE_DESCRIPTIONS.exec( file )[ 1 ] );

let typeMatch = RE_TYPES.exec( file )[ 1 ];
const extractTypes = new Function( 'PropTypes', 'return '+typeMatch);
const types = extractTypes( PropTypes );
const description = extractDescription();
const defaults = extractDefaults();
const keys = objectKeys( types );

for ( let i = 0; i < keys.length; i++ ) {
	const key = keys[ i ];
	const defaultStr = generateDefaultString( defaults[ key ] );
	str += `* __${key}__ | \`${types[ key ] }\`: ${description[ key ]}. ${defaultStr}`;
	str += '\n';
}

let md = fs.readFileSync( mdpath ).toString();
md = replace( md, /#### Options[\s\S]*$/, str );
fs.writeFileSync( mdpath, md );

let isle = fs.readFileSync( islepath ).toString();
isle = replace( isle, /#### Options[\s\S]*$/, str );
fs.writeFileSync( islepath, isle );
