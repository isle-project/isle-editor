// MODULES //

import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


// MAIN //

class UserList extends Component {

	constructor( props ) {
		super( props );
	}

	render() {
		const { session } = this.props;
		return (
			<ListGroup style={{ overflowY: 'scroll', height: window.innerHeight / 2, marginLeft: 0, fontSize: 12, fontFamily: 'monospace' }}>
				{session.userList.map( ( user, idx ) => {
					return ( <ListGroupItem key={idx} style={{ background: user.inactive ? 'lightgrey' : 'transparent' }}>
						{user.name} ({user.email}) | {user.joinTime} - {user.exitTime}
					</ListGroupItem> );
				})}
			</ListGroup>
		);
	}
}


// EXPORTS //

export default UserList;
