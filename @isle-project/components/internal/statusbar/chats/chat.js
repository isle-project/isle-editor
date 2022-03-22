// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import { withTranslation } from 'react-i18next';
import markdownit from 'markdown-it';
import replace from '@stdlib/string/replace';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Popover from 'react-bootstrap/Popover';
import PopoverHeader from 'react-bootstrap/PopoverHeader';
import PopoverBody from 'react-bootstrap/PopoverBody';
import Button from 'react-bootstrap/Button';
import noop from '@stdlib/utils/noop';
import Draggable from '@isle-project/components/draggable';
import Tooltip from '@isle-project/components/tooltip';
import Gate from '@isle-project/components/gate';
import OverlayTrigger from '@isle-project/components/overlay-trigger';
import scrollTo from '@isle-project/utils/scroll-to';
import isElectron from '@isle-project/utils/is-electron';
import SessionContext from '@isle-project/session/context.js';
import { CHAT_MESSAGE, MARK_MESSAGES, MEMBER_HAS_JOINED_CHAT, MEMBER_HAS_LEFT_CHAT } from '@isle-project/constants/events.js';
import EditorView from '@isle-project/components/text-editor/view.js';
import { marks, wraps, insert } from '@isle-project/components/text-editor/config/menu.js';
import '@isle-project/components/text-editor/editor.css';
import renderTime from '@isle-project/utils/render-time';
import './chat.css';


// VARIABLES //

const debug = logger( 'isle:statusbar:chat' );
const md = markdownit({
	html: false,
	xhtmlOut: true,
	breaks: false,
	typographer: false
});
const ESC = '(Esc)';


// MAIN //

