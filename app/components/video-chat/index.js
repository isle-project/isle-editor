// MODULES //

import React, { Component } from 'react';
import JitsiMeetExternalAPI from 'lib-jitsi-meet-dist/dist/external_api.min.js';
import Tooltip from 'components/tooltip';
import Button from 'react-bootstrap/Button';
import max from '@stdlib/math/base/special/max';
import Draggable from 'components/draggable';
import Panel from 'components/panel';
import { DOMAIN } from 'constants/jitsi.js';
import SessionContext from 'session/context.js';
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
		'fodeviceselection', 'profile', 'settings',
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
		const options = {
			roomName: this.props.roomName,
			width: max( 0.3 * window.innerWidth, 400 ),
			height: max( 0.3 * window.innerHeight, 400 ),
			parentNode: this.videoChatContainer,
			userInfo: {
				email: session.user.email
			},
			configOverwrite: {
				startWithVideoMuted: !isOwner,
				startWithAudioMuted: !isOwner
			},
			interfaceConfigOverwrite: INTERFACE_CONFIG,
			noSSL: false,
			jwt: session.jitsiToken
		};
		this.api = new JitsiMeetExternalAPI( DOMAIN, options );
		this.api.executeCommand( 'displayName', session.user.name );
		this.api.executeCommand( 'subject', this.props.roomSubject );
		this.api.executeCommand( 'avatarUrl', session.user.picture );

		this.api.addEventListener( 'screenSharingStatusChanged', ( status ) => {
			this.setState({
				screensharing: status.on,
				minimized: status.on
			});
		});
	}

	handleClose = ( event ) => {
		if ( this.context.isOwner() ) {
			this.api.executeCommand( 'hangup' );
		}
		this.props.onHide();
	}

	handleCompress = ( event ) => {
		this.setState({
			minimized: !this.state.minimized
		});
	}

	stopScreensharing = ( event ) => {
		this.api.executeCommand( 'toggleShareScreen' );
	}

	render() {
		return ( <Draggable>
			<Panel className="video-chat-panel" >
				<div
					ref={( div ) => {
						this.videoChatContainer = div;
					}}
					style={{
						display: this.state.minimized ? 'none' : 'inherit'
					}}
				></div>
				{this.state.minimized ? <h3 style={{ marginTop: 22 }}>
					{this.state.screensharing ? <span>
						Sharing screen <Button onClick={this.stopScreensharing} variant="secondary" size="sm">Stop sharing</Button>
					</span> : 'Video active'}
				</h3> : null}
				<Tooltip tooltip={this.state.minimized ? 'Maximize' : 'Minimize'} >
					<Button
						size="sm"
						onClick={this.handleCompress}
						className="video-chat-minimized-button"
					>
						<i className={this.state.minimized ? 'far fa-window-maximize' : 'fas fa-window-minimize'} ></i>
					</Button>
				</Tooltip>
				<Tooltip tooltip="Leave video" >
					<Button
						size="sm"
						onClick={this.handleClose}
						className="video-chat-button"
					>
						<i className="fas fa-video-slash"></i>
					</Button>
				</Tooltip>
			</Panel>
		</Draggable>);
	}
}


// PROPERTIES //


VideoChat.contextType = SessionContext;


// EXPORTS //

export default VideoChat;
