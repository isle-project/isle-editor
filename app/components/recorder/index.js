// MODULES //

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RecordRTC, { StereoAudioRecorder, MediaStreamRecorder } from 'recordrtc';
import getScreenId from './get_screen_id.js';


// VARIABLES //

navigator.getUserMedia = navigator.getUserMedia || navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia;


// FUNCTIONS //

function captureScreen( clbk ) {
	getScreenId( function( error, sourceId, screen_constraints ) {
		navigator.getUserMedia( screen_constraints, clbk, function ( error ) {
			console.error( 'getScreenId error', error );
			alert( 'Failed to capture your screen. Please check Chrome console logs for further information.' );
		});
	});
}

function captureCamera( cb ) {
	navigator.getUserMedia({ audio: false, video: true }, cb, function ( error ) {
		console.error( 'captureCamera error', error );
	});
}

function captureAudio( cb ) {
	navigator.getUserMedia({ audio: true, video: false }, cb, function ( error ) {
		console.error( 'captureAudio error', error );
	});
}

const isMimeTypeSupported = ( _mimeType ) => {
	if ( typeof MediaRecorder.isTypeSupported !== 'function' ) {
		return true;
	}
	return MediaRecorder.isTypeSupported( _mimeType );
};

function getAudioConfig() {
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

		window.getChromeExtensionStatus( ( status ) => {
			if ( status !== 'installed-enabled' ) {
				this.setState({
					available: false
				});
			}
		});


		this.installExtension = () => {
			 
		};

		this.storeFile = () => {
			this.recorder.save( 'filename.webm' );
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
			/*
			[ this.screen, this.camera ].forEach( function( stream ) {
				stream.getVideoTracks().forEach( function( track ) {
					track.stop();
				});
				stream.getAudioTracks().forEach( function( track ) {
					track.stop();
				});
			});
			*/
		});
	}

	setupRecorder() {
		if ( this.props.audio && !this.props.screen ) {
			captureAudio( ( audio ) => {
				let audioConfig = getAudioConfig();
				let recorder = RecordRTC( audio, audioConfig );
				recorder.startRecording();
				this.recorder = recorder;
			});
		}
		if ( !this.props.audio && this.props.screen ) {
			captureScreen( ( screen ) => {
				screen.width = window.screen.width;
				screen.height = window.screen.height;
				screen.fullcanvas = true;
				this.screen = screen;
				let recorder = RecordRTC( screen, {
					type: 'video',
					mimeType: 'video/webm'
				});
				recorder.startRecording();
				this.recorder = recorder;
			});
		}
		if ( this.props.audio && this.props.screen ) {
			captureAudio( ( audio ) => {
				captureScreen( ( screen ) => {
					screen.width = window.screen.width;
					screen.height = window.screen.height;
					screen.fullcanvas = true;
					this.audio = audio;
					this.screen = screen;
					let recorder = RecordRTC([ audio, screen ], {
						type: 'video',
						mimeType: 'video/webm'
					});
					recorder.startRecording();
					this.recorder = recorder;
				});
			});
		}
	}

	componentWillUnmount() {
		if ( this.props.screen && this.screen ) {
			this.screen.getVideoTracks().forEach( function( track ) {
				track.stop();
			});
		}
	}

	componentDidMount() {
	}

	render() {
		let recordingColor = this.state.recording ? 'red' : 'rgb(250,160,160)';
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
						style={{ 
							position: 'absolute', 
							borderRadius: '50%', 
							background: recordingColor, 
							width: '22px', 
							height: '22px', 
							top: '5px', 
							left: '5px', 
							cursor: 'pointer' 
						}}
						onClick={this.handleClick}
					></div>
				</div>
				<div style={{
					color: recordingColor,
					fontFamily: 'Arial',
					fontSize: '40px', 
					fontWeight: 800
				}}>REC</div>
				{ this.props.audio && !this.props.screen ? 
					<audio style={{ display: this.state.recording ? 'none' : 'block' }} ref={ ( player ) => { this.player = player; }} controls autoPlay></audio> :
					<video width="320px" height="auto" style={{ display: this.state.recording ? 'none' : 'block' }} ref={ ( player ) => { this.player = player; }} controls autoPlay></video>
				}
				{ !this.state.available ?  <button onClick={ () => {
					window.open( 'https://chrome.google.com/webstore/detail/screen-capturing/ajhifddimkapgcifgcodmmfdlknahffk', '_blank' );
				}} id="install-button" style={{
					padding: 0,
					background: 'none',
					height: '36px',
					verticalAlign: 'middle',
					cursor: 'pointer'
				}}>
					<img width="100px" height="32px" src="https://www.webrtc-experiment.com/images/btn-install-chrome-extension.png" alt="Add to Chrome" />
				</button> :  null }
				{ this.state.finished ? <Button onClick={this.storeFile} bsStyle="primary">Download File</Button> : null }
			</div>
		);
	}

}


// TYPES //

Recorder.propTypes = {
	audio: PropTypes.bool,
	screen: PropTypes.bool
};


// EXPORTS //

export default Recorder;