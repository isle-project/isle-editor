// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';


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
		const { user, enrolled, owner } = this.props;
		console.log( this.state )
		let authenticated = false;
		if ( user && !session.anonymous ) {
			authenticated = true;
		}
		if ( enrolled && this.state.isEnrolled ) {
			authenticated = true;
		}
		if ( owner && this.state.isOwner ) {
			authenticated = true;
		}
		if ( authenticated ) {
			return this.props.children;
		}
		else {
			return null;
		}
	}

	componentDidMount() {
		const { session } = this.context;
		this.unsubscribe = session.subscribe( () => {
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
			this.forceUpdate();
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

}


// DEFAULT PROPERTIES //

Gate.defaultProps = {
	user: false,
	enrolled: false,
	owner: false
};


// TYPES //

Gate.contextTypes = {
	session: PropTypes.object
};



// EXPORTS //

export default Gate;