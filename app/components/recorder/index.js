// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import RecordRTC, { StereoAudioRecorder, MediaStreamRecorder, WhammyRecorder } from 'recordrtc';
import inEditor from 'utils/is-electron';
import getScreenId from './get_screen_id.js';
import isElectron from 'utils/is-electron';
import './recorder.css';


// VARIABLES //

navigator.getUserMedia = navigator.getUserMedia || navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia;


// FUNCTIONS //

function captureScreen( clbk, capture ) {
	getScreenId( function getUserMedia( error, sourceId, screenConstraints ) {
		navigator.getUserMedia( screenConstraints, clbk, function onMedia( error ) {
			console.error( 'getScreenId error', error ); // eslint-disable-line no-console
			alert( 'Failed to capture your screen. Please check Chrome console logs for further information.' );
		});
	}, capture );
}

function captureCamera( cb, captureAudio ) {
	navigator.getUserMedia({ audio: captureAudio, video: true }, cb, function onMedia( error ) {
		console.error( 'captureCamera error', error ); // eslint-disable-line no-console
	});
}

function captureAudio( cb ) {
	navigator.getUserMedia({ audio: true, video: false }, cb, function onMedia( error ) {
		console.error( 'captureAudio error', error ); // eslint-disable-line no-console
	});
}

const isMimeTypeSupported = ( _mimeType ) => {
	if ( typeof MediaRecorder.isTypeSupported !== 'function' ) {
		return true;
	}
	return MediaRecorder.isTypeSupported( _mimeType );
};

function getAudioConfig( props ) {
	let mimeType = 'audio/mpeg';
	let recorderType = MediaStreamRecorder;
	if ( isMimeTypeSupported( mimeType ) === false ) {
		console.log( mimeType, 'is not supported.' ); // eslint-disable-line no-console
		mimeType = 'audio/ogg';
		if ( isMimeTypeSupported( mimeType ) === false ) {
			console.log( mimeType, 'is not supported.' ); // eslint-disable-line no-console
			mimeType = 'audio/webm';
			if ( isMimeTypeSupported( mimeType ) === false ) {
				console.log( mimeType, 'is not supported.' ); // eslint-disable-line no-console
				// Fallback to WebAudio solution:
				mimeType = 'audio/wav';
				recorderType = StereoAudioRecorder;
			}
		}
	}
	return { mimeType, recorderType, type: 'audio', bitsPerSecond: props.bitsPerSecond };
}

function getVideoConfig( props ) {
	let mimeType = 'video/x-matroska;codecs=avc1'; // MKV
	let recorderType = MediaStreamRecorder;

	if ( !isMimeTypeSupported( mimeType ) ) {
		console.log(mimeType, 'is not supported.');
		mimeType = 'video/webm\;codecs=h264'; // H264
		if ( !isMimeTypeSupported( mimeType ) ) {
			console.log(mimeType, 'is not supported.');
			mimeType = 'video/webm\;codecs=vp9'; // VP9
			if ( !isMimeTypeSupported( mimeType ) ) {
				console.log(mimeType, 'is not supported.');
				mimeType = 'video/webm\;codecs=vp8'; // VP8
				if ( !isMimeTypeSupported( mimeType ) ) {
					console.log(mimeType, 'is not supported.');
					mimeType = 'video/webm';
					if ( !isMimeTypeSupported( mimeType ) ) {
						console.log(mimeType, 'is not supported.');
						// Fallback to Whammy (WebP+WebM) solution...
						mimeType = 'video/webm';
						recorderType = WhammyRecorder;
					}
				}
			}
		}
	}
	return { mimeType, recorderType, type: 'video', bitsPerSecond: props.bitsPerSecond };
}


// MAIN //

