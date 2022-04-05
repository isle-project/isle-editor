// MODULES /

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Panel from '@isle-project/components/panel';
import Draggable from '@isle-project/components/draggable';
import VideoChatButton from '@isle-project/components/internal/video-chat-button';
import Timer from '@isle-project/components/timer';
import SessionContext from '@isle-project/session/context.js';
import { CREATED_GROUPS, DELETED_GROUPS, MEMBER_ACTION } from '@isle-project/constants/events.js';
import { GROUP_MODE_END } from '@isle-project/constants/actions.js';
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
				this.forceUpdate();
			}
			else if ( type === DELETED_GROUPS ) {
				session.removeNotification( this.closeNotification );
				this.forceUpdate();
			}
			else if ( type === MEMBER_ACTION && data.type === GROUP_MODE_END ) {
				this.closeNotification = session.addNotification({
					title: this.props.t( 'groups-close-soon' ),
					message: this.props.t( 'groups-close-soon-message' ),
					level: 'info',
					position: 'tr',
					dismissible: 'none',
					autoDismiss: 0,
					children: <Timer style={{ position: 'relative' }} duration={60} active />
				});
			}
		});
	}

	componentWillUnmount() {
		if ( this.unsubscribe ) {
			this.unsubscribe();
		}
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
		if ( !session.group ) {
			return null;
		}
		return (
			<Draggable default={{ x: window.innerWidth - 280 }} >
				<Panel
					minimizable
					header={<span>
						<span className="fa fa-xs fa-user-friends" style={{ marginRight: 5 }} />
						<span className="group-name">{this.props.t( 'group' )} {session.group.name}</span>
					</span>}
					className="group-client-panel"
				>
					{this.renderMembers()}
					{this.props.video ? <VideoChatButton for={session.group.name} /> : null}
				</Panel>
			</Draggable>
		);
	}
}


// PROPERTIES //

GroupClient.contextType = SessionContext;

GroupClient.propTypes = {
	video: PropTypes.bool
};

GroupClient.defaultProps = {
	video: true
};


// EXPORTS //

export default withTranslation( 'internal/statusbar' )( GroupClient );
