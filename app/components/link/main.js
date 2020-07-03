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
* A component for displaying a link.
*
* @property {string} href - URL of website to link to
* @property {string} className - class name
* @property {Object} style - CSS inline styles
*/
class Link extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			url: null,
			href: null,
			target: props.target
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
				newState.target = nextProps.target;
			}
			else {
				newState.url = nextProps.href;
				newState.target = nextProps.target;
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
	target: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object
};

Link.defaultProps = {
	target: '_blank',
	className: '',
	style: {}
};

Link.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'link' )( Link );
