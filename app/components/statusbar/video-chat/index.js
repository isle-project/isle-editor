// MODULES //

import React, { Component } from 'react';
import JitsiMeetExternalAPI from 'lib-jitsi-meet-dist/dist/external_api.min.js';
import Tooltip from 'components/tooltip';
import Button from 'react-bootstrap/Button';
import max from '@stdlib/math/base/special/max';
import Draggable from 'components/draggable';
import Panel from 'components/panel';
import { DOMAIN } from 'constants/jitsi.js';
import './video_chat.css';


// VARIABLES //

const INTERFACE_CONFIG = {
	DEFAULT_BACKGROUND: '#fffff8',
	DISABLE_VIDEO_BACKGROUND: true,
	SHOW_JITSI_WATERMARK: false,
	SHOW_WATERMARK_FOR_GUESTS: false,
	INVITATION_POWERED_BY: false,
	DEFAULT_REMOTE_DISPLAY_NAME: 'Anonymous',
	TOOLBAR_BUTTONS: [
		'microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen',
		'fodeviceselection', 'profile', 'info', 'recording',
		'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
		'videoquality', 'filmstrip', 'invite', 'shortcuts',
		'tileview', 'download', 'help', 'mute-everyone'
	],
	SETTINGS_SECTIONS: [ 'devices', 'language', 'moderator' ],
	MOBILE_APP_PROMO: true,
	HIDE_KICK_BUTTON_FOR_GUESTS: true,
	SHOW_CHROME_EXTENSION_BANNER: false
};


// MAIN //

class VideoChat extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			minimized: false
		};
	}

	componentDidMount() {
		const session = this.props.session;
		const options = {
			roomName: session.namespaceName + '/' + session.lessonName,
			width: max( 0.3 * window.innerWidth, 400 ),
			height: max( 0.3 * window.innerHeight, 400 ),
			parentNode: this.videoChatContainer,
			avatarURL: session.user.picture,
			userInfo: {
				email: session.user.email
			},
			configOverwrite: {
				startVideoMuted: !session.isOwner(),
				startAudioMuted: !session.isOwner()
			},
			interfaceConfigOverwrite: INTERFACE_CONFIG
		};
		const api = new JitsiMeetExternalAPI( DOMAIN, options );
		api.executeCommand( 'displayName', session.user.name );
	}

	handleCompress = () => {
		this.setState({
			minimized: !this.state.minimized
		});
	}

	render() {
		return ( <Draggable>
			<Panel className="broadcast-video-panel" >
				<div
					ref={( div ) => {
						this.videoChatContainer = div;
					}}
					style={{
						display: this.state.minimized ? 'none' : 'inherit'
					}}
				></div>
				{this.state.minimized ? <h3 style={{ marginTop: 22 }}>Video active</h3> : null}
				<Tooltip tooltip={this.state.minimized ? 'Maximize' : 'Minimize'} >
					<Button
						size="sm"
						onClick={this.handleCompress}
						className="broadcast-minimized-button"
					>
						<i className={this.state.minimized ? 'far fa-window-maximize' : 'fas fa-window-minimize'} ></i>
					</Button>
				</Tooltip>
				<Tooltip tooltip="Leave video" >
					<Button
						size="sm"
						onClick={this.props.onHide}
						className="broadcast-video-button"
					>
						<i className="fas fa-video-slash"></i>
					</Button>
				</Tooltip>
			</Panel>
		</Draggable>);
	}
}


// EXPORTS //

export default VideoChat;
