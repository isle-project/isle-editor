// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import inElectron from 'utils/is-electron';


// MAIN //

class Gate extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			isEnrolled: false,
			isOwner: false
		};
	}

	render() {
		const { session } = this.context;
		const { anonymous, user, enrolled, owner } = this.props;
		let authenticated = false;
		if ( anonymous ) {
			authenticated = true;
		}
		if ( user && !session.anonymous ) {
			authenticated = true;
		}
		if ( enrolled && this.state.isEnrolled ) {
			authenticated = true;
		}
		if ( owner && this.state.isOwner ) {
			authenticated = true;
		}
		if ( inElectron ) {
			authenticated = true;
		}
		if ( authenticated ) {
			return <div>{this.props.children}</div>;
		}
		else {
			return null;
		}
	}

	checkAuthorization() {
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

	componentDidMount() {
		const { session } = this.context;
		this._isMounted = true;
		this.unsubscribe = session.subscribe( () => {
			this.checkAuthorization();
			if ( this._isMounted ) {
				this.forceUpdate();
			}
		});
		this.checkAuthorization();
	}

	componentWillUnmount() {
		this.unsubscribe();
		this._isMounted = false;
	}

}


// DEFAULT PROPERTIES //

Gate.defaultProps = {
	anonymous: false,
	user: false,
	enrolled: false,
	owner: false
};


// TYPES //

Gate.propTypes = {
	anonymous: PropTypes.bool,
	user: PropTypes.bool,
	enrolled: PropTypes.bool,
	owner: PropTypes.bool
};

Gate.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Gate;
