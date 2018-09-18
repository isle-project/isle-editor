// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';


// VARIABLES //

const debug = logger( 'isle:statusbar:instructor-view' );


// MAIN //

class UserList extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		const { session } = this.props;
		this.unsubscribe = session.subscribe( ( type ) => {
			if (
				type === 'received_users' ||
				type === 'user_joined' ||
				type === 'user_left'
			) {
				debug( 'Should render the user list...' );
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		const { session } = this.props;
		return (
			<ListGroup style={{ overflowY: 'scroll', height: window.innerHeight / 2, marginLeft: 0, fontSize: 15, fontFamily: 'Open Sans' }}>
				{session.userList.map( ( user, idx ) => {
					const color = user.owner ? '#3c763d' : 'black';
					return ( <ListGroupItem key={idx} style={{ background: user.inactive ? 'lightgrey' : 'transparent', color: color }}>
						{user.name} ({user.email}) | {user.joinTime} - {user.exitTime}
					</ListGroupItem> );
				})}
			</ListGroup>
		);
	}
}


// TYPES //

UserList.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default UserList;
