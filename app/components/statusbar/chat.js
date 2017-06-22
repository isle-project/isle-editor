// MODULES //

import React, { Component } from 'react';
import { FormGroup, InputGroup } from 'react-bootstrap';
import $ from 'jquery';
import TextArea from 'components/text-area';
import PropTypes from 'prop-types';
const debug = require( 'debug' )( 'isle-editor' );	


// MAIN //

class Chat extends Component {

	constructor( props ) {
		super( props );

		this.state = {
			opened: true,
			value: ''
		};

	}

	componentDidMount() {
		const { session } = this.context;
		this.unsubscribe = session.subscribe( () => {
			this.forceUpdate();
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
			value
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
			opened: !this.state.opened
		});
	}

	render() {
		const { chat, left, width } = this.props;
		return (
			<div style={{ 
				position: 'absolute',
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
					<span className="chatexit" onClick={this.closeChat}>X</span>
				</div>
				<div 
					style={{
						backgroundColor: 'white',
						top: '16px',
						borderLeft: 'solid 1px darkgrey',
						borderBottom: 'solid 1px darkgrey',
						borderRight: 'solid 1px darkgrey',
						height: '250px',
						display: this.state.opened ? 'block' : 'none'
					}}
				>
					<div 					
						ref={ ( chatbody ) => { this.chatbody = chatbody; }}
						style={{ marginTop: '16px', height: 196, overflowY: 'scroll', paddingLeft: '3px', paddingRight: '3px', paddingTop: '3px' }}
					>
						{chat.messages.map( ( msg, idx ) => <div className="chatmessage" key={idx}>
							<span className="chattime">{msg.time}</span> - <span className="chatuser">{msg.user}:&nbsp;</span>
							<span>{msg.content}</span>
							<hr style={{ marginTop: 3, marginBottom: 3 }}/>
						</div> )}
					</div>
					<FormGroup>
						<InputGroup>
							<TextArea rows={2} onChange={this.changedText} defaultValue={this.state.value} />
							<InputGroup.Addon className="sendbutton" onClick={this.sendMessage}>Send</InputGroup.Addon>
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
