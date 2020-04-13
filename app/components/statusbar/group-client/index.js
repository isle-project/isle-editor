// MODULES /

import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Panel from 'components/panel';
import Draggable from 'components/draggable';
import VideoChatButton from 'components/video-chat-button';
import SessionContext from 'session/context.js';
import { CREATED_GROUPS, DELETED_GROUPS } from 'constants/events.js';
import './group_client.css';


// MAIN //

class GroupClient extends Component {
	constructor( props ) {
		super( props );
	}

	componentDidMount() {
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type, data ) => {
			if ( type === CREATED_GROUPS ) {
				session.joinChat({
					name: data.name,
					canLeave: false
				});
				this.forceUpdate();
			}
			else if ( type === DELETED_GROUPS ) {
				this.forceUpdate();
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	renderMembers() {
		const session = this.context;
		const members = session.group.members;
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
		const session = this.context;
		if ( !session.group) {
			return null;
		}
		return (
			<Draggable>
				<Panel
					minimizable
					header={<span>
						<span className="fa fa-xs fa-user-friends" style={{ marginRight: 5 }} />
						<span className="group-name">Group {session.group.name}</span>
					</span>}
					className="group-client-panel"
				>
					{this.renderMembers()}
					<VideoChatButton for={session.group.name} />
				</Panel>
			</Draggable>
		);
	}
}


// PROPERTIES //

GroupClient.contextType = SessionContext;


// EXPORTS //

export default GroupClient;
