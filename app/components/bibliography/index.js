// MODULES //

import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import endsWith from '@stdlib/string/ends-with';
import objectKeys from '@stdlib/utils/keys';
import { SessionContext } from '@isle-project/session';


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
* @prop {string} title - heading to be displayed in front of references
*/
class Bibliography extends Component {
	render() {
		const session = this.context;
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
				const edition = item.edition ? `${item.edition} edition, ` : '';
				const month = item.month ? `${item.month} ` : '';
				const year = item.year ? `${item.year}.` : '';
				let val = <span>{author} {title}{publisher}{address}{edition}{month}{year}</span>;
				li = <li key={`ref-${i}`}>{val}</li>;
			}
			out.push( li );
		}
		return (
			<Fragment>
				{this.props.title ? <h2>{this.props.title}</h2> : null}
				<ol>
					{out}
				</ol>
			</Fragment>
		);
	}
}


// PROPERTIES //

Bibliography.propTypes = {
	title: PropTypes.string
};

Bibliography.defaultProps = {
	title: 'References'
};

Bibliography.contextType = SessionContext;


// EXPORTS //

export default Bibliography;
