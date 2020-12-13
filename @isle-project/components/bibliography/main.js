// MODULES //

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import endsWith from '@stdlib/string/ends-with';
import objectKeys from '@stdlib/utils/keys';
import SessionContext from '@isle-project/session/context.js';


// FUNCTIONS //

function generateAuthorString( author ) {
	if ( !author ) {
		return '';
	}
	return endsWith( author, '.' ) ? author : `${author}.`;
}


// MAIN //

/**
* Bibliography component which prints all references used in the lesson (specified via `references` field in the preamble).
*
* @property {string} title - heading to be displayed in front of references
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
const Bibliography = ({ title, className, style, t }) => {
	const session = useContext( SessionContext );
	const references = session.config.references;

	let keys = objectKeys( references );
	keys = keys.sort( ( a, b ) => {
		const itemA = references[ a ];
		const itemB = references[ b ];
		if ( !itemA || !itemA.author ) {
			return 1;
		}
		if ( !itemB || !itemB.author ) {
			return -1;
		}
		return itemA.author[ 0 ] > itemB.author[ 0 ] ? 1 : -1;
	});
	const out = [];
	for ( let i = 0; i < keys.length; i++ ) {
		const item = references[ keys[ i ] ];
		if ( !item ) {
			continue;
		}
		let li;
		if ( item.type === 'article' ) {
			const author = generateAuthorString( item.author );
			const title = item.title ? `${item.title}. ` : '';
			const journal = item.journal ? <i>{`${item.journal}, `}</i> : '';
			const year = item.year ? `${item.year}.` : '';
			const number = item.number ? `(${item.number})` : '';
			const pages = item.pages ? `${item.volume || number ? ':' : ''}${item.pages}, ` : '';
			const month = item.month ? ` ${item.month} ` : '';
			let val = <span>{author} {title}{journal}{item.volume}{number}{pages}{month}{year}</span>;
			li = <li key={`ref-${i}`}>{val}</li>;
		}
		else if ( item.type === 'book' ) {
			const author = generateAuthorString( item.author );
			const title = item.title ? <i>{item.title}. </i> : '';
			const publisher = item.publisher ? `${item.publisher}, ` : '';
			const address = item.address ? `${item.address}, ` : '';
			const edition = item.edition ? `${item.edition} ${t('edition')}, ` : '';
			const month = item.month ? `${item.month} ` : '';
			const year = item.year ? `${item.year}.` : '';
			let val = <span>{author} {title}{publisher}{address}{edition}{month}{year}</span>;
			li = <li key={`ref-${i}`}>{val}</li>;
		}
		out.push( li );
	}
	return (
		<div className={`outer-element ${className}`} style={style} >
			{title ? <h2>{title}</h2> : <h2>{t('references')}</h2>}
			<ol>
				{out}
			</ol>
		</div>
	);
};


// PROPERTIES //

Bibliography.propTypes = {
	title: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};

Bibliography.defaultProps = {
	title: null,
	className: '',
	style: {}
};


// EXPORTS //

export default withTranslation( 'Bibliography' )( Bibliography );
