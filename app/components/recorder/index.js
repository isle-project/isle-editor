// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Button from 'react-bootstrap/lib/Button';
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import RecordRTC, { StereoAudioRecorder, MediaStreamRecorder, WhammyRecorder } from 'recordrtc';
import VoiceControl from 'components/voice-control';
import inEditor from 'utils/is-electron';
import getScreenId from './get_screen_id.js';
import isElectron from 'utils/is-electron';
import VOICE_COMMANDS from './voice_commands.json';
import './recorder.css';


// VARIABLES //

var debug = logger( 'isle:recorder' );
navigator.getUserMedia = navigator.getUserMedia || navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia;


// FUNCTIONS //

const isMimeTypeSupported = ( _mimeType ) => {
	if ( typeof MediaRecorder.isTypeSupported !== 'function' ) {
		return true;
	}
	return MediaRecorder.isTypeSupported( _mimeType );
};

function getAudioConfig({ bitsPerSecond }) {
	let mimeType = 'audio/mpeg';
	let recorderType = MediaStreamRecorder;
	if ( isMimeTypeSupported( mimeType ) === false ) {
		debug( mimeType, 'is not supported.' );
		mimeType = 'audio/ogg';
		if ( isMimeTypeSupported( mimeType ) === false ) {
			debug( mimeType, 'is not supported.' );
			mimeType = 'audio/webm';
			if ( isMimeTypeSupported( mimeType ) === false ) {
				debug( mimeType, 'is not supported.' );
				// Fallback to WebAudio solution:
				mimeType = 'audio/wav';
				recorderType = StereoAudioRecorder;
			}
		}
	}
	return {
		mimeType,
		recorderType,
		type: 'audio',
		bitsPerSecond: bitsPerSecond,
		numberOfAudioChannels: 1
	};
}

function getVideoConfig({ bitsPerSecond }) {
	let mimeType = 'video/x-matroska;codecs=avc1'; // MKV
	let recorderType = MediaStreamRecorder;

	if ( !isMimeTypeSupported( mimeType ) ) {
		debug(mimeType, 'is not supported.');
		mimeType = 'video/webm;codecs=h264'; // H264
		if ( !isMimeTypeSupported( mimeType ) ) {
			debug(mimeType, 'is not supported.');
			mimeType = 'video/webm;codecs=vp9'; // VP9
			if ( !isMimeTypeSupported( mimeType ) ) {
				debug(mimeType, 'is not supported.');
				mimeType = 'video/webm;codecs=vp8'; // VP8
				if ( !isMimeTypeSupported( mimeType ) ) {
					debug(mimeType, 'is not supported.');
					mimeType = 'video/webm';
					if ( !isMimeTypeSupported( mimeType ) ) {
						debug(mimeType, 'is not supported.');
						// Fallback to Whammy (WebP+WebM) solution...
						mimeType = 'video/webm';
						recorderType = WhammyRecorder;
					}
				}
			}
		}
	}
	return {
		mimeType,
		recorderType,
		type: 'video',
		bitsPerSecond: bitsPerSecond
	};
}


// MAIN //

/**
* An ISLE component for recording audio, screen and video.
*
* @property {boolean} audio - indicates whether audio should be recorded
* @property {boolean} camera - indicates whether webcam should be recorded
* @property {boolean} screen - indicates whether the screen should be captured
* @property {boolean} autostart - indicates whether recording should start immediately
* @property {boolean} downloadable - indicates whether users should be able to download the recoding
* @property {boolean} uploadable - indicates whether users should be able to upload the recoding to the server
* @property {number} bitsPerSecond - bits per second
* @property {string} voiceID - voice control identifier
*/
class Recorder extends Component {
	constructor( props ) {
		super( props );

		let selectedSources = [];
		if ( props.audio ) {
			selectedSources.push( 'audio' );
		}
		if ( props.screen ) {
			selectedSources.push( 'screen' );
		}
		if ( props.camera ) {
			selectedSources.push( 'camera' );
		}

		this.state = {
			recording: false,
			available: true,
			finished: false,
			uploaded: false,
			hidden: false,
			selectedSources: selectedSources
		};

		window.getChromeExtensionStatus( ( status ) => {
			debug( 'Extension status: ' + status );
			if ( status !== 'installed-enabled' ) {
				this.setState({
					available: false
				});
			}
		});
	}

