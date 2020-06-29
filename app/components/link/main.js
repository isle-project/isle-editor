// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { ContextMenuTrigger } from 'react-contextmenu';
import startsWith from '@stdlib/string/starts-with';
import SessionContext from 'session/context.js';
import LinkContextMenu from './contextmenu.js';
import './load_translations.js';


// MAIN //

/**
* A link component.
*
* @property {string} href - URL of website to link to
*/
class Link extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			url: null,
			href: null,
			target: '_blank'
		};
	}

	static getDerivedStateFromProps( nextProps, prevState ) {
		if ( nextProps.href !== prevState.href ) {
			const newState = {
				href: nextProps.href
			};
			if (
				!startsWith( nextProps.href, 'http' ) &&
				!startsWith( nextProps.href, 'mailto' ) &&
				!startsWith( nextProps.href, '#' )
			) {
				newState.url = 'http://'+nextProps.href;
				newState.target = '_blank';
			}
			else {
				newState.url = nextProps.href;
				newState.target = null;
			}
			return newState;
		}
		return null;
	}

	render() {
		return (
			<Fragment>
				<ContextMenuTrigger
					holdToDisplay={-1}
					disableIfShiftIsPressed
					id={`${this.state.url}-context-menu`}
					renderTag="span"
				>
					<a
						className={this.props.className}
						href={this.state.url}
						target={this.state.target}
						style={this.props.style}
					>
						{this.props.children}
					</a>
				</ContextMenuTrigger>
				<LinkContextMenu
					session={this.context}
					url={this.state.url}
					target={this.state.target}
					t={this.props.t}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Link.propTypes = {
	href: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types,
	className: PropTypes.string,
	style: PropTypes.object
};

Link.defaultProps = {
	className: '',
	style: {}
};

Link.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'link' )( Link );
