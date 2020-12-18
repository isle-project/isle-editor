/* eslint-disable no-new-func, no-console */

'use strict';

// MODULES //

const path = require( 'path' );
const fs = require( 'fs' );
const parseJSDoc = require( 'doctrine' ).parse;
const glob = require( 'glob' ).sync;
const logger = require( 'debug' );
const replace = require( '@stdlib/string/replace' );
const repeat = require( '@stdlib/string/repeat' );
const endsWith = require( '@stdlib/string/ends-with' );
const noop = require( '@stdlib/utils/noop' );
const isFunction = require( '@stdlib/assert/is-function' );
const invert = require( '@stdlib/utils/object-inverse' );
const merge = require( '@stdlib/utils/merge' );
const REQUIRES = invert( require( './../app/bundler/requires.json' ) );
const PropTypes = require( './prop_types.js' );


// VARIABLES //

const debug = logger( 'isle-editor:update-docs' );
const files = glob( path.join( '**', 'index.js' ), {
	'cwd': path.join( __dirname, '..', '@isle-project', 'components' )
});
const RE_JSDOC = /(\/\*\*[\s\S]*?\*\/)\r?\n(?:class|export default)|(\/\*\*[\s\S]*?@property[\s\S]*?\*\/)\r?\n(?:const)/;
const RE_TYPES = /\.(propTypes ?= ?{[\s\S]*?};)/;
const RE_DEFAULTS = /\.(defaultProps ?= ?{[\s\S]*?};)/;
const SCOPE_KEYS = [
	'PropTypes',
	'noop',
	'repeat',
	'DEFAULT_VALUE'
];
const SCOPE_VALUES = [
	PropTypes,
	noop,
	repeat,
	repeat( '\n', 15 )
];
const HTML_ELEMENTS = {
	'@isle-project/components/html/blockquote': 'blockquote',
	'@isle-project/components/html/div': 'div',
	'@isle-project/components/html/h1': 'h1',
	'@isle-project/components/html/h2': 'h2',
	'@isle-project/components/html/h3': 'h3',
	'@isle-project/components/html/h4': 'h4',
	'@isle-project/components/html/h5': 'h5',
	'@isle-project/components/html/h6': 'h6',
	'@isle-project/components/html/hr': 'hr',
	'@isle-project/components/html/li': 'li',
	'@isle-project/components/html/ol': 'ol',
	'@isle-project/components/html/p': 'p',
	'@isle-project/components/html/pre': 'pre',
	'@isle-project/components/html/span': 'span',
	'@isle-project/components/html/ul': 'ul'
};
const REQUIRES_MAP = merge( REQUIRES, HTML_ELEMENTS );


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
const TRANSLATIONS = {};
for ( let i = 0; i < files.length; i++ ) {
	const component = path.dirname( files[ i ] );
	const tagName = REQUIRES_MAP[ '@isle-project/components/'+component ];
	DOCS[ tagName ] = {
		props: []
	};
	let fpath = path.join( './@isle-project/components', component, 'main.js' );
	const mdpath = path.join( './docusaurus/website/docs', component+'.md' );

	let file;
	try {
		if ( !fs.existsSync( fpath ) ) {
			fpath = path.join( './@isle-project/components', component, 'index.js' );
		}
		file = fs.readFileSync( fpath ).toString();
	} catch ( err ) {
		continue;
	}
	let str = `## Options

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
		const ast = parseJSDoc( jsdoc[ 1 ] || jsdoc[ 2 ], { unwrap: true });
		if ( ast.description && ast.description.length > 0 ) {
			componentDescription = ast.description;
			if ( !endsWith( componentDescription, '.' ) ) {
				componentDescription += '.';
			}
		}
		for ( let i = 0; i < ast.tags.length; i++ ) {
			const tag = ast.tags[ i ];
			if ( tag.name === 'children' ) {
				continue;
			}
			description[ tag.name ] = `${tagName}-prop-${tag.name}`;
			TRANSLATIONS[ `${tagName}-prop-${tag.name}` ] = tag.description;
		}
	}
	DOCS[ tagName ].description = `${tagName}-description`;
	TRANSLATIONS[ `${tagName}-description` ] = componentDescription;
	let typeMatch = RE_TYPES.exec( file );
	if ( typeMatch ) {
		const extractTypes = new Function( ...SCOPE_KEYS, 'return '+typeMatch[ 1 ]);
		types = extractTypes( ...SCOPE_VALUES );
	}
	const keys = Object.keys( types );
	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		if ( key === 'children' ) {
			continue;
		}
		const defaultStr = generateDefaultString( defaults[ key ] );
		str += `* __${key}__ | \`${types[ key ] }\`: ${TRANSLATIONS[ description[ key ] ]}. ${defaultStr}`; // eslint-disable-line i18next/no-literal-string
		str += '\n';
		if ( isFunction( defaults[ key ] ) ) {
			defaults[ key ] = `function ${defaults[ key ].toString()}`; // eslint-disable-line i18next/no-literal-string
		}
		DOCS[ tagName ].props.push({
			name: key,
			type: types[ key ],
			description: description[ key ],
			defaultValue: defaults[ key ]
		});
	}

	try {
		let md = fs.readFileSync( mdpath ).toString();
		debug( 'Replacing component description...' );
		if ( componentDescription ) {
			const replacement = '\n---\n\n'+componentDescription+'\n\n## Example';
			md = replace( md, /\n---\n\n([\s\S]+?)## Example/, replacement );
		}
		debug( 'Replacing parameter descriptions...' );
		md = replace( md, /## Options[\s\S]*$/, str );

		fs.writeFileSync( mdpath, md );
	} catch ( err ) {
		debug( `Documentation for ${component} does not exist` );
	}
	debug( '\n' );
}

console.log( 'Write `documentation.json` file...' );
fs.writeFileSync( './@isle-project/components/documentation.json', JSON.stringify( DOCS, null, 2 ) );

console.log( 'Write translation `en.json` file...' );
fs.writeFileSync( './@isle-project/locales/editor/component-docs/en.json', JSON.stringify( TRANSLATIONS, null, 2 ) );

console.log( 'Finished updating docs.' );