	componentDidMount() {
		if ( this.props.autostart ) {
			this.startRecording();
			this.setState({
				recording: true
			});
		}
	}

	componentWillUnmount() {
		if ( this.props.screen && this.screen ) {
			this.screen.getVideoTracks().forEach( function onTrack( track ) {
				track.stop();
			});
		}
		if ( this.props.audio && this.audio ) {
			this.audio.getAudioTracks().forEach( function onTrack( track ) {
				track.stop();
			});
		}
	}

	hide = () => {
		this.setState({
			hidden: true
		});
	}

	show = () => {
		this.setState({
			hidden: false
		});
	}

	handleError( msg ) {
		const { session } = this.context;
		session.addNotification({
			title: 'Encountered Error',
			message: msg,
			level: 'error',
			position: 'tr'
		});
		this.setState({
			recording: false,
			finished: false
		});
	}

	captureScreen( clbk ) {
		getScreenId( function getUserMedia( error, sourceId, screenConstraints ) {
			navigator.getUserMedia( screenConstraints, clbk, ( error ) => {
				this.handleError( 'Failed to capture your screen' );
			});
		});
	}

	captureCamera( cb, captureAudio ) {
		navigator.getUserMedia({ audio: captureAudio, video: true }, cb, ( error ) => {
			this.handleError( 'Failed to capture your camera.' );
		});
	}

	captureAudio( cb ) {
		navigator.getUserMedia({ audio: true, video: false }, cb, function onMedia( error ) {
			this.handleError( 'Failed to capture your microphone.' );
		});
	}

	handleSourceChange = ( e ) => {
		if ( this.audio ) {
			this.audio = null;
		}
		if ( this.camera ) {
			this.camera = null;
		}
		if ( this.screen ) {
			this.screen = null;
		}
		if ( this.recorder ) {
			this.recorder.destroy();
			this.recorder = null;
		}
		this.setState({
			selectedSources: e
		});
	}

	storeFile = () => {
		this.recorder.save( 'recoding.webm' );
	}

	clearFile = () => {
		this.recorder.clearRecordedData();
		this.setState({
			finished: false
		});
	}

	uploadFile = () => {
		const { session } = this.context;
		const { audio, camera, screen } = this.getActiveSources();
		let mimeType;
		if ( audio && !camera && !screen ) {
			mimeType = this.recorderAudioConfig.mimeType;
		} else {
			mimeType = this.recorderVideoConfig.mimeType;
		}
		const id = this.props.id;
		let filename = 'recordedFile.webm';
		if ( id ) {
			filename = id+'_'+filename;
		}
		const blob = this.recorder.getBlob();
		const file = new File([ blob ], filename, {
			type: mimeType
		});
		const formData = new FormData();
		formData.append( 'file', file );
		session.uploadFile( formData, ( err ) => {
			if ( !err ) {
				this.setState({
					uploaded: true
				});
			}
		});
	}

	handleClick = () => {
		if ( this.state.recording ) {
			this.stopRecording();
		} else {
			this.startRecording();
		}
	}

	startRecording() {
		this.setState({
			recording: true,
			finished: false,
			uploaded: false
		});
		debug( 'Start recording...' );
		if ( !this.recorder ) {
			this.setupRecorder();
		} else {
			try {
				this.recorder.startRecording();
			} catch ( err ) {
				this.setupRecorder( ( err ) => {
					this.recorder.startRecording();
				});
			}
		}
	}