class Recorder extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			recording: false,
			available: true,
			finished: false,
			uploaded: false
		};

		if ( props.screen || props.camera ) {
			this.recorderConfig = getVideoConfig( props );
		} else if ( props.audio ) {
			this.recorderConfig = getAudioConfig( props );
		}

		window.getChromeExtensionStatus( ( status ) => {
			console.log( 'Extension status: ' + status );
			if ( status !== 'installed-enabled' ) {
				this.setState({
					available: false
				});
			}
		});
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
		if ( this.props.audio && this.audio ) {
			this.audio.getAudioTracks().forEach( function onTrack( track ) {
				track.stop();
			});
		}
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
		const id = this.props.id;
		const fileName = id || 'recorderFile';

		const blob = this.recorder.getBlob();
		const file = new File([ blob ], fileName, {
			type: this.recorderConfig.mimeType
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
			this.setState({
				recording: false,
				finished: true
			});
		} else {
			this.startRecording();
			this.setState({
				recording: true,
				finished: false,
				uploaded: false
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

		// Case: Camera + Audio / No Audio
		if ( camera && !screen ) {
			captureCamera( ( camera ) => {
				camera.width = window.screen.width;
				camera.height = window.screen.height;
				camera.fullcanvas = true;
				this.camera = camera;
				let recorder = RecordRTC( camera, this.recorderConfig );
				recorder.startRecording();
				this.recorder = recorder;
			}, audio );
		}
		// Case: Audio
		if ( audio && !screen && !camera ) {
			captureAudio( ( audio ) => {
				let recorder = RecordRTC( audio, this.recorderConfig );
				recorder.startRecording();
				this.audio = audio;
				this.recorder = recorder;
			});
		}
		// Case: Screen & Audio
		if ( screen && !camera && audio ) {
			captureScreen( ( screen ) => {
				captureAudio( ( audio ) => {
					screen.width = window.screen.width;
					screen.height = window.screen.height;
					screen.fullcanvas = true;
					this.screen = screen;
					let recorder = RecordRTC( [ screen, audio ], this.recorderConfig );
					recorder.startRecording();
					this.recorder = recorder;
				});
			}, true );
		}
		// Case: Screen without Audio
		if ( screen && !camera && !audio ) {
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
		// Case: Screen & Camera
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
				}, audio );
			}, audio );
		}
	}

	renderAudioVideo( player ) {
		const { audio, camera, screen } = this.props;
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
					width="320px"
					height="auto"
					style={{ display: this.state.recording ? 'none' : 'block' }}
					ref={( player ) => { this.player = player; }}
					controls autoPlay
				/>
			);
		}
	}

	render() {
		let recordingColor = this.state.recording ? 'red' : 'rgb(100,100,100)';
		const { audio, screen, camera } = this.props;
		if ( !audio && !screen && !camera ) {
			return null;
		}
		const editorStyle = isElectron ? ' recorder-in-editor' : '';
		return (
			<div className={`recorder-container unselectable${editorStyle}`} >
				<div className="recorder-button-container">
					<div
						className="recorder-button"
						onClick={this.handleClick}
						style={{
							background: recordingColor
						}}
					></div>
				</div>
				<div
					className="recorder-rec"
					style={{ color: recordingColor }}
				>REC</div>
				{ this.state.finished ? this.renderAudioVideo() : null }
				{ !this.state.available && !inEditor ? <button onClick={() => {
					window.open( 'https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk', '_blank' );
				}} id="install-button">
					<img width="100px" height="32px" src="https://www.webrtc-experiment.com/images/btn-install-chrome-extension.png" alt="Add to Chrome" />
				</button> : null }
				{ this.state.finished ?
					<Button onClick={this.clearFile} bsStyle="warning">Clear</Button> :
					null
				}
				{ this.state.finished && this.props.downloadable ?
					<Button onClick={this.storeFile} bsStyle="primary">Download File</Button> :
					null
				}
				{ this.state.finished && this.props.uploadable ?
					<Button onClick={this.uploadFile} disabled={this.state.uploaded} bsStyle="primary">Upload File</Button> :
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
	bitsPerSecond: PropTypes.number,
	camera: PropTypes.bool,
	downloadable: PropTypes.bool,
	screen: PropTypes.bool,
	uploadable: PropTypes.bool
};


// DEFAULT PROPERTIES //

Recorder.defaultProps = {
	audio: false,
	autostart: false,
	bitsPerSecond: 128000,
	camera: false,
	downloadable: false,
	screen: false,
	uploadable: false
};


// CONTEXT TYPES //

Recorder.contextTypes = {
	session: PropTypes.object
};


// EXPORTS //

export default Recorder;
