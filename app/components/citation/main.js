// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import trim from '@stdlib/string/trim';
import contains from '@stdlib/assert/contains';
import SessionContext from 'session/context.js';
import './load_translations.js';


// FUNCTIONS //

function extractSurname( name ) {
	name = trim( name );
	if ( contains( name, ',' ) ) {
		return name.substring( 0, name.indexOf( ',' ) );
	}
	return name.substring( name.lastIndexOf( ' ' ) + 1 );
}


// MAIN //

/**
* Citation component.
*
* @property {string} citeKey - item reference
* @property {boolean} parens - controls whether to display citation in parentheses
* @property {string} label - label for citation (e.g., page or range of pages)
*/
class Citation extends Component {
	render() {
		const session = this.context;
		const item = session.config.references[ this.props.citeKey ];
		if ( !item ) {
			return <span style={{ background: 'red', color: 'white' }} >Citation key not found in references.</span>;
		}
		if ( !item.author ) {
			return <span style={{ background: 'red', color: 'white' }} >Author field should not be empty.</span>;
		}
		let authors = item.author.split( 'and' );
		let author = '';
		if ( authors.length > 2 ) {
			author = extractSurname( authors[ 0 ] ) + ' et al.';
		} else if ( authors.length > 1 ) {
			author = extractSurname( authors[ 0 ] ) + this.props.t('and') + extractSurname( authors[ 1 ] );
		} else {
			author = extractSurname( authors[ 0 ] );
		}
		const label = this.props.label ? `, ${this.props.label}` : '';
		if ( this.props.parens ) {
			return <span>({author}, {item.year}{label})</span>;
		}
		return <span>{author} ({item.year}{label})</span>;
	}
}


// PROPERTIES //

Citation.propTypes = {
	citeKey: PropTypes.string.isRequired,
	parens: PropTypes.bool,
	label: PropTypes.string
};

Citation.defaultProps = {
	parens: false,
	label: ''
};

Citation.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'citation' )( Citation );
