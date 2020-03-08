// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import Panel from 'components/panel';
import Draggable from 'components/draggable';
import Tooltip from 'components/tooltip';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import { BROADCAST_ANSWER, BROADCAST_CANDIDATE, BROADCAST_ENDED, BROADCAST_OFFER,
	MEMBER_ACTION, USER_JOINED, USER_LEFT } from 'constants/events.js';
import './broadcast.css';


// VARIABLES //

const debug = logger( 'isel:broadcast' );
const BROADCAST_CONFIG = {
	iceServers: [
		{
			urls: [ 'stun:stun.l.google.com:19302' ]
		}
	]
};
const PEER_CONNECTIONS = {};


// FUNCTIONS //

function getDevices() {
	return navigator.mediaDevices.enumerateDevices();
}

function logError( error ) {
	console.error( 'Encountered an error', error );
}


// MAIN //

class Broadcast extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			audioInputs: [],
			videoInputs: [],
			hasStream: false,
			selectedAudioInput: null,
			selectedVideoInput: null
		};
	}

	componentDidMount() {
		const session = this.props.session;
		this.unsubscribe = session.subscribe( ( type, data ) => {
			if ( this.stream ) {
				if ( type === USER_JOINED && this.state.hasStream ) {
					this.establishPeerConnection( data );
				}
				else if ( type === USER_LEFT && PEER_CONNECTIONS[ data.email ] ) {
					PEER_CONNECTIONS[ data.email ].close();
					delete PEER_CONNECTIONS[ data.email ];
				}
				if ( type === MEMBER_ACTION ) {
					if ( data.type === BROADCAST_CANDIDATE ) {
						const candidate = data.value;
						PEER_CONNECTIONS[ data.email ].addIceCandidate(
							new RTCIceCandidate( candidate )
						);
					}
					else if ( data.type === BROADCAST_ANSWER ) {
						const description = data.value;
						PEER_CONNECTIONS[ data.email ].setRemoteDescription( description );
					}
				}
			}
		});
	}

	componentDidUpdate( prevProps ) {
		if ( this.props.active && !prevProps.active ) {
			navigator.mediaDevices
				.getUserMedia({ audio: true, video: true })
				.then( getDevices )
				.then( this.gotDevices );
		}
		if ( !this.props.active && this.state.hasStream ) {
			this.stopStreaming();
		}
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	establishPeerConnection = ( user ) => {
		const peerConnection = new RTCPeerConnection( BROADCAST_CONFIG );
		PEER_CONNECTIONS[ user.email ] = peerConnection;

		const stream = this.videoElement.srcObject;
		stream.getTracks().forEach( track => peerConnection.addTrack( track, stream ) );

		const session = this.props.session;
		peerConnection.onicecandidate = event => {
			if ( event.candidate ) {
				session.log({
					id: BROADCAST_CANDIDATE,
					type: BROADCAST_CANDIDATE,
					value: event.candidate,
					noSave: true
				}, user.email );
			}
		};

		peerConnection
			.createOffer()
			.then( sdp => peerConnection.setLocalDescription( sdp ) )
			.then(() => {
				session.log({
					id: BROADCAST_OFFER,
					type: BROADCAST_OFFER,
					value: peerConnection.localDescription,
					noSave: true
				}, user.email );
			});
	}

	gotDevices = ( deviceInfos ) => {
		const videoInputs = [];
		const audioInputs = [];
		for ( const deviceInfo of deviceInfos ) {
			if ( deviceInfo.kind === 'audioinput' ) {
				audioInputs.push({
					value: deviceInfo.deviceId,
					label: deviceInfo.label
				});
			} else if (deviceInfo.kind === 'videoinput' ) {
				videoInputs.push({
					value: deviceInfo.deviceId,
					label: deviceInfo.label
				});
			}
		}
		this.setState({
			videoInputs,
			audioInputs,
			selectedAudioInput: audioInputs[ 0 ],
			selectedVideoInput: videoInputs[ 0 ]
		});
	}

	handleAudioChange = ( audioInput ) => {
		this.setState({
			selectedAudioInput: audioInput
		});
	}

	handleVideoChange =	( videoInput ) => {
		this.setState({
			selectedVideoInput: videoInput
		});
	}

	startStreaming = () => {
		this.getStream();
	}

	stopStreaming = () => {
		debug( 'Stopping the stream...' );
		this.stream.getTracks().forEach( track => {
			track.stop();
		});
		this.setState({
			hasStream: false
		});
		this.props.session.log({
			id: BROADCAST_ENDED,
			type: BROADCAST_ENDED,
			value: false,
			noSave: true
		}, 'members' );
	}

	getStream = () => {
		if ( this.stream ) {
			this.stream.getTracks().forEach( track => {
				track.stop();
			});
		}
		const audioSource = this.state.selectedAudioInput.value;
		const videoSource = this.state.selectedVideoInput.value;
		const constraints = {
			audio: { deviceId: audioSource ? { exact: audioSource } : void 0 },
			video: { deviceId: videoSource ? { exact: videoSource } : void 0 }
		};
		return navigator.mediaDevices
			.getUserMedia( constraints )
			.then( this.gotStream )
			.catch( logError );
	}

	gotStream = ( stream ) => {
		debug( 'Received stream...' );
		this.stream = stream;
		this.setState({
			hasStream: true
		}, () => {
			this.videoElement.srcObject = stream;
			const session = this.props.session;
			session.userList.forEach( user => {
				if ( user.email !== session.user.email ) {
					this.establishPeerConnection( user );
				}
			});
		});
	}

	render() {
		if ( !this.props.active ) {
			return null;
		}
		return (
			!this.state.hasStream ? <div className="broadcast-menu" >
				<p>Select your microphone and video to broadcast:</p>
				<Form.Group>
					<Form.Label>Audio Devices</Form.Label>
					<Select
						value={this.state.selectedAudioInput}
						options={this.state.audioInputs}
						onChange={this.handleAudioChange}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Video Devices</Form.Label>
					<Select
						value={this.state.selectedVideoInput}
						options={this.state.videoInputs}
						onChange={this.handleVideoChange}
					/>
				</Form.Group>
				<Button onClick={this.startStreaming} >
					Start Broadcasting
				</Button>
			</div> :
			<Draggable>
				<Panel className="broadcast-video-panel" >
					<video
						playsInline autoPlay muted
						ref={( video ) => {
							this.videoElement = video;
						}}
					></video>
					<Tooltip tooltip="Stop Broadcasting" >
						<Button
							variant="default"
							onClick={this.stopStreaming}
							className="broadcast-video-stop"
						>
							<i className="fas fa-video-slash"></i>
						</Button>
					</Tooltip>
				</Panel>
			</Draggable>
		);
	}
}


// PROPERTIES //

Broadcast.defaultProps = {
	active: false
};

Broadcast.propTypes = {
	active: PropTypes.bool,
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default Broadcast;
