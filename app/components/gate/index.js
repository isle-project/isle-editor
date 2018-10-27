// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SessionContext from 'session/context.js';
import RoleContext from 'session/role_context.js';


// MAIN //

/**
* An ISLE component that allows to display its children only to reserved audiences.
*
* @property {boolean} anonymous - when set the gated content is displayed to anybody
* @property {boolean} user - when set the gated content is displayed to subscribed users
* @property {boolean} enrolled - when set the gated content is displayed to the students enrolled in the course
* @property {boolean} owner - when set the gated content is displayed to the owner of the course (usually the instructor)
* @property {Node} banner - a message which is visible to the visitors lacking the gate privilege
* @property {boolean} disabled - if a gate is disabled, the banner will be displayed no matter what
*/
class Gate extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isEnrolled: false,
			isOwner: false
		};
	}

	componentDidMount() {
		this._isMounted = true;
		const session = this.context;
		if ( session ) {
			this.unsubscribe = session.subscribe( ( type ) => {
				if ( type === 'RECEIVED_USER_RIGHTS' ) {
					this.checkAuthorization();
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
			isOwner: session.isOwner()
		};
		if (
			newState.isEnrolled !== this.state.isEnrolled ||
			newState.isOwner !== this.state.isOwner
		) {
			this.setState( newState );
		}
	}

	render() {
		const session = this.context;
		return ( <RoleContext.Consumer>
			{ currentRole => {
				const { anonymous, disabled, user, enrolled, owner } = this.props;
				let authenticated = false;
				if ( !currentRole ) {
					currentRole = 'anonymous';
				}
				if ( disabled ) {
					return this.props.banner;
				}
				if ( anonymous ) {
					authenticated = true;
				}
				else if ( user && ( currentRole !== 'anonymous' || ( session && !session.anonymous)) ) {
					authenticated = true;
				}
				else if ( enrolled && ( this.state.isEnrolled || currentRole === 'enrolled' ) ) {
					authenticated = true;
				}
				else if ( owner && ( this.state.isOwner || currentRole === 'owner' ) ) {
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
	anonymous: false,
	user: false,
	enrolled: false,
	owner: false,
	banner: null,
	disabled: false
};

Gate.propTypes = {
	anonymous: PropTypes.bool,
	user: PropTypes.bool,
	enrolled: PropTypes.bool,
	owner: PropTypes.bool,
	banner: PropTypes.node,
	disabled: PropTypes.bool
};

Gate.contextType = SessionContext;


// EXPORTS //

export default Gate;
