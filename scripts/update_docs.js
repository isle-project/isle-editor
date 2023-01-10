/* eslint-disable no-new-func, no-console */

'use strict';

// MODULES //

const path = require( 'path' );
const { existsSync, readFileSync, writeFileSync, mkdirSync } = require( 'fs' );
const parseJSDoc = require( 'doctrine' ).parse;
const glob = require( 'glob' ).sync;
const logger = require( 'debug' );
const contains = require( '@stdlib/assert/contains' );
const replace = require( '@stdlib/string/replace' );
const repeat = require( '@stdlib/string/repeat' );
const endsWith = require( '@stdlib/string/ends-with' );
const noop = require( '@stdlib/utils/noop' );
const objectKeys = require( '@stdlib/utils/keys' );
const isFunction = require( '@stdlib/assert/is-function' );
const invert = require( '@stdlib/utils/object-inverse' );
const merge = require( '@stdlib/utils/merge' );
const COMPONENT_DOCS = {
	'bg': require( './../@isle-project/locales/editor/component-docs/bg.json' ),
	'cs': require( './../@isle-project/locales/editor/component-docs/cs.json' ),
	'da': require( './../@isle-project/locales/editor/component-docs/da.json' ),
	'de': require( './../@isle-project/locales/editor/component-docs/de.json' ),
	'el': require( './../@isle-project/locales/editor/component-docs/el.json' ),
	'en': require( './../@isle-project/locales/editor/component-docs/en.json' ),
	'es': require( './../@isle-project/locales/editor/component-docs/es.json' ),
	'et': require( './../@isle-project/locales/editor/component-docs/et.json' ),
	'fi': require( './../@isle-project/locales/editor/component-docs/fi.json' ),
	'fr': require( './../@isle-project/locales/editor/component-docs/fr.json' ),
	'hu': require( './../@isle-project/locales/editor/component-docs/hu.json' ),
	'it': require( './../@isle-project/locales/editor/component-docs/it.json' ),
	'ja': require( './../@isle-project/locales/editor/component-docs/ja.json' ),
	'lt': require( './../@isle-project/locales/editor/component-docs/lt.json' ),
	'lv': require( './../@isle-project/locales/editor/component-docs/lv.json' ),
	'nl': require( './../@isle-project/locales/editor/component-docs/nl.json' ),
	'pl': require( './../@isle-project/locales/editor/component-docs/pl.json' ),
	'pt': require( './../@isle-project/locales/editor/component-docs/pt.json' ),
	'ro': require( './../@isle-project/locales/editor/component-docs/ro.json' ),
	'ru': require( './../@isle-project/locales/editor/component-docs/ru.json' ),
	'sk': require( './../@isle-project/locales/editor/component-docs/sk.json' ),
	'sl': require( './../@isle-project/locales/editor/component-docs/sl.json' ),
	'sv': require( './../@isle-project/locales/editor/component-docs/sv.json' ),
	'zh': require( './../@isle-project/locales/editor/component-docs/zh.json' )
};
const REQUIRES = invert( require( './../app/bundler/requires.json' ) );
const PropTypes = require( './prop_types.js' );


// VARIABLES //

