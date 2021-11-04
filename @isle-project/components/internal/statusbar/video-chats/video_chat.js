// MODULES //

import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Tooltip from '@isle-project/components/tooltip';
import Button from 'react-bootstrap/Button';
import max from '@stdlib/math/base/special/max';
import Draggable from '@isle-project/components/draggable/main';
import Panel from '@isle-project/components/panel';
import SessionContext from '@isle-project/session/context.js';
import './video_chat.css';


// VARIABLES //

const INTERFACE_CONFIG = {
	DEFAULT_BACKGROUND: '#fffff8',
	DISABLE_VIDEO_BACKGROUND: true,
	SHOW_JITSI_WATERMARK: false,
	SHOW_WATERMARK_FOR_GUESTS: false,
	INVITATION_POWERED_BY: false,
	DEFAULT_REMOTE_DISPLAY_NAME: 'Anonymous',
	DISPLAY_WELCOME_PAGE_CONTENT: false,
	TOOLBAR_BUTTONS: [
		'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
		'fodeviceselection', 'info', 'profile', 'settings',
		'videoquality', 'filmstrip', 'shortcuts',
		'tileview', 'download', 'help'
	],
	SETTINGS_SECTIONS: [ 'devices', 'language' ],
	MOBILE_APP_PROMO: true,
	HIDE_KICK_BUTTON_FOR_GUESTS: true,
	SHOW_CHROME_EXTENSION_BANNER: false
};


// MAIN //

class VideoChat extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			minimized: false,
			screensharing: false
		};
	}

	componentDidMount() {
		const session = this.context;
		const isOwner = session.isOwner();
		if ( isOwner ) {
			if ( !INTERFACE_CONFIG.TOOLBAR_BUTTONS.includes( 'mute-everyone' ) ) {
				INTERFACE_CONFIG.TOOLBAR_BUTTONS.push( 'mute-everyone' );
			}
			if ( !INTERFACE_CONFIG.TOOLBAR_BUTTONS.includes( 'recording' ) ) {
				INTERFACE_CONFIG.TOOLBAR_BUTTONS.push( 'recording' );
			}
			if ( !INTERFACE_CONFIG.TOOLBAR_BUTTONS.includes( 'livestreaming' ) ) {
				INTERFACE_CONFIG.TOOLBAR_BUTTONS.push( 'livestreaming' );
			}
			if ( !INTERFACE_CONFIG.TOOLBAR_BUTTONS.includes( 'invite' ) ) {
				INTERFACE_CONFIG.TOOLBAR_BUTTONS.push( 'invite' );
			}
			if ( !INTERFACE_CONFIG.SETTINGS_SECTIONS.includes( 'moderator' ) ) {
				INTERFACE_CONFIG.SETTINGS_SECTIONS.push( 'moderator' );
			}
			if ( !INTERFACE_CONFIG.TOOLBAR_BUTTONS.includes( 'sharedvideo' ) ) {
				INTERFACE_CONFIG.TOOLBAR_BUTTONS.push( 'sharedvideo' );
			}
		} else if ( !INTERFACE_CONFIG.TOOLBAR_BUTTONS.includes( 'raisehand' ) ) {
			// Case: User is not an owner
			INTERFACE_CONFIG.TOOLBAR_BUTTONS.push( 'raisehand' );
		}
	}

	initialize() {
		const session = this.context;
		const options = {
			roomName: this.props.roomName,
			width: '100%',
			height: '100%',
			parentNode: this.videoChatContainer,
			userInfo: {
				email: session.user.email
			},
			interfaceConfigOverwrite: INTERFACE_CONFIG,
			noSSL: false,
			jwt: session.jitsi.token
		};
		this.api = new window.JitsiMeetExternalAPI( session.jitsi.server, options );
		this.api.executeCommand( 'displayName', session.user.name );
		this.api.executeCommand( 'subject', this.props.roomSubject );
		this.api.executeCommand( 'avatarUrl', session.user.picture );

		this.api.addEventListener( 'screenSharingStatusChanged', ( status ) => {
			this.setState({
				screensharing: status.on,
				minimized: status.on
			}, () => {
				if ( this.state.minimized ) {
					this.rnd.updateSize({ width: 160, height: 100 });
				} else {
					this.rnd.updateSize({
						width: max( 0.3 * window.innerWidth, 400 ),
						height: max( 0.3 * window.innerHeight, 400 )
					});
				}
			});
		});
	}

	handleClose = ( event ) => {
		const session = this.context;
		if ( session.isOwner() ) {
			this.api.executeCommand( 'hangup' );
		}
		session.leaveVideoChat( this.props.roomName );
	};

	handleCompress = ( event ) => {
		this.setState({
			minimized: !this.state.minimized
		}, () => {
			if ( this.state.minimized ) {
				this.rnd.updateSize({ width: 160, height: 100 });
			} else {
				this.rnd.updateSize({
					width: max( 0.3 * window.innerWidth, 400 ),
					height: max( 0.3 * window.innerHeight, 400 )
				});
			}
		});
	};

	stopScreenSharing = ( event ) => {
		this.api.executeCommand( 'toggleShareScreen' );
	};

	render() {
		let style;
		let containerStyle;
		if ( this.state.minimized ) {
			containerStyle = {
				display: 'none'
			};
		} else {
			style = {
				height: '100%',
				width: '100%'
			};
			containerStyle = {
				height: '100%',
				width: '100%'
			};
		}
		const panel = <Panel className="video-chat-panel" style={style} >
			<div
				className="video-chat-iframe"
				ref={( div ) => {
					if ( !this.videoChatContainer ) {
						this.videoChatContainer = div;
						this.initialize();
					}
				}}
				style={containerStyle}
			></div>
			{this.state.minimized ? <h3 style={{ marginTop: 22 }}>
				{this.state.screensharing ? <span>
					{this.props.t( 'sharing-screen' )} <Button onClick={this.stopScreenSharing} variant="secondary" size="sm">
						{this.props.t( 'stop-sharing' )}
					</Button>
				</span> : this.props.t( 'video-active' )}
			</h3> : null}
			<Tooltip tooltip={this.state.minimized ? this.props.t( 'maximize') : this.props.t( 'minimize' )} >
				<Button
					size="sm"
					onClick={this.handleCompress}
					className="video-chat-minimized-button"
				>
					<i className={this.state.minimized ? 'far fa-window-maximize' : 'fas fa-window-minimize'} ></i>
				</Button>
			</Tooltip>
			<Tooltip tooltip={this.props.t( 'leave-video' )} >
				<Button
					size="sm"
					onClick={this.handleClose}
					className="video-chat-button"
				>
					<i className="fas fa-video-slash"></i>
				</Button>
			</Tooltip>
		</Panel>;
		return (
			<Draggable default={{
				width: max( 0.3 * window.innerWidth, 400 ),
				height: max( 0.3 * window.innerHeight, 400 )
			}} ref={( div ) => { this.rnd = div; }} minWidth={160} minHeight={100}
				resizable={!this.state.minimized} lockAspectRatio
				cancel=".video-chat-iframe"
			>
				{panel}
			</Draggable>
		);
	}
}


// PROPERTIES //

VideoChat.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'internal/statusbar' )( VideoChat );
