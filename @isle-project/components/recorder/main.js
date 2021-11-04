/* eslint-disable jsx-a11y/media-has-caption */

// MODULES //

import React, { Component } from 'react';
import logger from 'debug';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import RecordRTC, { StereoAudioRecorder, MediaStreamRecorder, getSeekableBlob } from 'recordrtc';
import SessionContext from '@isle-project/session/context.js';
import { withPropCheck } from '@isle-project/utils/prop-check';
import './recorder.css';


// VARIABLES //

const debug = logger( 'isle:recorder' );
const script = document.createElement( 'script' );
script.src = 'https://www.webrtc-experiment.com/EBML.js';
script.type = 'text/javascript';
document.getElementsByTagName( 'head' )[ 0 ].appendChild( script );


// FUNCTIONS //

const isMimeTypeSupported = ( _mimeType ) => {
	const MediaRecorder = global.MediaRecorder;
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

function getVideoConfig({ bitsPerSecond, screen }) {
	const out = {
		mimeType: 'video/webm',
		type: 'video',
		bitsPerSecond: bitsPerSecond
	};
	if ( !screen ) {
		out.recorderType = MediaStreamRecorder;
	}
	return out;
}

function keepStreamActive(stream) {
	const video = document.createElement( 'video' );
	video.muted = true;
	video.srcObject = stream;
	video.style.display = 'none';
	(document.body || document.documentElement).appendChild(video);
}


// MAIN //

/**
* An ISLE component for recording audio, screen and video.
*
* @property {boolean} audio - indicates whether audio should be recorded
* @property {boolean} camera - indicates whether webcam should be recorded
* @property {boolean} screen - indicates whether the screen should be captured
* @property {boolean} autostart - indicates whether recording should start immediately
* @property {boolean} downloadable - indicates whether users should be able to download the recording
* @property {boolean} uploadable - indicates whether users should be able to upload the recording to the server
* @property {number} bitsPerSecond - bits per second
* @property {Object} style - CSS inline styles
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
			recording: props.autostart,
			finished: false,
			uploaded: false,
			hidden: false,
			selectedSources: selectedSources
		};
	}

	componentDidMount() {
		if ( this.props.autostart ) {
			this.startRecording();
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
	};

	show = () => {
		this.setState({
			hidden: false
		});
	};

	handleError( msg ) {
		const session = this.context;
		session.addNotification({
			title: this.props.t('encountered-error'),
			message: msg,
			level: 'error',
			position: 'tr'
		});
		this.setState({
			recording: false,
			finished: false
		});
	}

	captureScreen( onSuccess ) {
		const screenConstraints = {
			video: {
				displaySurface: 'monitor', // monitor, window, application, browser
				logicalSurface: true,
				cursor: 'always' // never, always, motion
			}
		};
		const onError = ( error ) => {
			const msg = this.props.t( 'failed-to-capture-screen', { msg: error.message });
			this.handleError( msg );
		};
		const navigator = global.navigator;
		navigator.mediaDevices.getDisplayMedia( screenConstraints )
			.then( onSuccess )
			.catch( onError );
	}

	captureCamera( cb, captureAudio ) {
		const navigator = global.navigator;
		navigator.mediaDevices.getUserMedia({ audio: captureAudio, video: true })
			.then( cb )
			.catch( ( error ) => {
				const msg = this.props.t( 'failed-to-capture-camera', { msg: error.message });
				this.handleError( msg );
			});
	}

	captureAudio( cb ) {
		const navigator = global.navigator;
		navigator.mediaDevices.getUserMedia({ audio: true, video: false })
			.then( cb )
			.catch( ( error ) => {
				const msg = this.props.t( 'failed-to-capture-microphone', { msg: error.message });
				this.handleError( msg );
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
	};

	storeFile = () => {
		this.recorder.save( 'recoding.webm' );
	};

	clearFile = () => {
		this.recorder.clearRecordedData();
		this.setState({
			finished: false
		});
	};

	uploadFile = () => {
		const session = this.context;
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
		getSeekableBlob( this.recorder.getBlob(), ( seekableBlob ) => {
			const file = new File([ seekableBlob ], filename, {
				type: mimeType
			});
			const formData = new FormData();
			formData.append( 'file', file );
			session.uploadFile({
				formData,
				callback: ( err, res ) => {
					if ( err ) {
						return this.handleError( err.message );
					}
					const session = this.context;
					const filename = res.filename;
					const link = session.server + '/' + filename;
					session.addNotification({
						title: this.props.t('recording-uploaded'),
						message: this.props.t('recording-uploaded-message'),
						level: 'success',
						position: 'tl',
						autoDismiss: 0,
						children: <span>
							<a href={link} target="_blank" rel="noopener noreferrer" >{this.props.t('open-link')}</a>
						</span>
					});
					this.setState({
						uploaded: true
					});
				}
			});
		});
	};

	handleClick = () => {
		if ( this.state.recording ) {
			this.stopRecording();
		} else {
			this.startRecording();
		}
	};

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
			getSeekableBlob( this.recorder.getBlob(), ( seekableBlob ) => {
				this.player.src = URL.createObjectURL( seekableBlob );
				this.player.muted = false;
			});
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
	};

	setupRecorder( clbk = () => {} ) {
		debug( 'Setting up the recorder...' );
		const { audio, camera, screen } = this.getActiveSources();

		if ( screen || camera ) {
			this.recorderVideoConfig = getVideoConfig({ bitsPerSecond: this.props.bitsPerSecond, screen });
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
				keepStreamActive( screen );
				this.captureAudio( ( audio ) => {
					keepStreamActive( audio );
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
				keepStreamActive( camera );
				this.captureScreen( ( screen ) => {
					keepStreamActive( screen );
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
		const recordingColor = this.state.recording ? 'red' : 'rgb(100,100,100)';
		if ( this.state.hidden ) {
			return null;
		}
		const style = this.props.style;
		return (
			<div
				className="recorder-container unselectable"
				style={style}
			>
				<div
					className="recorder-rec"
					style={{ color: recordingColor }}
				>{ !this.state.recording ? 'REC' : '' }</div>
				{ this.state.selectedSources.length > 0 ?
					<div className="recorder-button-container">
						<button
							aria-label={this.props.t('toggle-recording')}
							className="recorder-button"
							onClick={this.handleClick}
							style={{
								background: recordingColor
							}}
						></button>
					</div> : null }
				{ !this.state.finished && !this.state.recording ?
					<ToggleButtonGroup
						className="recorder-buttongroup"
						size="sm" type="checkbox"
						value={this.state.selectedSources}
						onChange={this.handleSourceChange}
					>
						<ToggleButton variant="light" className="recorder-togglebutton" disabled={!this.props.screen || this.state.recording} value="screen">{this.props.t('screen')}</ToggleButton>
						<ToggleButton variant="light" className="recorder-togglebutton" disabled={!this.props.camera || this.state.recording} value="camera">{this.props.t('cam')}</ToggleButton>
						<ToggleButton variant="light" className="recorder-togglebutton" disabled={!this.props.audio || this.state.recording} value="audio">{this.props.t('audio')}</ToggleButton>
					</ToggleButtonGroup> : null
				}
				{ this.state.finished ? this.renderAudioVideo() : null }
				<div style={{ background: 'rgba(0, 80,255,0.5)' }}>
				{ this.state.finished ?
					<ButtonGroup>
						<Button size="sm" onClick={this.clearFile} variant="warning">{this.props.t('clear-file')}</Button>
						{ this.props.downloadable ?
							<Button size="sm" onClick={this.storeFile} variant="primary">{this.props.t('download-file')}</Button> :
							null
						}
						{ this.props.uploadable ?
							<Button size="sm" onClick={this.uploadFile} disabled={this.state.uploaded} variant="primary">{this.props.t('upload-file')}</Button> :
							null
						}
					</ButtonGroup> :
					null
				}
				</div>
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
	style: PropTypes.object
};

Recorder.defaultProps = {
	audio: false,
	autostart: false,
	bitsPerSecond: 1280000,
	camera: false,
	downloadable: false,
	screen: false,
	uploadable: false,
	style: {}
};

Recorder.contextType = SessionContext;


// EXPORTS //

export default withTranslation( 'recorder' )( withPropCheck( Recorder ) );