class Chat extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			opened: true,
			hasNews: false,
			maximized: false,
			defaultValue: '',
			docId: 0
		};
	}

	componentDidMount() {
		debug( 'Component has mounted. Subscribe to session: ' );
		const session = this.context;
		this.unsubscribe = session.subscribe( ( type ) => {
			if (
				type === CHAT_MESSAGE ||
				type === MEMBER_HAS_JOINED_CHAT ||
				type === MEMBER_HAS_LEFT_CHAT
			) {
				this.setState({
					hasNews: true
				});
			}
			else if ( type === MARK_MESSAGES ) {
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
	};

	sendMessage = ( event, anonymously = false ) => {
		let text = this.editorView.markdown;
		if ( text.length === 0 ) {
			return;
		}
		text = replace( text, '\\\n', '\n' );
		const session = this.context;
		session.sendChatMessage( this.props.chat.name, text, anonymously );
		scrollTo( this.chatbody, this.chatbody.scrollHeight, 1000 );

		this.setState({
			defaultValue: '',
			docId: this.state.docId + 1
		});
	};

	sendAnonymousChatMessage = ( event ) => {
		this.sendMessage( event, true );
	};

	handleEditorStateChange = () => {
		if ( this.state.hasNews ) {
			this.setState({
				hasNews: false
			});
		}
	};

	insertText = ( text ) => {
		text = this.editorView.markdown + ' ' + text;
		this.setState({
			defaultValue: text
		});
	};

	closeChat = () => {
		const session = this.context;
		session.leaveChat( this.props.chat.name );
	};

	onMouseOver = () => {
		if ( !this.state.opened ) {
			this.chat.style.opacity = this.state.opened ? 0.7 : 1.0;
		}
	};

	onMouseOut = () => {
		if ( !this.state.opened ) {
			this.chat.style.opacity = this.state.opened ? 1.0 : 0.7;
		}
	};

	toggleMaximize = () => {
		const newState = {
			maximized: !this.state.maximized
		};
		if ( newState.maximized && !this.state.opened ) {
			newState.opened = true;
		}
		this.setState( newState );
	};

	toggleChat = () => {
		this.setState({
			opened: !this.state.opened,
			hasNews: false
		});
	};

	renderMembers() {
		const { chat } = this.props;
		const userlistPopover = <Popover id="userlistPopover" >
			<PopoverHeader>{this.props.t( 'chat-members', { name: chat.name })}</PopoverHeader>
			<PopoverBody>
				<ListGroup>
					{chat.members.map( ( member, idx ) => {
						return <ListGroupItem style={{ padding: '3px 3px' }} key={idx}>{member.name}</ListGroupItem>;
					})}
				</ListGroup>
			</PopoverBody>
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
		const session = this.context;
		return (
			<div
				className="chat-body-outer"
				style={{
					display: this.state.opened ? 'block' : 'none'
				}}
			>
				<div
					className="chat-body cancel"
					ref={( chatbody ) => { this.chatbody = chatbody; }}
					onScroll={this.onScroll}
					style={{
						height: this.state.maximized ? 'calc(85vh - 150px)' : '150px'
					}}
				>
					{chat.messages.map( ( msg, idx ) => {
						const node = {
							'__html': md.renderInline( msg.content )
						};
						/* eslint-disable react/no-danger */
						return (
							<div className={msg.unread ? 'chat-message unread' : 'chat-message'} key={idx} >
								<img
									className="chat-picture unselectable"
									src={session.server + '/thumbnail/' + ( msg.picture && !msg.anonymous ? msg.picture : 'anonymous.jpg' )}
									alt={this.props.t( 'profile-pic' )}
								/>
								<div className="chat-message-right" >
									<span className="chat-user">
										{!msg.anonymous ? msg.user :
										<Fragment>
											<span style={{ marginRight: 4 }}>{this.props.t( 'anonymous' )}</span>
											<Gate owner banner={null} >
												<Tooltip tooltip={msg.user} placement="right" >
													<i className="fas fa-user-secret"></i>
												</Tooltip>
											</Gate>
										</Fragment>}
									</span>
									{' - '}
									<span className="chat-time">{renderTime( msg.time )}</span>
									<br />
									<span className="chat-message-content" dangerouslySetInnerHTML={node} ></span>
								</div>
							</div>
						);
						/* eslint-enable react/no-danger */
					})}
				</div>
				<EditorView
					className="chat-textarea cancel"
					onEditorState={this.handleEditorStateChange}
					showStatusBar={false}
					showColorPicker={false}
					defaultValue={this.state.defaultValue}
					docId={this.state.docId}
					menu={{
						marks,
						wraps,
						insert: [
							insert[ 0 ],
							insert[ 1 ],
							insert[ 5 ]
						]
					}}
					ref={( div ) => {
						this.editorView = div;
					}}
					onKeyDown={( _, event ) => {
						event.stopPropagation();
						if ( event.key === 'Enter' && !event.shiftKey ) {
							event.preventDefault();
							this.sendMessage();
						}
					}}
					t={this.props.t}
				/>
				<Button
					size="sm" variant="light"
					onClick={this.sendMessage}
					style={{ float: 'left' }}
				>{this.props.t( 'send-message' )}</Button>
				{this.props.chat.anonymousSubmissions ? <Button
					size="sm" variant="light"
					onClick={this.sendAnonymousChatMessage}
					style={{ float: 'left', marginLeft: '4px' }}
				>{this.props.t( 'send-anonymously' )}</Button> : null}
			</div>
		);
	}

	render() {
		let { chat, left, width } = this.props;
		const style = {
			position: isElectron ? 'absolute' : 'fixed',
			left
		};
		if ( this.state.maximized && this.state.opened ) {
			style.width = '40vw';
		} else {
			style.width = width;
		}
		style.minWidth = '275px';
		const ident = 'chat_' + chat.name;
		return (
			<Draggable cancel=".cancel" onEscape={this.props.chat.canLeave ? this.closeChat : noop} >
				<div
					id={ident}
					className="chat-outer-div"
					style={style}
					ref={( chat ) => { this.chat = chat; }}
				>
					<div
						className="chat-div"
						style={{
							opacity: this.state.opened ? 1.0 : 0.7
						}}
						onMouseOver={this.onMouseOver}
						onFocus={this.onMouseOver}
						onMouseOut={this.onMouseOut}
						onBlur={this.onMouseOut}
						tabIndex={0} role="button"
					>
						<span className="chat-name">{chat.name}</span>
						<span className="chat-presence" style={{
							display: this.state.hasNews ? 'inline' : 'none'
						}} />
						{ chat.canLeave ? <Tooltip tooltip={`${this.props.t( 'close' )} ${ESC}`} placement="bottom" >
							<button
								className="chat-header-button" onClick={this.closeChat}
								aria-label={`${this.props.t( 'close' )} (Esc)`}
							>
								<i className="fas fa-times"></i>
							</button>
						</Tooltip> : null }
						<Tooltip tooltip={this.state.maximized ? this.props.t( 'shrink' ) : this.props.t( 'enlarge' )} placement="bottom" >
							<button
								className="chat-header-button" onClick={this.toggleMaximize}
								aria-label={this.state.maximized ? this.props.t( 'shrink' ) : this.props.t( 'enlarge' )}
							>
								<i className="far fa-window-maximize" ></i>
							</button>
						</Tooltip>
						<Tooltip tooltip={this.state.opened ? this.props.t( 'minimize' ) : this.props.t( 'maximize' )} placement="left" >
							<button
								className="chat-header-button" onClick={this.toggleChat}
								aria-label={this.state.opened ? this.props.t( 'minimize' ) : this.props.t( 'maximize' )}
							>
								<i className="far fa-window-minimize"></i>
							</button>
						</Tooltip>
					</div>
					{this.renderMembers()}
					{this.renderChatBody()}
				</div>
			</Draggable>
		);
	}
}


// PROPERTIES //

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

export default withTranslation( 'internal/statusbar' )( Chat );
