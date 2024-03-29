// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { isPrimitive as isString } from '@stdlib/assert/is-string';
import startsWith from '@stdlib/string/starts-with';
import { ContextMenuTrigger } from '@isle-project/components/internal/contextmenu';
import SessionContext from '@isle-project/session/context.js';
import LinkContextMenu from './contextmenu.js';
import { OPEN } from '@isle-project/constants/actions.js';
import { withActionLogger } from '@isle-project/session/action_logger.js';


// MAIN //

/**
* A component for displaying a link.
*
* @property {string} href - URL of website to link to
* @property {string} target - defines where link is opened: set to `_blank` for new window, `_self` own frame, `_parent` for parent, `_top` for full body of window, or the name of the frame
* @property {(string|boolean)} download - specifies whether link should be downloaded: set to `true` to force download, or a string to specify the filename; if `false`, no download is forced
* @property {string} windowFeatures - comma-separated list of window features for when link is opened in new window (see: https://developer.mozilla.org/en-US/docs/Web/API/Window/open#window_features)
* @property {boolean} openWindow - boolean controlling whether to open URL in new window
* @property {string} className - class name
* @property {string} tag - a label or category associated with the action of clicking on the link
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
			const isStr = isString( nextProps.href );
			const isAnchor = isStr && startsWith( nextProps.href, '#' );
			if (
				isStr &&
				!startsWith( nextProps.href, 'http' ) &&
				!startsWith( nextProps.href, 'mailto' ) &&
				!isAnchor
			) {
				newState.url = 'http://'+nextProps.href;
				newState.target = nextProps.target;
			}
			else {
				newState.url = nextProps.href;
				newState.target = isAnchor ? '_self' : nextProps.target;
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
						target={this.state.target || '_blank'}
						style={this.props.style}
						onClick={this.props.openWindow ? ( event ) => {
							event.preventDefault();
							window.open( this.state.url, '_blank', this.props.windowFeatures );
							this.props.logAction( OPEN, 'click' );
							this.props.logScore( 100, 'completed', this.props.tag );
						} : () => {
							this.props.logAction( OPEN, 'click' );
							this.props.logScore( 100, 'completed', this.props.tag );
						}}
						download={this.props.download}
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
					logAction={this.props.logAction}
				/>
			</Fragment>
		);
	}
}


// PROPERTIES //

Link.propTypes = {
	href: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types,
	download: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.bool
	]),
	target: PropTypes.string,
	windowFeatures: PropTypes.string,
	openWindow: PropTypes.bool,
	className: PropTypes.string,
	tag: PropTypes.string,
	style: PropTypes.object
};

Link.defaultProps = {
	download: false,
	target: null,
	windowFeatures: null,
	openWindow: false,
	className: '',
	tag: null,
	style: {}
};

Link.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'link' )( withActionLogger( 'LINK', props => props.href )( Link ) );
