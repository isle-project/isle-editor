// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { withTranslation } from 'react-i18next';
import isUndefined from '@stdlib/assert/is-undefined';
import isNull from '@stdlib/assert/is-null';
import { RECEIVED_USER_RIGHTS, LOGGED_IN, LOGGED_OUT } from '@isle-project/constants/events.js';
import { TOGGLE_PRESENTATION_MODE } from '@isle-project/constants/actions.js';
import SessionContext from '@isle-project/session/context.js';
import RoleContext from '@isle-project/session/role_context.js';


// MAIN //

/**
* An ISLE component that allows to display its children only to reserved audiences.
*
* @property {boolean} user - when set the gated content is displayed to users
* @property {boolean} notUser - when set the gated content is **not** displayed to users
* @property {boolean} enrolled - when set the gated content is displayed to the students enrolled in the course
* @property {boolean} notEnrolled - when set the gated content is **not** displayed to the students enrolled in the course
* @property {boolean} owner - when set the gated content is displayed to the owner of the course (usually the instructor)
* @property {boolean} notOwner - when set the gated content is **not** displayed to the owner of the course (usually the instructor)
* @property {Date} until - time until the contents of the gate should remain visible
* @property {Date} after - time after which the contents of the gate should become visible
* @property {Node} banner - a custom message which is displayed to visitors for whom the gate's children are not visible instead of the default one
* @property {boolean} showOwnerInPresentationMode - controls whether to show gate contents in presentation mode when gate is visible for `owner`s
* @property {boolean} disabled - if a gate is disabled, the banner will be displayed no matter what
* @property {Function} check - callback function returning a `boolean` indicating whether gate should display child components; the function is invoked whenever session actions arrive
*/
class Gate extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			isEnrolled: false,
			isOwner: false,
			validCheck: props.check ? props.check( context ) : true,
			bypassTimeCheck: false
		};
	}

	componentDidMount() {
		this._isMounted = true;
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if (
					type === RECEIVED_USER_RIGHTS ||
					type === LOGGED_IN ||
					type === LOGGED_OUT ||
					type === TOGGLE_PRESENTATION_MODE
				) {
					this.checkAuthorization();
				}
				if ( this.props.check ) {
					const validCheck = this.props.check( session );
					if ( validCheck !== this.state.validCheck ) {
						return this.setState({
							validCheck
						});
					}
				}
				if ( this._isMounted ) {
					this.forceUpdate();
				}
			});
			this.checkAuthorization();
		}
	}

	componentDidUpdate() {
		if ( this.props.check ) {
			const validCheck = this.props.check( this.context );
			if ( validCheck !== this.state.validCheck ) {
				return this.setState({
					validCheck
				});
			}
		}
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
		this._isMounted = false;
	}

	checkAuthorization() {
		const session = this.context;
		let newState = {
			isEnrolled: session.isEnrolled(),
			isOwner: session.isOwner(),
			presentationMode: session.presentationMode
		};
		if (
			newState.isEnrolled !== this.state.isEnrolled ||
			newState.isOwner !== this.state.isOwner ||
			newState.presentationMode !== this.state.presentationMode
		) {
			this.setState( newState );
		}
	}

	isTimeActive() {
		if ( !this.props.after && !this.props.until ) {
			return true;
		}
		const session = this.context;
		if ( this.props.after && this.props.until ) {
			return this.props.after < session.startTime && session.startTime <= this.props.until;
		} else if ( this.props.until ) {
			return session.startTime <= this.props.until;
		}
		// Case: `after` property assigned
		return this.props.after < session.startTime;
	}

	renderBanner() {
		if ( !isUndefined( this.props.banner ) ) {
			return this.props.banner;
		}
		const { check, disabled, user, notUser, enrolled, notEnrolled, owner, notOwner, after, until, t } = this.props;
		let banner;
		if ( check && !this.state.validCheck ) {
			banner = t('check-not-satisfied');
			return <Alert variant="info">{banner}</Alert>;
		}
		if ( after || until ) {
			if ( after ) {
				banner = t('available-after') + ' ' + after.toLocaleString();
				if ( until ) {
					banner += ' ';
					banner += t('remain-until') + ' ' +until.toLocaleString();
				}
			} else {
				const time = until.toLocaleString();
				banner = t('available-until') + ' ' + time;
			}
		} else if ( disabled ) {
			banner = t('not-available');
			return <Alert variant="info">{banner}</Alert>;
		} else {
			banner = t('content-only-available');
		}
		let bool = false;
		if ( user ) {
			if ( notUser ) {
				banner = t('not-available');
				return <Alert variant="info">{banner}</Alert>;
			}
			banner += ' to logged-in users';
			bool = true;
		} else if ( notUser ) {
			banner += ' to logged-out users';
			bool = true;
		}
		if ( enrolled ) {
			if ( notEnrolled ) {
				banner = t('not-available');
				return <Alert variant="info">{banner}</Alert>;
			}
			if ( bool ) {
				banner += ' ';
				banner += t('and');
			}
			banner += ' ';
			banner += t('to-enrolled');
			bool = true;
		} else if ( notEnrolled ) {
			if ( bool ) {
				banner += ' ';
				banner += t('and');
			}
			banner += ' ';
			banner += t('to-not-enrolled');
			bool = true;
		}
		if ( owner ) {
			if ( notOwner ) {
				banner = t('not-available');
				return <Alert variant="info">{banner}</Alert>;
			}
			if ( bool ) {
				banner += ' ';
				banner += t('and');
			}
			banner += ' ';
			banner += t('to-owners');
		} else if ( notOwner ) {
			if ( bool ) {
				banner += ' ';
				banner += t('and');
			}
			banner += ' ';
			banner += t('to-non-owners');
		}
		banner += '.';
		const alert = <Alert variant="info">
			{banner}
		</Alert>;
		return alert;
	}

	renderShowButton() {
		if ( isNull( this.props.banner ) ) {
			return null;
		}
		return ( <Button variant="secondary" size="small" onClick={() => {
			this.setState({
				bypassTimeCheck: !this.state.bypassTimeCheck
			});
		}} style={{ float: 'right' }} >
			<i className="fas fa-clock"></i> {this.props.t('toggle-hidden-content')}
		</Button> );
	}

	renderChildren( authenticated, isOwner ) {
		const timeActive = authenticated && this.isTimeActive();
		return (
			<Fragment>
				{!authenticated || !timeActive ? this.renderBanner() : null}
				{isOwner && !timeActive ? this.renderShowButton() : null}
				<div
					className="gate outer-element"
					style={{
						display: authenticated && ( timeActive || this.state.bypassTimeCheck ) ? 'inline' : 'none'
					}}
				>
					{this.props.children}
				</div>
			</Fragment>
		);
	}

	render() {
		const session = this.context;
		return ( <RoleContext.Consumer>
			{ currentRole => {
				const { disabled, user, notUser, enrolled, notEnrolled, owner, notOwner } = this.props;
				const isEnrolled = this.state.isEnrolled || currentRole === 'enrolled';
				const isOwner = this.state.isOwner || currentRole === 'owner';
				const isUser = ( session && !session.anonymous ) || currentRole !== 'anonymous';
				let authenticated = false;
				if (
					disabled ||
					!this.state.validCheck ||
					( notUser && isUser ) ||
					( notOwner && isOwner ) ||
					( notEnrolled && isEnrolled )
				) {
					return this.renderChildren( false );
				}
				if ( user && isUser ) {
					authenticated = true;
				}
				else if ( enrolled && isEnrolled ) {
					authenticated = true;
				}
				else if (
					owner && isOwner &&
					(
						this.props.showOwnerInPresentationMode ||
						!this.state.presentationMode
					)
				) {
					authenticated = true;
				}
				else if ( !user && !owner && !enrolled ) {
					authenticated = true;
				}
				return this.renderChildren( authenticated, isOwner );
			}}
		</RoleContext.Consumer> );
	}
}


// PROPERTIES //

Gate.defaultProps = {
	user: false,
	notUser: false,
	enrolled: false,
	notEnrolled: false,
	owner: false,
	notOwner: false,
	after: null,
	until: null,
	banner: void 0,
	disabled: false,
	showOwnerInPresentationMode: true,
	check: null
};

Gate.propTypes = {
	user: PropTypes.bool,
	notUser: PropTypes.bool,
	enrolled: PropTypes.bool,
	notEnrolled: PropTypes.bool,
	owner: PropTypes.bool,
	notOwner: PropTypes.bool,
	after: PropTypes.instanceOf( Date ),
	until: PropTypes.instanceOf( Date ),
	banner: PropTypes.node,
	disabled: PropTypes.bool,
	showOwnerInPresentationMode: PropTypes.bool,
	check: PropTypes.func
};

Gate.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'gate' )( Gate );
