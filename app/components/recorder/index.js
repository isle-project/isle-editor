// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RecordRTC, { StereoAudioRecorder, MediaStreamRecorder } from 'recordrtc';
import inEditor from 'utils/is-electron';
import getScreenId from './get_screen_id.js';
import './recorder.css';


// VARIABLES //

navigator.getUserMedia = navigator.getUserMedia || navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia;


// FUNCTIONS //

function captureScreen( clbk ) {
	getScreenId( function getUserMedia( error, sourceId, screenConstraints ) {
		navigator.getUserMedia( screenConstraints, clbk, function onMedia( error ) {
			console.error( 'getScreenId error', error );
			alert( 'Failed to capture your screen. Please check Chrome console logs for further information.' );
		});
	});
}

function captureCamera( cb ) {
	navigator.getUserMedia({ audio: true, video: true }, cb, function onMedia( error ) {
		console.error( 'captureCamera error', error );
	});
}

function captureAudio( cb ) {
	navigator.getUserMedia({ audio: true, video: false }, cb, function onMedia( error ) {
		console.error( 'captureAudio error', error );
	});
}

const isMimeTypeSupported = ( _mimeType ) => {
	if ( typeof MediaRecorder.isTypeSupported !== 'function' ) {
		return true;
	}
	return MediaRecorder.isTypeSupported( _mimeType );
};

function getAudioConfig( type ) {
	var mimeType = 'audio/mpeg';
	var recorderType = MediaStreamRecorder;

	if ( isMimeTypeSupported( mimeType ) === false ) {
		console.log( mimeType, 'is not supported.' );
		mimeType = 'audio/ogg';

		if ( isMimeTypeSupported( mimeType ) === false ) {
			console.log( mimeType, 'is not supported.' );
			mimeType = 'audio/webm';

			if ( isMimeTypeSupported( mimeType ) === false ) {
				console.log( mimeType, 'is not supported.' );

				// fallback to WebAudio solution
				mimeType = 'audio/wav';
				recorderType = StereoAudioRecorder;
			}
		}
	}
	return { mimeType, recorderType, type: 'audio' };
}


// RECORDER //

