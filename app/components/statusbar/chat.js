// MODULES //

import React, { Component } from 'react';
import { FormGroup, InputGroup, ListGroup, ListGroupItem, OverlayTrigger, Popover } from 'react-bootstrap';
import $ from 'jquery';
import TextArea from 'components/text-area';
import PropTypes from 'prop-types';
import isElectron from 'utils/is-electron';
const debug = require( 'debug' )( 'isle-editor' );


// MAIN //

class Chat extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			opened: true,
			value: '',
			hasNews: false
		};

		this.onScroll = () => {
			const $chatbody = $( this.chatbody );
			if ( $chatbody.scrollTop() + $chatbody.innerHeight() >= $chatbody[ 0 ].scrollHeight ) {
				const { session } = this.context;
				session.markChatMessagesAsRead( this.props.chat.name );
			}
		};

	}

	componentDidMount() {
		const { session } = this.context;
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
			if ( type === 'mark_messages' ) {
				this.setState({
					hasNews: false
				});
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	sendMessage = () => {
		const { session } = this.context;
		session.sendChatMessage( this.props.chat.name, this.state.value );

		const $chatbody = $( this.chatbody );
		$chatbody.animate({
			scrollTop: $chatbody.prop( 'scrollHeight' )
		}, 1000 );

		this.setState({
			value: ''
		});
	}

	changedText = ( value ) => {
		this.setState({
			value,
			hasNews: false
		});
	}

	closeChat = () => {
		const { session } = this.context;
		session.leaveChat( this.props.chat.name );
	}

	onMouseOver() {
		if ( !this.opened ) {
			$( this.chat ).css( 'opacity', this.state.opened ? 0.7 : 1.0 );
		}
	}

	onMouseOut() {
		if ( !this.opened ) {
			$( this.chat ).css( 'opacity', this.state.opened ? 1.0 : 0.7 );
		}
	}

	toggleChat() {
		this.setState({
			opened: !this.state.opened,
			hasNews: false
		});
	}

	render() {
		const { chat, left, width } = this.props;

		const userlistPopover = <Popover id="userlistPopover" title={`Members of ${chat.name} chat:`}>
			<ListGroup>
				{chat.members.map( ( member, idx  ) => {
					return <ListGroupItem style={{ padding: '3px 3px' }} key={idx}>{member.name}</ListGroupItem>;
				})}
			</ListGroup>
		</Popover>;

		return (
			<div style={{
				position: isElectron ? 'absolute' : 'fixed',
				top: 0,
				zIndex: 5,
				fontSize: '12px',
				fontFamily: 'monospace',
				left: left,
				width: width,
				boxShadow: '1px 1px darkgrey'
			}}>
				<div
					style={{
						position: 'absolute',
						height: '16px',
						width: '100%',
						top: 0,
						backgroundColor: 'rgb(232, 232, 232)',
						borderLeft: 'solid 1px darkgrey',
						borderBottom: 'solid 1px darkgrey',
						borderRight: 'solid 1px darkgrey',
						paddingLeft: '5px',
						cursor: 'pointer',
						opacity: this.state.opened ? 1.0 : 0.7,
					}}
					ref={ ( chat ) => { this.chat = chat; }}
					onMouseOver={this.onMouseOver.bind( this )}
					onMouseOut={this.onMouseOut.bind( this )}
					onClick={this.toggleChat.bind( this )}
				>{chat.name}
					<span className="presence" style={{
						width: '10px',
						marginLeft: '6px',
						height: '10px',
						bottom: '4px',
						backgroundColor: 'darkorange',
						position: 'absolute',
						borderRadius: '50%',
						boxShadow: '0px 0px 3px darkgrey',
						display: this.state.hasNews ? 'inline' : 'none'
					}} />
					<span className="chatexit" onClick={this.closeChat}>X</span>
				</div>
				<OverlayTrigger trigger={["hover","focus"]} placement="right" overlay={userlistPopover}>
					<div
						style={{
							position: 'relative',
							height: '16px',
							marginTop: '16px',
							width: '100%',
							backgroundColor: 'whitesmoke',
							borderLeft: 'solid 1px darkgrey',
							borderBottom: 'solid 1px darkgrey',
							borderRight: 'solid 1px darkgrey',
							paddingLeft: '5px',
							overflow: 'hidden',
							display: this.state.opened ? 'block' : 'none'
						}}
					>
						{chat.members.map( ( member, idx  ) => {
							return <span key={idx}>{member.name}{ idx !== chat.members.length-1 ? ', ' : null }</span>;
						})}
					</div>
				</OverlayTrigger>
				<div
					style={{
						backgroundColor: 'white',
						top: '32px',
						borderLeft: 'solid 1px darkgrey',
						borderBottom: 'solid 1px darkgrey',
						borderRight: 'solid 1px darkgrey',
						height: '250px',
						display: this.state.opened ? 'block' : 'none'
					}}
				>
					<div
						ref={ ( chatbody ) => { this.chatbody = chatbody; }}
						style={{
							height: 196,
							overflowY: 'scroll',
							paddingLeft: '3px',
							paddingRight: '3px',
							paddingTop: '3px'
						}}
						onScroll={this.onScroll}
					>
						{chat.messages.map( ( msg, idx ) => <div className={ msg.unread ? 'chatmessage unread' : 'chatmessage'} key={idx}>
							<span className="chattime">{msg.time}</span> - <span className="chatuser">{msg.user}:&nbsp;</span>
							<span>{msg.content}</span>
							<hr style={{ marginTop: 3, marginBottom: 3 }}/>
						</div> )}
					</div>
					<FormGroup>
						<InputGroup>
							<TextArea rows={2} onChange={this.changedText} defaultValue={this.state.value} />
							{ this.state.value === '' ?
								<InputGroup.Addon
									className="sendbutton"
								>Send</InputGroup.Addon> :
								<InputGroup.Addon
									className="sendbutton"
									onClick={this.sendMessage}
								>Send</InputGroup.Addon>
							}
						</InputGroup>
					</FormGroup>
				</div>
			</div>
		);
	}
}


// TYPES //

Chat.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Chat;
