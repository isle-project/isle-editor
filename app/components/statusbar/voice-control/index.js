// MODULES //

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import logger from 'debug';
import pdfMake from 'pdfmake/build/pdfmake';
import isEmptyObject from '@stdlib/assert/is-empty-object';
import Button from 'react-bootstrap/Button';
import VoiceInput from 'components/input/voice';


// VARIABLES //

const debug = logger( 'isle:statusbar:voice-control' );


// FUNCTIONS //

function loadFonts() {
	import( /* webpackChunkName: "fonts" */ '../../../constants/fonts.js' )
		.then( fonts => {
			debug( 'Successfully loaded fonts...' );
			pdfMake.vfs = fonts.default;
		})
		.catch( err => {
			debug( 'Encountered an error while loading fonts: '+err.message );
		});
}


// MAIN //

class VoiceControl extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			recordedText: null,
			transcript: []
		};
	}

	componentDidMount() {
		loadFonts();
	}

	handleFinalVoiceInput = ( text ) => {
		const recordedText = text[ 0 ];
		const transcript = this.state.transcript;
		transcript.push( recordedText );
		this.setState({
			transcript,
			recordedText
		}, this.renderRecordedText );
		setTimeout(() => {
			this.setState({ recordedText: null }, this.renderRecordedText );
		}, 3000 );
		const session = this.props.session;
		session.speechInterface.check( text );
	}

	handleVoiceInput = ( text ) => {
		debug( 'Received voice input: ' + text );
		const recordedText = text[ 0 ];
		this.setState({
			recordedText
		}, this.renderRecordedText );
	}

	stopRecording = () => {
		this.setState({ recordedText: null }, this.renderRecordedText );
		const session = this.props.session;
		session.addNotification({
			title: 'Recording Ended',
			message: 'Your voice is not recorded anymore.',
			level: 'success',
			position: 'tr',
			autoDismiss: 0,
			children: <div style={{ marginBottom: '40px' }}>
				<Button
					variant="success"
					size="sm" style={{ float: 'right', marginRight: '10px', marginTop: '10px' }}
					onClick={this.createTranscript}
				>Download PDF of Transcript</Button>
			</div>
		});
	}

	handleVoiceInputChange = ( event ) => {
		event.stopPropagation();
	}

	createTranscript = () => {
		const session = this.props.session;
		const doc = {
			content: [
				{
					text: `Transcript for ISLE lesson ${session.namespaceName+'/'+session.lessonName}`,
					style: 'header',
					alignment: 'center'
				}
			],
			styles: {
				header: {
					fontSize: 24,
					bold: true,
					margin: [0, 0, 0, 10]
				},
				author: {
					fontSize: 16,
					italics: true,
					margin: [0, 0, 0, 10],
					alignment: 'center'
				},
				date: {
					fontSize: 16,
					italics: true,
					alignment: 'right',
					margin: [0, 15, 0, 15]
				},
				subheader: {
					fontSize: 18,
					bold: true,
					margin: [0, 30, 0, 10]
				}
			}
		};
		if ( !isEmptyObject( session.user ) ) {
			doc.content.push({
				text: `by ${session.user.name} (${session.user.email})`,
				style: 'author'
			});
		}
		const date = new Date();
		doc.content.push({
			text: `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`,
			style: 'date'
		});

		for ( let i = 0; i < this.state.transcript.length; i++ ) {
			doc.content.push({
				text: this.state.transcript[ i ]
			});
		}
		pdfMake.createPdf( doc ).download( 'transcript.pdf' );
	}

	renderRecordedText = () => {
		if ( this.state.recordedText ) {
			this.displayedText.innerHTML = this.state.recordedText;
		} else {
			this.displayedText.innerHTML = '';
		}
	}

	render() {
		const session = this.props.session;
		return (
			<Fragment>
				<div
					className="statusbar-voice"
					style={{
						display: !session.config.hideVoiceControl ? 'inherit' : 'none'
					}}
				>
					<VoiceInput
						id="statusbar-voice"
						onClick={this.handleVoiceInputChange}
						mode="microphone" width={18} height={18}
						stopTooltip="Disable voice recording / control (F9)"
						startTooltip="Enable voice recording / control (F9)"
						onSegment={this.handleVoiceInput}
						onFinalText={this.handleFinalVoiceInput}
						onRecordingStop={this.stopRecording}
						maxAlternatives={5}
						remote={{
							toggle: 120 // F9
						}}
					/>
				</div>
				<span
					ref={( span ) => { this.displayedText = span; }}
					className="statusbar-voice-text"
				></span>
			</Fragment>
		);
	}
}


// PROPERTIES //

VoiceControl.propTypes = {
	session: PropTypes.object.isRequired
};


// EXPORTS //

export default VoiceControl;
