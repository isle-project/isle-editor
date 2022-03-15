// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import startsWith from '@stdlib/string/starts-with';
import { ContextMenuTrigger } from '@isle-project/components/internal/contextmenu';
import SessionContext from '@isle-project/session/context.js';
import LinkContextMenu from './contextmenu.js';
import { OPEN_LINK } from '@isle-project/constants/actions.js';


// MAIN //

/**
* A component for displaying a link.
*
* @property {string} href - URL of website to link to
* @property {string} target - defines where link is opened: set to `_blank` for new window, `_self` own frame, `_parent` for parent, `_top` for full body of window, or the name of the frame
* @property {string} windowFeatures - comma-separated list of window features for when link is opened in new window (see: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features)
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
				isString( nextProps.href ) &&
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
						onClick={() => {
							if ( this.props.openWindow ) {
								window.open( this.state.url, '_blank', this.props.windowFeatures );
							}
							const session = this.context;
							session.log({
								id: this.state.url,
								type: OPEN_LINK,
								value: 'click'
							});
						}}
					>
						{this.props.children}
					</a>
				</ContextMenuTrigger>
				<LinkContextMenu
					session={this.context}
					url={this.state.url}
					target={this.state.target}
					t={this.props.t}
					windowFeatures={this.props.windowFeatures}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Link.propTypes = {
	href: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types,
	target: PropTypes.string,
	windowFeatures: PropTypes.string,
	openWindow: PropTypes.bool,
	className: PropTypes.string,
	style: PropTypes.object
};

Link.defaultProps = {
	target: '_blank',
	windowFeatures: null,
	openWindow: false,
	className: '',
	style: {}
};

Link.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'link' )( Link );
