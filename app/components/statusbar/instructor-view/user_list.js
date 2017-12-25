// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


// MAIN //

class UserList extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { session } = this.props;
		return (
			<ListGroup style={{ overflowY: 'scroll', height: window.innerHeight / 2, marginLeft: 0, fontSize: 15, fontFamily: 'Open Sans' }}>
				{session.userList.map( ( user, idx ) => {
					return ( <ListGroupItem key={idx} style={{ background: user.inactive ? 'lightgrey' : 'transparent' }}>
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
