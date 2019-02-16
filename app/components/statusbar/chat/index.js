// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import FormControl from 'react-bootstrap/FormControl';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';
import noop from '@stdlib/utils/noop';
import OverlayTrigger from 'components/overlay-trigger';
import scrollTo from 'utils/scroll-to';
import isElectron from 'utils/is-electron';
import SessionContext from 'session/context.js';
import renderTime from './render_time.js';
import './chat.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:chat' );


// MAIN //

class Chat extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			opened: true,
			value: '',
			hasNews: false
		};
	}

	componentDidMount() {
		debug( 'Component has mounted. Subscribe to session: ' );
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if (
				type === 'chat_message' ||
				type === 'member_has_joined_chat' ||
				type === 'member_has_left_chat'
			) {
				this.setState({
					hasNews: true
				});
			}
			else if ( type === 'mark_messages' ) {
				this.setState({
					hasNews: false
				});
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	onScroll = () => {
		if (
			this.chatbody.scrollTop + this.chatbody.clientHeight >= this.chatbody.scrollHeight
		) {
			const session = this.context;
			session.markChatMessagesAsRead( this.props.chat.name );
		}
	}

	sendMessage = () => {
		const session = this.context;
		session.sendChatMessage( this.props.chat.name, this.state.value );
		scrollTo( this.chatbody, this.chatbody.scrollHeight, 1000 );

		this.setState({
			value: ''
		});
	}

	changedText = ( event ) => {
		this.setState({
			value: event.target.value,
			hasNews: false
		});
	}

	closeChat = () => {
		const session = this.context;
		session.leaveChat( this.props.chat.name );
	}

	onMouseOver = () => {
		if ( !this.state.opened ) {
			this.chat.style.opacity = this.state.opened ? 0.7 : 1.0;
		}
	}

	onMouseOut = () => {
		if ( !this.state.opened ) {
			this.chat.style.opacity = this.state.opened ? 1.0 : 0.7;
		}
	}

	toggleChat = () => {
		this.setState({
			opened: !this.state.opened,
			hasNews: false
		});
	}

	renderMembers() {
		const { chat } = this.props;
		const userlistPopover = <Popover id="userlistPopover" title={`Members of ${chat.name} chat:`}>
			<ListGroup>
				{chat.members.map( ( member, idx ) => {
					return <ListGroupItem style={{ padding: '3px 3px' }} key={idx}>{member.name}</ListGroupItem>;
				})}
			</ListGroup>
		</Popover>;
		return ( <OverlayTrigger trigger={[ 'hover', 'focus' ]} placement="bottom" overlay={userlistPopover}>
			<div
				className="chat-members"
				style={{
					display: this.state.opened ? 'block' : 'none'
				}}
			>
				{chat.members.map( ( member, idx ) => {
					return <span key={idx}>{member.name}{ idx !== chat.members.length-1 ? ', ' : null }</span>;
				})}
			</div>
		</OverlayTrigger> );
	}

	renderChatBody() {
		const { chat } = this.props;
		return (
			<div
				className="chat-body-outer"
				style={{
					display: this.state.opened ? 'block' : 'none'
				}}
			>
				<div
					className="chat-body"
					ref={( chatbody ) => { this.chatbody = chatbody; }}
					onScroll={this.onScroll}
				>
					{chat.messages.map( ( msg, idx ) => (<div className={msg.unread ? 'chatmessage unread' : 'chatmessage'} key={idx}>
						<span className="chattime">{renderTime( msg.time )}</span> - <span className="chatuser">{msg.user}:&nbsp;</span>
						<span className="chatmessage-content">{msg.content}</span>
						<hr style={{ marginTop: 3, marginBottom: 3 }} />
					</div>) )}
				</div>
				<FormControl
					as="textarea"
					className="chat-textarea" rows={2} onChange={this.changedText} value={this.state.value}
					placeholder="Type your message..."
				/>
				<Button
					className="center" size="sm" variant="secondary"
					style={{ marginTop: '4px', marginBottom: '4px' }}
					onClick={this.state.value === '' ? noop : this.sendMessage}
				>Send Message</Button>
			</div>
		);
	}

	render() {
		const { chat, left, width } = this.props;
		const ident = 'chat_' + chat.name;
		return (
			<div id={ident} className="chat-outer-div" style={{
				position: isElectron ? 'absolute' : 'fixed',
				left: left,
				width: width
			}}>
				<div
					className="chat-div"
					style={{
						opacity: this.state.opened ? 1.0 : 0.7
					}}
					ref={( chat ) => { this.chat = chat; }}
					onMouseOver={this.onMouseOver}
					onMouseOut={this.onMouseOut}
					onClick={this.toggleChat}
				>{chat.name}
					<span className="chat-presence" style={{
						display: this.state.hasNews ? 'inline' : 'none'
					}} />
					<span className="chatexit" onClick={this.closeChat}>X</span>
				</div>
				{this.renderMembers()}
				{this.renderChatBody()}
			</div>
		);
	}
}


// TYPES //

Chat.defaultProps = {
	left: 400,
	width: 600
};

Chat.propTypes = {
	chat: PropTypes.object.isRequired,
	left: PropTypes.number,
	width: PropTypes.number
};

Chat.contextType = SessionContext;


// EXPORTS //

export default Chat;
