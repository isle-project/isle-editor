// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SessionContext from 'session/context.js';
import RoleContext from 'session/role_context.js';


// MAIN //

/**
* An ISLE component that allows to display its children only to reserved audiences.
*
* @property {boolean} user - when set the gated content is displayed to subscribed users
* @property {boolean} notUser - when set the gated content is **not** displayed to subscribed users
* @property {boolean} enrolled - when set the gated content is displayed to the students enrolled in the course
* @property {boolean} notEnrolled - when set the gated content is **not** displayed to the students enrolled in the course
* @property {boolean} owner - when set the gated content is displayed to the owner of the course (usually the instructor)
* @property {boolean} notOwner - when set the gated content is **not** displayed to the owner of the course (usually the instructor)
* @property {Node} banner - a message which is visible to the visitors lacking the gate privilege
* @property {boolean} disabled - if a gate is disabled, the banner will be displayed no matter what
* @property {Function} check - callback function returning a `boolean` indicating whether gate should display child components; the function is invoked whenever session actions arrive
*/
class Gate extends Component {
	constructor( props, context ) {
		super( props );

		this.state = {
			isEnrolled: false,
			isOwner: false,
			validCheck: props.check ? props.check( context ) : true
		};
	}

	componentDidMount() {
		this._isMounted = true;
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type, action ) => {
				if (
					type === 'RECEIVED_USER_RIGHTS' ||
					type === 'LOGGED_IN' ||
					type === 'LOGGED_OUT' ||
					type === 'TOGGLE_PRESENTATION_MODE'
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

	render() {
		const session = this.context;
		return ( <RoleContext.Consumer>
			{ currentRole => {
				const { disabled, user, notUser, enrolled, notEnrolled, owner, notOwner } = this.props;
				const isEnrolled = this.state.isEnrolled || currentRole === 'enrolled';
				const isOwner = this.state.isOwner || currentRole === 'owner';
				const isUser = ( session && !session.anonymous ) || currentRole;
				let authenticated = false;
				if ( !currentRole ) {
					currentRole = 'anonymous';
				}
				if (
					disabled || !this.state.validCheck ||
					notUser && isUser ||
					notOwner && isOwner ||
					notEnrolled && isEnrolled
				) {
					return this.props.banner;
				}
				if ( user && isUser ) {
					authenticated = true;
				}
				else if ( enrolled && isEnrolled ) {
					authenticated = true;
				}
				else if ( owner && !this.state.presentationMode && isOwner ) {
					authenticated = true;
				}
				else if ( !user && !owner && !enrolled ) {
					authenticated = true;
				}
				if ( authenticated ) {
					return <Fragment>{this.props.children}</Fragment>;
				}
				return this.props.banner;
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
	banner: null,
	disabled: false,
	check: null
};

Gate.propTypes = {
	user: PropTypes.bool,
	notUser: PropTypes.bool,
	enrolled: PropTypes.bool,
	notEnrolled: PropTypes.bool,
	owner: PropTypes.bool,
	notOwner: PropTypes.bool,
	banner: PropTypes.node,
	disabled: PropTypes.bool,
	check: PropTypes.func
};

Gate.contextType = SessionContext;


// EXPORTS //

export default Gate;
