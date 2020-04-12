// MODULES /

import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Panel from 'components/panel';
import VideoChatButton from 'components/video-chat-button';
import SessionContext from 'session/context.js';
import { CREATED_GROUPS, DELETED_GROUPS } from 'constants/events.js';
import './group_client.css';


// FUNCTIONS //

function retrieveUserGroup( groups, user ) {
	for ( let i = 0; i < groups.length; i++ ) {
		const group = groups[ i ];
		for ( let j = 0; j < group.members.length; j++ ) {
			if ( group.members[ j ].email === user.email ) {
				return group;
			}
		}
	}
}

// MAIN //

class GroupClient extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			group: null
		};
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, data ) => {
			if ( type === CREATED_GROUPS ) {
				const group = retrieveUserGroup( data, session.user );
				session.joinChat({
					name: group.name,
					canLeave: false
				});
				this.setState({
					group
				});
			}
			else if ( type === DELETED_GROUPS ) {
				this.closeChatForAll( this.state.group.name );
				this.setState({
					group: null
				});
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	renderMembers() {
		const session = this.context;
		const members = this.state.group.members;
		const size = 40;
		return (
			<ListGroup>
				{members.map( ( member, idx ) => {
					const picture = session.server + '/thumbnail/' + member.picture;
					return (
						<ListGroupItem className="group-client-list-item" key={idx}>
							<img
								className="group-client-user-picture" alt="User Profile"
								src={picture}
								height={`${size}px`} width={`${size}px`}
							/>
							<span>{member.name}</span>
						</ListGroupItem>
					);
				})}
			</ListGroup>
		);
	}

	render() {
		if ( !this.state.group) {
			return null;
		}
		return (
			<Panel
				minimizable
				header={<span>
					<span className="fa fa-xs fa-user-friends" style={{ marginRight: 5 }} />
					<span className="group-name">Group {this.state.group.name}</span>
				</span>}
				style={{
					position: 'fixed',
					top: 8,
					left: 8
				}}
			>
				{this.renderMembers()}
				<VideoChatButton for={this.state.group.name} />
			</Panel>
		);
	}
}


// PROPERTIES //

GroupClient.contextType = SessionContext;


// EXPORTS //

export default GroupClient;