	stopRecording() {
		this.setState({
			recording: false,
			finished: true
		});
		this.recorder.stopRecording( () => {
			var blob = this.recorder.getBlob();
			this.player.src = URL.createObjectURL( blob );
			this.player.muted = false;
		});
	}

	getActiveSources = () => {
		const sources = {
			audio: false,
			camera: false,
			screen: false
		};
		for ( let i = 0; i < this.state.selectedSources.length; i++ ) {
			if ( this.state.selectedSources[ i ] === 'audio' ) {
				sources.audio = true;
			}
			else if ( this.state.selectedSources[ i ] === 'camera' ) {
				sources.camera = true;
			}
			else if ( this.state.selectedSources[ i ] === 'screen' ) {
				sources.screen = true;
			}
		}
		return sources;
	}

	setupRecorder( clbk = () => {} ) {
		debug( 'Setting up the recorder...' );
		const { audio, camera, screen } = this.getActiveSources();

		if ( screen || camera ) {
			this.recorderVideoConfig = getVideoConfig({ bitsPerSecond: this.props.bitsPerSecond });
		} else if ( audio ) {
			this.recorderAudioConfig = getAudioConfig({ bitsPerSecond: this.props.bitsPerSecond });
		}

		// Case: Camera + Audio / No Audio
		if ( camera && !screen ) {
			if ( this.camera ) {
				this.recorder = RecordRTC( this.camera, this.recorderVideoConfig );
				this.recorder.startRecording();
				return clbk();
			}
			this.captureCamera( ( camera ) => {
				camera.width = window.screen.width;
				camera.height = window.screen.height;
				camera.fullcanvas = true;
				this.camera = camera;
				this.recorder = RecordRTC( camera, this.recorderVideoConfig );
				this.recorder.startRecording();
				clbk();
			}, audio );
		}
		// Case: Audio
		if ( audio && !screen && !camera ) {
			if ( this.audio ) {
				this.recorder = RecordRTC( this.audio, this.recorderAudioConfig );
				this.recorder.startRecording();
				return clbk();
			}
			this.captureAudio( ( audio ) => {
				this.recorder = RecordRTC( audio, this.recorderAudioConfig );
				this.recorder.startRecording();
				this.audio = audio;
				clbk();
			});
		}
		// Case: Screen & Audio
		if ( screen && !camera && audio ) {
			if ( this.audio && this.screen ) {
				this.recorder = RecordRTC( [ this.screen, this.audio ], this.recorderVideoConfig );
				this.recorder.startRecording();
				return clbk();
			}
			this.captureScreen( ( screen ) => {
				this.captureAudio( ( audio ) => {
					screen.width = window.screen.width;
					screen.height = window.screen.height;
					screen.fullcanvas = true;
					this.screen = screen;
					this.audio = audio;
					this.recorder = RecordRTC( [ screen, audio ], this.recorderVideoConfig );
					this.recorder.startRecording();
					clbk();
				});
			});
		}
		// Case: Screen without Audio
		if ( screen && !camera && !audio ) {
			if ( this.screen ) {
				this.recorder = RecordRTC( this.screen, this.recorderVideoConfig );
				this.recorder.startRecording();
				return clbk();
			}
			this.captureScreen( ( screen ) => {
				screen.width = window.screen.width;
				screen.height = window.screen.height;
				screen.fullcanvas = true;
				this.screen = screen;
				this.recorder = RecordRTC( screen, this.recorderVideoConfig );
				this.recorder.startRecording();
				clbk();
			});
		}
		// Case: Screen & Camera
		if ( this.screen && this.camera ) {
			this.recorder = RecordRTC([ this.camera, this.screen ], this.recorderVideoConfig );
			this.recorder.startRecording();
			return clbk();
		}
		if ( screen && camera ) {
			this.captureCamera( ( camera ) => {
				this.captureScreen( ( screen ) => {
					screen.width = window.screen.width;
					screen.height = window.screen.height;
					screen.fullcanvas = true;
					this.camera = camera;
					this.screen = screen;
					this.recorder = RecordRTC([ camera, screen ], this.recorderVideoConfig );
					this.recorder.startRecording();
					clbk();
				});
			}, audio );
		}
	}