const debug = logger( 'isle-editor:update-docs' );
const componentsDir = path.join( __dirname, '..', '@isle-project', 'components' );
const files = glob( '**/index.js', {
	'cwd': componentsDir
});
const LANGUAGE_TARGETS = [ 'bg', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr', 'hu', 'it', 'ja', 'lt', 'lv', 'nl', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sv', 'zh' ];
const RE_JSDOC = /(\/\*\*\s*\n(?:[^*]|(?:\*(?!\/)))*\*\/)\r?\n(?:class|export default)|(\/\*\*\s*\n(?:[^*]|(?:\*(?!\/)))*@property(?:[^*]|(?:\*(?!\/)))*\*\/)\r?\n(?:const)/;
const RE_TYPES = /\.(propTypes ?= ?{[\s\S]*?};)/;
const RE_DEFAULTS = /\.(defaultProps ?= ?{[\s\S]*?};)/;
const SCOPE_KEYS = [
	'PropTypes',
	'noop',
	'repeat',
	'DEFAULT_VALUE',
	'Factor'
];
const SCOPE_VALUES = [
	PropTypes,
	noop,
	repeat,
	repeat( '\n', 15 ),
	function Factor() {}
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
const LANGUAGE_ELEMENTS = {
	'@isle-project/components/language/bulgarian.js': 'Language.Bulgarian',
	'@isle-project/components/language/chinese.js': 'Language.Chinese',
	'@isle-project/components/language/czech.js': 'Language.Czech',
	'@isle-project/components/language/danish.js': 'Language.Danish',
	'@isle-project/components/language/english.js': 'Language.English',
	'@isle-project/components/language/estonian.js': 'Language.Estonian',
	'@isle-project/components/language/finnish.js': 'Language.Finnish',
	'@isle-project/components/language/french.js': 'Language.French',
	'@isle-project/components/language/german.js': 'Language.German',
	'@isle-project/components/language/greek.js': 'Language.Greek',
	'@isle-project/components/language/hungarian.js': 'Language.Hungarian',
	'@isle-project/components/language/italian.js': 'Language.Italian',
	'@isle-project/components/language/japanese.js': 'Language.Japanese',
	'@isle-project/components/language/latvian.js': 'Language.Latvian',
	'@isle-project/components/language/lithuanian.js': 'Language.Lithuanian',
	'@isle-project/components/language/netherlandish.js': 'Language.Netherlandish',
	'@isle-project/components/language/polish.js': 'Language.Polish',
	'@isle-project/components/language/portuguese.js': 'Language.Portuguese',
	'@isle-project/components/language/romanian.js': 'Language.Romanian',
	'@isle-project/components/language/russian.js': 'Language.Russian',
	'@isle-project/components/language/slovak.js': 'Language.Slovak',
	'@isle-project/components/language/slovenian.js': 'Language.Slovenian',
	'@isle-project/components/language/spanish.js': 'Language.Spanish',
	'@isle-project/components/language/swedish.js': 'Language.Swedish'
};
const REQUIRES_MAP = merge( REQUIRES, HTML_ELEMENTS, LANGUAGE_ELEMENTS );


// FUNCTIONS //

/**
 * Generates a formatted string for the default value of a property.
 *
 * @private
 * @param {*} defaultValue - default value
 * @returns {string} formatted string
 */
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

/**
 * Returns an array of component names for which a description is not available.
 *
 * @private
 * @param {Array} typeKeys - array of keys
 * @param {Object} description - mapping from component names to descriptions
 * @returns {Array} array of component names with missing descriptions
 */
function missingDescriptions( typeKeys, description ) {
	const out = [];
	for ( let i = 0; i < typeKeys.length; i++ ) {
		if ( !description[ typeKeys[ i ] ] && typeKeys[ i ] !== 'children' ) {
			out.push( typeKeys[ i ] );
		}
	}
	return out;
}

/**
 * Returns an array of component names for which there are superfluous descriptions.
 *
 * @private
 * @param {Object} types - types object
 * @param {Object} description - mapping from tag names to descriptions
 * @returns {Array} array of component names with superfluous descriptions
 */
function superfluousDescriptions( types, description ) {
	const keys = objectKeys( description );
	const out = [];
	for ( let i = 0; i < keys.length; i++ ) {
		if ( !types[ keys[ i ] ] ) {
			out.push( keys[ i ] );
		}
	}
	return out;
}


// MAIN //

const DOCS = {};
const TRANSLATIONS = {
	'options': 'Options',
	'examples': 'Examples',
	'no-properties': 'No properties available.'
};

debug( `Processing ${files.length} files...` );
for ( let i = 0; i < files.length; i++ ) {
	const component = path.dirname( files[ i ] );
	const posixComp = component.replace( /\\/g, '/' );
	const tagName = REQUIRES_MAP[ '@isle-project/components/'+posixComp ];
	delete REQUIRES_MAP[ '@isle-project/components/'+posixComp ];
	DOCS[ tagName ] = {
		props: []
	};
	let fpath = path.join( '@isle-project', 'components', component, 'main.js' );
	const mdpath = path.join( 'docusaurus', 'website', 'docs', component, '.md' );
	if ( tagName === void 0 ) {
		debug( 'Missing tag name for: '+fpath );
		continue;
	}

	let file;
	try {
		if ( !existsSync( fpath ) ) {
			fpath = path.join( '@isle-project', 'components', component, 'index.js' );
		}
		file = readFileSync( fpath ).toString();
	} catch ( err ) {
		continue;
	}
	let optionsStr = `## Options

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
			const propKey = `${tagName}-prop-${tag.name}`;
			if ( !contains( propKey, 'undefined' ) ) {
				description[ tag.name ] = propKey;
				TRANSLATIONS[ propKey ] = tag.description;
				if ( COMPONENT_DOCS.en[ propKey ] !== tag.description ) {
					for ( let i = 0; i < LANGUAGE_TARGETS.length; i++ ) {
						const lng = LANGUAGE_TARGETS[ i ];
						delete COMPONENT_DOCS[ lng ][ propKey ];
					}
				}
			} else {
				console.log( 'Encountered an illegal key: '+propKey );
			}
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

	let arr = missingDescriptions( keys, description );
	if ( arr.length > 0 ) {
		console.log( 'Missing descriptions for component '+tagName+': '+arr.join( ', ' ) );
	}
	arr = superfluousDescriptions( types, description );
	if ( arr.length > 0 ) {
		console.log( 'Superfluous descriptions for component '+tagName+': '+arr.join( ', ' ) );
	}

	for ( let i = 0; i < keys.length; i++ ) {
		const key = keys[ i ];
		if ( key === 'children' ) {
			continue;
		}
		const defaultStr = generateDefaultString( defaults[ key ] );
		optionsStr += `* __${key}__ | \`${types[ key ] }\`: ${description[ key ]}. ${defaultStr}`; // eslint-disable-line i18next/no-literal-string
		optionsStr += '\n';
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
	if ( keys.length === 0 ) {
		optionsStr += COMPONENT_DOCS[ 'en' ][ 'no-properties' ];
	}
	try {
		let md = readFileSync( mdpath ).toString();
		debug( 'Replacing component description...' );
		let replacement = '\n---\n\n'+COMPONENT_DOCS[ 'en' ][ `${tagName}-description` ]+'\n\n';
		replacement += optionsStr;
		for ( let i = 0; i < keys.length; i++ ) {
			const key = keys[ i ];
			replacement = replace( replacement, ': '+description[ key ]+'.', ': '+COMPONENT_DOCS[ 'en' ][ description[ key ] ]+'.' );
		}
		replacement += '\n\n';
		replacement += '## Examples';
		md = replace( md, /\n---\n\n([\s\S]+?)## Examples/, replacement );
		debug( 'Replacing parameter descriptions...' );
		writeFileSync( mdpath, md );

		for ( let j = 0; j < LANGUAGE_TARGETS.length; j++ ) {
			const lng = LANGUAGE_TARGETS[ j ];
			debug( 'Handling language: '+lng );
			const lngMdPath = path.join( './docusaurus/website/i18n/'+lng+'/docusaurus-plugin-content-docs/current', component+'.md' );
			const componentDescription = COMPONENT_DOCS[ lng ][ `${tagName}-description`];
			let replacement = '\n---\n\n'+componentDescription+'\n\n';
			replacement += replace( optionsStr, '## Options', '## '+COMPONENT_DOCS[ lng ][ 'options' ] );
			for ( let i = 0; i < keys.length; i++ ) {
				const key = keys[ i ];
				replacement = replace( replacement, ': '+description[ key ]+'.', ': '+COMPONENT_DOCS[ lng ][ description[ key ] ]+'.' );
			}
			if ( keys.length === 0 ) {
				replacement = replace( COMPONENT_DOCS[ 'en' ][ 'no-properties' ], COMPONENT_DOCS[ lng ][ 'no-properties' ] );
			}
			replacement += '\n\n';
			replacement += '## '+COMPONENT_DOCS[ lng ][ 'examples' ];
			const lngMd = replace( md, /\n---\n\n([\s\S]+?)## Examples/, replacement );
			debug( 'Writing file: '+lngMdPath );
			const dir = path.dirname( lngMdPath );
			if ( !existsSync( dir ) ) {
				mkdirSync( dir, { recursive: true });
			}
			writeFileSync( lngMdPath, lngMd );
		}
	} catch ( err ) {
		debug( `Documentation for ${component} does not exist? Encountered error: ${err.message}` );
	}
	debug( '\n' );
}

console.log( 'Write `documentation.json` file...' );
writeFileSync( path.join( '@isle-project', 'components', 'documentation.json' ), JSON.stringify( DOCS, null, '\t' ) );

console.log( 'Write translation `en.json` file...' );

const translationKeys = objectKeys( TRANSLATIONS );
translationKeys.sort( ( a, b ) => {
	return a.localeCompare(b);
});
const out = {};
for ( let i = 0; i < translationKeys.length; i++ ) {
	const key = translationKeys[ i ];
	out[ key ] = TRANSLATIONS[ key ];
}
const enFile = path.join( '@isle-project', 'locales', 'editor', 'component-docs', 'en.json' );
writeFileSync( enFile, JSON.stringify( out, null, '\t' ).concat( '\n' ) );

for ( let i = 0; i < LANGUAGE_TARGETS.length; i++ ) {
	const lng = LANGUAGE_TARGETS[ i ];
	const lngFile = path.join( '@isle-project', 'locales', 'editor', 'component-docs', lng+'.json' );
	writeFileSync( lngFile, JSON.stringify( COMPONENT_DOCS[ lng ], null, '\t' ).concat( '\n' ) );
}
console.log( 'Finished updating docs.' );

console.log( 'Components without docs: ' );
console.log( REQUIRES_MAP );
