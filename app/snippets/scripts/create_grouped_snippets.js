'use strict';

// MODULES //

const fs = require( 'fs' );
const { join } = require( 'path' );
const contains = require( '@stdlib/assert/contains' );
const trim = require( '@stdlib/string/trim' );
const groupBy = require( '@stdlib/utils/group-by' );
const SNIPPETS = require( './../components.json' ); // FIXME: Avoid relative path
const GROUPINGS = require( './../groupings.json' );


// VARIABLES //

const RE_HEADING = /h\d/;


// FUNCTIONS //

/**
 * Returns a group indicator for the given snippet.
 *
 * @private
 * @param {Object} v - snippet object
 * @returns {string} group indicator
 */
function groupIndicator( v ) {
	v.name = trim( v.name );
	if ( contains( GROUPINGS.R, v.name ) ) {
		return 'rComponents';
	}
	if ( contains( GROUPINGS.PRESENTATION, v.name ) ) {
		return 'presentation';
	}
	if ( contains( GROUPINGS.MODELS, v.name ) ) {
		return 'models';
	}
	if ( contains( GROUPINGS.TABLES, v.name ) ) {
		return 'tables';
	}
	if ( contains( GROUPINGS.TESTS, v.name ) ) {
		return 'tests';
	}
	if ( contains( GROUPINGS.PLOTS, v.name ) ) {
		return 'plots';
	}
	if ( contains( GROUPINGS.VICTORY, v.name ) ) {
		return 'victory';
	}
	if ( contains( GROUPINGS.LANGUAGE, v.name ) ) {
		return 'language';
	}
	if ( contains( GROUPINGS.LEARNING, v.name ) ) {
		if ( contains( v.name, 'Distribution' ) ) {
			return 'learningDistribution';
		}
		return 'learning';
	}
	if ( contains( GROUPINGS.PROGRAMMATIC, v.name ) ) {
		return 'programmatic';
	}
	if ( contains( GROUPINGS.SERVICES, v.name ) ) {
		return 'services';
	}
	if ( contains( GROUPINGS.SURVEY, v.name ) ) {
		return 'surveys';
	}
	if ( contains( GROUPINGS.INPUT, v.name ) ) {
		return 'inputs';
	}
	if ( contains( GROUPINGS.QUESTION, v.name ) ) {
		return 'questions';
	}
	if ( contains( GROUPINGS.DISPLAY, v.name ) ) {
		return 'displayComponents';
	}
	if ( contains( GROUPINGS.LAYOUT, v.name ) ) {
		return 'layout';
	}
	if ( contains( GROUPINGS.MAIN, v.name ) ) {
		return 'main';
	}
	if ( contains( GROUPINGS.BASIC, v.name ) ) {
		if ( RE_HEADING.test( v.name ) ) {
			return 'basicHeadings';
		}
		if ( v.name === 'ul' || v.name === 'ol' || v.name === 'li' ) {
			return 'basicLists';
		}
		return 'basic';
	}
	return 'general';
}


// MAIN //

const main = groupBy( SNIPPETS, groupIndicator );
const fpath = join( __dirname, './../grouped_snippets.json' );
fs.writeFileSync( fpath, JSON.stringify( main, null, 2 ) );