	renderAudioVideo() {
		const { audio, camera, screen } = this.getActiveSources();
		if ( audio && !camera && !screen ) {
			return (
				<audio
					style={{ display: this.state.recording ? 'none' : 'block' }}
					ref={( player ) => { this.player = player; }}
					controls autoPlay
				/>
			);
		}
		if ( screen || camera ) {
			return (
				<video
					width="300px"
					height="auto"
					style={{ display: this.state.recording ? 'none' : 'block' }}
					ref={( player ) => { this.player = player; }}
					controls autoPlay
				/>
			);
		}
	}

	render() {
		const isAvailable = this.state.available || inEditor;
		const recordingColor = this.state.recording ? 'red' : 'rgb(100,100,100)';
		const editorStyle = isElectron ? ' recorder-in-editor' : '';
		if ( this.state.hidden ) {
			return null;
		}
		return (
			<div className={`recorder-container unselectable${editorStyle}`} >
				{ this.state.selectedSources.length > 0 && isAvailable ?
					<div className="recorder-button-container">
						<div
							className="recorder-button"
							onClick={this.handleClick}
							style={{
								background: recordingColor
							}}
						></div>
					</div> : null }
				<div
					className="recorder-rec"
					style={{ color: recordingColor }}
				>REC</div>
				{ !this.state.finished && isAvailable ?
					<ToggleButtonGroup
						className="recorder-buttongroup"
						size="sm" type="checkbox"
						value={this.state.selectedSources}
						onChange={this.handleSourceChange}
					>
						<ToggleButton className="recorder-togglebutton" disabled={!this.props.screen || this.state.recording} value="screen">Screen</ToggleButton>
						<ToggleButton className="recorder-togglebutton" disabled={!this.props.camera || this.state.recording} value="camera">Cam</ToggleButton>
						<ToggleButton className="recorder-togglebutton" disabled={!this.props.audio || this.state.recording} value="audio">Audio</ToggleButton>
						<VoiceControl reference={this} id={this.props.voiceID} commands={VOICE_COMMANDS} />
					</ToggleButtonGroup> : null
				}
				{ this.state.finished ? this.renderAudioVideo() : null }
				{ !isAvailable ? <button onClick={() => {
					window.open( 'https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk', '_blank' );
				}} id="install-button">
					<img width="100px" height="32px" src="https://www.webrtc-experiment.com/images/btn-install-chrome-extension.png" alt="Add to Chrome" />
				</button> : null }
				{ this.state.finished ?
					<ButtonGroup>
						<Button onClick={this.clearFile} bsStyle="warning">Clear File</Button>
						{ this.props.downloadable ?
							<Button onClick={this.storeFile} bsStyle="primary">Download File</Button> :
							null
						}
						{ this.props.uploadable ?
							<Button onClick={this.uploadFile} disabled={this.state.uploaded} bsStyle="primary">Upload File</Button> :
							null
						}
					</ButtonGroup> :
					null
				}
			</div>
		);
	}
}


// PROPERTIES //

Recorder.propTypes = {
	audio: PropTypes.bool,
	camera: PropTypes.bool,
	screen: PropTypes.bool,
	autostart: PropTypes.bool,
	downloadable: PropTypes.bool,
	uploadable: PropTypes.bool,
	bitsPerSecond: PropTypes.number,
	voiceID: PropTypes.string
};

Recorder.defaultProps = {
	audio: false,
	autostart: false,
	bitsPerSecond: 128000,
	camera: false,
	downloadable: false,
	screen: false,
	uploadable: false,
	voiceID: null
};

Recorder.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Recorder;