class Recorder extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			recording: false,
			available: true,
			finished: false
		};

		if ( props.audio ) {
			this.recorderConfig = getAudioConfig();
		}
		else {
			this.recorderConfig = {
				type: 'video',
				mimeType: 'video/webm'
			};
		}

		window.getChromeExtensionStatus( ( status ) => {
			if ( status !== 'installed-enabled' ) {
				this.setState({
					available: false
				});
			}
		});

		this.storeFile = () => {
			this.recorder.save( 'filename.webm' );
		};

		this.uploadFile = () => {
			const { session } = this.context;
			const id = this.props.id;
			const fileName = id || 'recorderFile';

			const blob = this.recorder.getBlob();
			const file = new File([ blob ], fileName, {
				type: this.recorderConfig.mimeType
			});

			const formData = new FormData();
			formData.append( 'file', file );
			session.uploadFile( formData );
		};

		this.handleClick = () => {
			if ( this.state.recording ) {
				this.stopRecording();
				this.setState({
					recording: false,
					finished: true
				});
			} else {
				this.startRecording();
				this.setState({
					recording: true
				});
			}
		};
	}

	componentDidMount() {
		const { session } = this.context;
		this.unsubscribe = session.subscribe( () => {
			this.forceUpdate();
		});
		if ( this.props.autostart ) {
			this.startRecording();
			this.setState({
				recording: true
			});
		}
	}


	componentWillUnmount() {
		this.unsubscribe();
		if ( this.props.screen && this.screen ) {
			this.screen.getVideoTracks().forEach( function onTrack( track ) {
				track.stop();
			});
		}
	}


	startRecording() {
		if ( !this.recorder ) {
			this.setupRecorder();
		} else {
			this.recorder.startRecording();
		}
	}

	stopRecording() {
		this.recorder.stopRecording( () => {
			var blob = this.recorder.getBlob();
			this.player.src = URL.createObjectURL( blob );
			this.player.muted = false;
		});
	}

	setupRecorder() {
		const { audio, camera, screen } = this.props;
		if ( audio && !screen && !camera ) {
			captureAudio( ( audio ) => {
				let recorder = RecordRTC( audio, this.recorderConfig );
				recorder.startRecording();
				this.recorder = recorder;
			});
		}
		if ( !audio && screen && !camera ) {
			captureScreen( ( screen ) => {
				screen.width = window.screen.width;
				screen.height = window.screen.height;
				screen.fullcanvas = true;
				this.screen = screen;
				let recorder = RecordRTC( screen, this.recorderConfig );
				recorder.startRecording();
				this.recorder = recorder;
			});
		}
		if ( audio && screen && !camera ) {
			captureAudio( ( audio ) => {
				captureScreen( ( screen ) => {
					screen.width = window.screen.width;
					screen.height = window.screen.height;
					screen.fullcanvas = true;
					this.audio = audio;
					this.screen = screen;
					let recorder = RecordRTC([ audio, screen ], this.recorderConfig );
					recorder.startRecording();
					this.recorder = recorder;
				});
			});
		}
		if ( screen && camera ) {
			captureCamera( ( camera ) => {
				captureScreen( ( screen ) => {
					screen.width = window.screen.width;
					screen.height = window.screen.height;
					screen.fullcanvas = true;
					this.camera = camera;
					this.screen = screen;
					let recorder = RecordRTC([ camera, screen ], this.recorderConfig );
					recorder.startRecording();
					this.recorder = recorder;
				});
			});
		}
		else if ( screen && !camera ) {
			captureScreen( ( screen ) => {
				screen.width = window.screen.width;
				screen.height = window.screen.height;
				screen.fullcanvas = true;
				this.screen = screen;
				let recorder = RecordRTC([ screen ], this.recorderConfig );
				recorder.startRecording();
				this.recorder = recorder;
			});
		}
	}

	render() {
		let recordingColor = this.state.recording ? 'red' : 'rgb(250,160,160)';
		const { audio, screen } = this.props;
		if ( !audio && !screen ) {
			return null;
		}
		return (
			<div className="unselectable" style={{
				position: 'absolute',
				right: '2%',
				top: '0.5%',
				width: '300px',
				height: 'auto',
				textAlign: 'right'
			}}>
				<div style={{
					position: 'absolute',
					borderRadius: '50%',
					color: 'rgba(0,0,0,1)',
					border: 'solid 4px black',
					top: '8px',
					width: '40px',
					height: '40px',
					right: '30%'
				}}>
					<div
						className="recorder-button"
						onClick={this.handleClick}
						style={{
							background: recordingColor
						}}
					></div>
				</div>
				<div style={{
					color: recordingColor,
					fontFamily: 'Arial',
					fontSize: '40px',
					fontWeight: 800
				}}>REC</div>
				{ audio && !screen ?
					<audio style={{ display: this.state.recording ? 'none' : 'block' }} ref={( player ) => { this.player = player; }} controls autoPlay></audio> :
					<video width="320px" height="auto" style={{ display: this.state.recording ? 'none' : 'block' }} ref={( player ) => { this.player = player; }} controls autoPlay></video>
				}
				{ !this.state.available && !inEditor ? <button onClick={() => {
					window.open( 'https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk', '_blank' );
				}} id="install-button">
					<img width="100px" height="32px" src="https://www.webrtc-experiment.com/images/btn-install-chrome-extension.png" alt="Add to Chrome" />
				</button> : null }
				{ this.state.finished && this.props.downloadable ?
					<Button onClick={this.storeFile} bsStyle="primary">Download File</Button> :
					null
				}
				{ this.state.finished && this.props.uploadable ?
					<Button onClick={this.uploadFile} bsStyle="primary">Upload File</Button> :
					null
				}
			</div>
		);
	}
}


// TYPES //

Recorder.propTypes = {
	audio: PropTypes.bool,
	autostart: PropTypes.bool,
	downloadable: PropTypes.bool,
	screen: PropTypes.bool,
	uploadable: PropTypes.bool,
	video: PropTypes.bool
};


// DEFAULT PROPERTIES //

Recorder.defaultProps = {
	audio: false,
	autostart: false,
	downloadable: false,
	screen: false,
	uploadable: false,
	video: false
};


// CONTEXT TYPES //

Recorder.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Recorder;
